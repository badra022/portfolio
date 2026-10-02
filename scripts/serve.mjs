// Serves the static export from ./out under the same base path GitHub Pages uses.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";
const port = Number(process.env.PORT ?? 3000);
const root = join(process.cwd(), "out");
const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css",
  ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2", ".woff": "font/woff",
  ".json": "application/json", ".txt": "text/plain", ".ico": "image/x-icon", ".pdf": "application/pdf",
};

async function resolve(p) {
  const file = join(root, normalize(p));
  try {
    const s = await stat(file);
    return s.isDirectory() ? join(file, "index.html") : file;
  } catch {
    return null;
  }
}

createServer(async (req, res) => {
  const url = decodeURIComponent((req.url ?? "/").split("?")[0]);
  if (!url.startsWith(base)) {
    res.writeHead(302, { location: base + "/" }).end();
    return;
  }
  const file = await resolve(url.slice(base.length) || "/");
  try {
    if (!file) throw new Error("not found");
    const body = await readFile(file);
    res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" }).end(body);
  } catch {
    const body = await readFile(join(root, "404.html")).catch(() => "Not found");
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" }).end(body);
  }
}).listen(port, () => console.log(`Serving ./out at http://localhost:${port}${base}/`));

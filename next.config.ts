import type { NextConfig } from "next";

// The site is served from https://badra022.github.io/portfolio
// Set NEXT_PUBLIC_BASE_PATH="" to serve from a root domain instead.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;

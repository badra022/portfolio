// Renders the social share image (public/og.png) with Playwright.
// Runs in CI before the build, so the binary image never needs to be committed.
import { chromium } from "@playwright/test";
import { readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const fontDir = resolve("node_modules/@fontsource-variable/schibsted-grotesk/files");
const font = readdirSync(fontDir).find((f) => /^schibsted-grotesk-latin-wght-normal\.woff2$/.test(f));
if (!font) throw new Error("Schibsted Grotesk font file not found");

const html = `<html><head><style>
@font-face{font-family:S;src:url(file://${join(fontDir, font)});font-weight:100 900}
body{margin:0;width:1200px;height:630px;background:#f2f4f1;font-family:S;color:#142033;display:flex;flex-direction:column;justify-content:center;padding:0 90px;box-sizing:border-box}
h1{font-size:104px;line-height:.98;letter-spacing:-.035em;font-weight:800;margin:0}
p{font-size:34px;margin:28px 0 0;color:#556173}
.b{display:flex;align-items:center;gap:16px;margin-top:44px;font-size:30px;font-weight:600}
.c{width:44px;height:44px;border-radius:12px;background:#142033;display:flex;align-items:center;justify-content:center}
</style></head><body>
<h1>Ship releases<br>you can trust.</h1>
<p>Ahmed Badra · Senior SDET &amp; QA automation consultant</p>
<div class="b"><span class="c"><svg width="28" height="28" viewBox="0 0 64 64"><path d="m14 33.5 11.5 11L50 20" fill="none" stroke="#6fd3a0" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Playwright · API testing · CI/CD · QA audits</div>
</body></html>`;

const browser = await chromium.launch({ executablePath: process.env.PW_CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: "load" });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: "public/og.png" });
await browser.close();
console.log("Wrote public/og.png");

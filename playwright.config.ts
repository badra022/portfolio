import { defineConfig, devices } from "@playwright/test";

const PORT = Number(process.env.PORT ?? 3000);
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";
// Optional: point at a preinstalled Chromium (e.g. in sandboxes). CI uses Playwright's own browsers.
const executablePath = process.env.PW_CHROMIUM_PATH || undefined;

export default defineConfig({
  testDir: "./tests/specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : [["list"]],
  use: {
    baseURL: `http://localhost:${PORT}${basePath}/`,
    trace: "on-first-retry",
    launchOptions: { executablePath },
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"], launchOptions: { executablePath } } },
    { name: "mobile", use: { ...devices["Pixel 7"], launchOptions: { executablePath } } },
  ],
  webServer: {
    command: "node scripts/serve.mjs",
    url: `http://localhost:${PORT}${basePath}/`,
    reuseExistingServer: !process.env.CI,
  },
});

import { expect, test } from "@playwright/test";
import { SitePage } from "../pages/SitePage";

const slugs = ["coverage-40-to-95", "selenium-to-playwright", "qa-dashboard", "api-regression-and-ai-qa"];

test.describe("Case study pages", () => {
  for (const slug of slugs) {
    test(`${slug} has a story, a sidebar and contact buttons`, async ({ page }) => {
      const site = new SitePage(page);
      await site.open(`case-studies/${slug}/`);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      for (const section of ["Before", "What I did", "After", "What I can do for you"]) {
        await expect(page.getByRole("heading", { level: 2, name: section })).toBeVisible();
      }
      await expect(page.getByText("A global industrial software company", { exact: true })).toBeVisible();
      await site.expectValidWhatsAppLinks();
      await site.expectValidEmailLinks();
      await site.expectNoHorizontalScroll();
    });
  }
});

test.describe("Hiring page", () => {
  test("puts email first for recruiters and offers the CV", async ({ page }) => {
    const site = new SitePage(page);
    await site.open("hire/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Senior SDET");
    await expect(page.locator('a[data-cta="email"]').first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Request my full CV" })).toHaveAttribute("href", /^mailto:/);
    await site.expectValidEmailLinks();
    await site.expectValidWhatsAppLinks();
  });

  test("keeps the employer anonymous", async ({ page }) => {
    await page.goto("hire/");
    await expect(page.locator("body")).not.toContainText(/siemens/i);
  });
});

test("no internal link is broken", async ({ page, request }) => {
  const site = new SitePage(page);
  const seen = new Set<string>();
  for (const path of ["", "hire/", `case-studies/${slugs[0]}/`]) {
    await site.open(path);
    for (const link of await site.internalLinks()) seen.add(link);
  }
  for (const link of seen) {
    const res = await request.get(link);
    expect(res.status(), link).toBe(200);
  }
});

test("pages load without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  page.on("pageerror", (e) => errors.push(e.message));
  for (const path of ["", "hire/", `case-studies/${slugs[1]}/`]) {
    await page.goto(path);
    await page.waitForLoadState("networkidle");
  }
  expect(errors).toEqual([]);
});

import { expect, test } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test.describe("Home page", () => {
  let home: HomePage;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    await home.open();
  });

  test("leads with the value proposition and a WhatsApp call to action", async () => {
    await expect(home.heading).toHaveText("Ship releases you can trust.");
    await expect(home.heroWhatsApp).toBeVisible();
    await expect(home.heroWhatsApp).toHaveAttribute("target", "_blank");
  });

  test("every WhatsApp and email button is wired to the right contact", async () => {
    await home.expectValidWhatsAppLinks();
    await home.expectValidEmailLinks();
  });

  for (const [id, phrase] of [
    ["audit", "Release Confidence Audit"],
    ["manual", "test planning and manual QA"],
    ["build", "test automation"],
    ["ecosystem", "QA tooling and reporting"],
    ["architecture", "test architecture"],
  ] as const) {
    test(`the ${id} offer opens WhatsApp with a message about that offer`, async () => {
      const cta = home.offer(id).locator('a[data-cta="whatsapp"]');
      const text = new URL((await cta.getAttribute("href"))!).searchParams.get("text");
      expect(text).toContain(phrase);
    });
  }

  test("shows no prices", async ({ page }) => {
    await expect(page.locator("main")).not.toContainText(/\$\s?\d/);
  });

  test("lists all case studies and each one opens", async ({ page }) => {
    await expect(home.caseStudyLinks).toHaveCount(5);
    await home.caseStudyLinks.first().click();
    await expect(page).toHaveURL(/case-studies\/full-automation-coverage\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Full automation");
  });

  test("FAQ answers expand on click", async () => {
    const item = home.faq("Can you work with our stack?");
    await expect(item.getByText("Playwright, Selenium")).toBeHidden();
    await item.locator("summary").click();
    await expect(item.getByText(/Playwright, Selenium/)).toBeVisible();
  });

  test("has share metadata for LinkedIn and WhatsApp previews", async ({ page }) => {
    await expect(page).toHaveTitle(/Ahmed Badra/);
    const og = await page.locator('meta[property="og:image"]').getAttribute("content");
    expect(og).toMatch(/\/portfolio\/og\.png$/);
    const res = await page.request.get(new URL(og!).pathname);
    expect(res.status()).toBe(200);
  });

  test("shows the QA system as six connected stages", async ({ page }) => {
    await expect(page.locator("#system li")).toHaveCount(6);
  });

  test("photos load", async ({ page }) => {
    const photos = page.locator('img[alt^="Ahmed Badra"]');
    await expect(photos).toHaveCount(2);
    for (const img of await photos.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth)).toBeGreaterThan(0);
    }
  });

  test("does not scroll sideways", async () => {
    await home.expectNoHorizontalScroll();
  });
});

test("sticky contact bar shows on phones only", async ({ page, isMobile }) => {
  const home = new HomePage(page);
  await home.open();
  if (isMobile) await expect(home.stickyBar).toBeVisible();
  else await expect(home.stickyBar).toBeHidden();
});

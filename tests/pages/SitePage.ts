import { expect, type Locator, type Page } from "@playwright/test";

export const WHATSAPP_NUMBER = "201158667913";
export const EMAIL = "ahmedbadra29@gmail.com";

/** Shared page object for anything every page on the site has. */
export class SitePage {
  constructor(readonly page: Page) {}

  async open(path = "") {
    await this.page.goto(path);
  }

  get whatsappLinks(): Locator {
    return this.page.locator('a[data-cta="whatsapp"]');
  }

  get emailLinks(): Locator {
    return this.page.locator('a[data-cta="email"]');
  }

  get stickyBar(): Locator {
    return this.page.getByTestId("sticky-contact");
  }

  /** Every WhatsApp CTA must open a chat with the right number and a prefilled message. */
  async expectValidWhatsAppLinks() {
    const hrefs = await this.whatsappLinks.evaluateAll((els) => els.map((e) => e.getAttribute("href") ?? ""));
    expect(hrefs.length, "page should offer WhatsApp contact").toBeGreaterThan(0);
    for (const href of hrefs) {
      const url = new URL(href);
      expect(url.host).toBe("wa.me");
      expect(url.pathname).toBe(`/${WHATSAPP_NUMBER}`);
      expect(url.searchParams.get("text"), `prefilled text in ${href}`).toMatch(/^Hi Ahmed/);
    }
  }

  /** Every email CTA must be a mailto to the right address with a subject line. */
  async expectValidEmailLinks() {
    const hrefs = await this.emailLinks.evaluateAll((els) => els.map((e) => e.getAttribute("href") ?? ""));
    expect(hrefs.length, "page should offer email contact").toBeGreaterThan(0);
    for (const href of hrefs) {
      expect(href.startsWith(`mailto:${EMAIL}?`)).toBe(true);
      expect(new URL(href).searchParams.get("subject")).toBeTruthy();
    }
  }

  async expectNoHorizontalScroll() {
    const overflow = await this.page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  }

  async internalLinks(): Promise<string[]> {
    const hrefs = await this.page.locator("a[href]").evaluateAll((els) =>
      els.map((e) => (e as HTMLAnchorElement).href).filter((h) => h.startsWith(location.origin)),
    );
    return [...new Set(hrefs.map((h) => h.split("#")[0]))];
  }
}

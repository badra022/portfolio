import type { Locator } from "@playwright/test";
import { SitePage } from "./SitePage";

export class HomePage extends SitePage {
  get heading(): Locator {
    return this.page.getByRole("heading", { level: 1 });
  }

  get heroWhatsApp(): Locator {
    return this.page.locator('a[data-source="hero"][data-cta="whatsapp"]');
  }

  offer(id: string): Locator {
    return this.page.locator(`#offer-${id}`);
  }

  get caseStudyLinks(): Locator {
    return this.page.locator("#work a[href*='/case-studies/']");
  }

  faq(question: string): Locator {
    return this.page.locator("details", { hasText: question });
  }
}

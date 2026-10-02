import { mailLink, messages, whatsappLink } from "@/content/site";
import { MailIcon, WhatsAppIcon } from "./icons";

/** Bottom contact bar on small screens, always within thumb reach. */
export function StickyBar({ message = messages.general }: { message?: string }) {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden"
      data-testid="sticky-contact"
    >
      <div className="flex gap-2">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp"
          data-source="sticky-bar"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-pass font-semibold text-white"
        >
          <WhatsAppIcon />
          WhatsApp me
        </a>
        <a
          href={mailLink("Project inquiry from your portfolio", "Hi Ahmed,\n\n")}
          data-cta="email"
          data-source="sticky-bar"
          aria-label="Email me"
          className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/25 px-5 font-semibold"
        >
          <MailIcon />
          Email
        </a>
      </div>
    </div>
  );
}

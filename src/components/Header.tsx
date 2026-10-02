import Link from "next/link";
import { person, whatsappLink, messages } from "@/content/site";
import { WhatsAppIcon } from "./icons";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Case studies" },
  { href: "/#faq", label: "FAQ" },
  { href: "/hire/", label: "Hiring?" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 font-bold tracking-tight">
          <span className="text-lg">{person.name}</span>
          <span className="hidden text-sm font-normal text-slate sm:inline">Senior SDET</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="rounded-full px-3 py-2 text-[0.95rem] text-slate hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(messages.general)}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp"
            data-source="header"
            className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-pass sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Message me
          </a>
        </nav>
      </div>
    </header>
  );
}

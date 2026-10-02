import { person, whatsappLink, mailLink, messages } from "@/content/site";
import { MailIcon, WhatsAppIcon } from "./icons";

type Props = {
  message?: string;
  label?: string;
  emailSubject?: string;
  emailLabel?: string;
  tone?: "light" | "dark";
  source: string;
  showEmail?: boolean;
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[1.0625rem] font-semibold transition-colors";

export function WhatsAppButton({
  message = messages.general,
  label = "Message me on WhatsApp",
  tone = "light",
  source,
  className = "",
}: Pick<Props, "message" | "label" | "tone" | "source"> & { className?: string }) {
  const style =
    tone === "dark"
      ? "bg-run-pass text-ink hover:bg-white"
      : "bg-pass text-white hover:bg-ink";
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-source={source}
      className={`${base} ${style} ${className}`}
    >
      <WhatsAppIcon />
      {label}
    </a>
  );
}

export function EmailButton({
  subject = "Project inquiry from your portfolio",
  label = "Email me",
  tone = "light",
  source,
  className = "",
}: { subject?: string; label?: string; tone?: "light" | "dark"; source: string; className?: string }) {
  const style =
    tone === "dark"
      ? "border border-run-dim/60 text-white hover:border-white"
      : "border border-ink/25 text-ink hover:border-ink";
  return (
    <a
      href={mailLink(subject, "Hi Ahmed,\n\n")}
      data-cta="email"
      data-source={source}
      className={`${base} ${style} ${className}`}
    >
      <MailIcon />
      {label}
    </a>
  );
}

export function ContactPair(props: Props) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <WhatsAppButton message={props.message} label={props.label} tone={props.tone} source={props.source} />
      {props.showEmail !== false && (
        <EmailButton
          subject={props.emailSubject}
          label={props.emailLabel}
          tone={props.tone}
          source={props.source}
        />
      )}
    </div>
  );
}

export function EmailText({ className = "" }: { className?: string }) {
  return (
    <a href={`mailto:${person.email}`} className={`underline decoration-1 underline-offset-4 hover:text-pass ${className}`}>
      {person.email}
    </a>
  );
}

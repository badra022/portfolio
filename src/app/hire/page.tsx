import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, hire, mailLink, messages, person } from "@/content/site";
import { WhatsAppButton } from "@/components/Contact";
import { CheckIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { Avatar } from "@/components/Photo";
import { StickyBar } from "@/components/StickyBar";

export const metadata: Metadata = {
  title: "Hiring a Senior SDET",
  description: "Ahmed Badra — Senior SDET open to full-time remote roles. Playwright, API testing, CI/CD, framework design and QA leadership.",
};

const h2 = "text-[1.7rem] font-bold tracking-tight sm:text-[2rem]";

export default function HirePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 sm:pt-16">
      <section className="max-w-3xl">
        <div className="flex items-center gap-4">
          <Avatar size={88} className="ring-4" />
          <div>
            <p className="text-[1.125rem] font-bold">{person.name}</p>
            <p className="text-[1.0625rem] text-slate">For recruiters and engineering managers</p>
          </div>
        </div>
        <h1 className="mt-8 text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.03em] sm:text-[3.8rem]">{hire.headline}</h1>
        <p className="mt-6 text-[1.2rem] leading-relaxed text-ink/80">{hire.sub}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mailLink("Senior SDET role at ___", "Hi Ahmed,\n\nI'm hiring for a Senior SDET role at ___ and would like to talk.\n\n")}
            data-cta="email"
            data-source="hire-hero"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[1.0625rem] font-semibold text-white hover:bg-pass"
          >
            <MailIcon /> Email me about a role
          </a>
          <a
            href={mailLink("CV request — Senior SDET", "Hi Ahmed,\n\nCould you send me your latest CV? The role is: ___\n\n")}
            data-cta="cv"
            data-source="hire-hero"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full border border-ink/25 px-6 py-3 text-[1.0625rem] font-semibold hover:border-ink"
          >
            Request my full CV
          </a>
        </div>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.98rem]">
          <li>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
              <LinkedInIcon className="size-4" /> LinkedIn profile
            </a>
          </li>
          <li>
            <a href={person.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline-offset-4 hover:underline">
              <GitHubIcon className="size-4" /> GitHub
            </a>
          </li>
          <li className="text-slate">Cairo, Egypt · open to remote, worldwide</li>
        </ul>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className={h2}>What I bring</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {hire.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-[1.0625rem]">
              <CheckIcon className="mt-1 size-4 shrink-0 text-pass" />
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-8 inline-flex rounded-full bg-pass-soft px-4 py-2 text-[1rem] font-semibold text-ink">{hire.recentResult}</p>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
        <h2 className={h2}>Experience</h2>
        <ol className="space-y-10">
          {hire.experience.map((e) => (
            <li key={e.role}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-[1.25rem] font-bold">{e.role}</h3>
                <p className="text-slate">{e.period}</p>
              </div>
              <p className="mt-1 text-slate">
                {e.company}, {e.place}
              </p>
              <ul className="mt-4 space-y-2 text-[1.0625rem] text-ink/85">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-pass" />
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
        <h2 className={h2}>Skills</h2>
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {hire.skills.map((s) => (
            <div key={s.group}>
              <dt className="font-semibold">{s.group}</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-line bg-paper-2/60 px-2.5 py-1 text-sm">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
        <h2 className={h2}>Education and certifications</h2>
        <ul className="space-y-3 text-[1.0625rem]">
          <li>{hire.education}</li>
          {hire.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-10 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
        <h2 className={h2}>Case studies</h2>
        <ul className="divide-y divide-line border-y border-line">
          {caseStudies.map((c) => (
            <li key={c.slug}>
              <Link href={`/case-studies/${c.slug}/`} className="flex flex-col gap-1 py-4 hover:text-pass sm:flex-row sm:justify-between sm:gap-6">
                <span className="font-semibold">{c.title}</span>
                <span className="shrink-0 text-slate">{c.result}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-3xl bg-ink px-6 py-12 text-white sm:px-10">
        <h2 className="text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.3rem]">Let&apos;s talk about the role.</h2>
        <p className="mt-4 max-w-xl text-[1.125rem] text-run-text">
          Email works best for roles. WhatsApp is fine for a quick question.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={mailLink("Senior SDET role at ___", "Hi Ahmed,\n\nI'm hiring for a Senior SDET role at ___ and would like to talk.\n\n")}
            data-cta="email"
            data-source="hire-final"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-run-pass px-6 py-3 text-[1.0625rem] font-semibold text-ink hover:bg-white"
          >
            <MailIcon /> Email me about a role
          </a>
          <WhatsAppButton tone="dark" label="Quick question on WhatsApp" message={messages.hire} source="hire-final" className="!bg-transparent border border-run-dim/60 !text-white hover:border-white" />
        </div>
        <p className="mt-6 text-run-dim">{person.email}</p>
      </section>
      <StickyBar message={messages.hire} />
    </div>
  );
}

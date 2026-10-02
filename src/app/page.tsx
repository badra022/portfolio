import Link from "next/link";
import {
  about,
  employer,
  caseStudies,
  faqs,
  hero,
  messages,
  offers,
  person,
  problems,
  promises,
  proof,
  steps,
} from "@/content/site";
import { ContactPair, EmailText, WhatsAppButton } from "@/components/Contact";
import { CheckIcon, CrossIcon } from "@/components/icons";
import { StickyBar } from "@/components/StickyBar";
import { TestRun } from "@/components/TestRun";

const wrap = "mx-auto max-w-6xl px-4 sm:px-6";
const h2 = "text-[2rem] leading-[1.1] font-bold tracking-[-0.02em] sm:text-[2.6rem]";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} grid items-center gap-12 pt-12 pb-16 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:pb-24`}>
        <div>
          <p className="mb-5 max-w-md text-[1.0625rem] text-slate">{hero.audience}</p>
          <h1 className="text-[3.1rem] leading-[0.98] font-extrabold tracking-[-0.035em] sm:text-[4.6rem] lg:text-[5.2rem]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.2rem] leading-relaxed text-ink/80">{hero.sub}</p>
          <div className="mt-8">
            <ContactPair source="hero" label={hero.primaryCta} emailLabel={hero.secondaryCta} />
          </div>
          <p className="mt-4 text-[0.95rem] text-slate">{hero.reassurance}</p>
        </div>
        <TestRun />
      </section>

      {/* Proof */}
      <section aria-label="Track record" className="border-y border-line bg-paper-2/60">
        <dl className={`${wrap} grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4`}>
          {proof.map((p) => (
            <div key={p.value} className="border-l-2 border-pass pl-4">
              <dt className="text-[1.45rem] leading-tight font-bold tracking-tight sm:text-[1.7rem]">{p.value}</dt>
              <dd className="mt-1.5 text-[0.95rem] leading-snug text-slate">{p.label}</dd>
            </div>
          ))}
        </dl>
        <p className={`${wrap} -mt-4 pb-8 text-sm text-slate`}>
          Results from my current role as SDET at {employer}.
        </p>
      </section>

      {/* Problems */}
      <section className={`${wrap} grid gap-10 py-20 lg:grid-cols-[1fr_1.6fr] lg:py-28`}>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className={h2}>Sound familiar?</h2>
          <p className="mt-4 max-w-sm text-[1.0625rem] text-slate">
            These are the problems teams bring to me most. Each one has a fix.
          </p>
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {problems.map((p) => (
            <li key={p.pain} className="grid gap-3 py-6 sm:grid-cols-2 sm:gap-8">
              <p className="flex gap-3 text-[1.0625rem] font-semibold">
                <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-fail/10 text-fail">
                  <CrossIcon className="size-3" />
                </span>
                {p.pain}
              </p>
              <p className="flex gap-3 text-[1.0625rem] text-ink/80">
                <span className="mt-1 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-pass-soft text-pass">
                  <CheckIcon className="size-3" />
                </span>
                {p.outcome}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Services */}
      <section id="services" className="bg-ink py-20 text-white lg:py-28">
        <div className={wrap}>
          <h2 className={`${h2} max-w-2xl`}>Three ways I can help</h2>
          <p className="mt-4 max-w-xl text-[1.0625rem] text-run-text">
            Start with the one that fits where you are today. Not sure? Send me a message and I&apos;ll tell you honestly.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-3">
            {offers.map((o) => (
              <article key={o.id} id={`offer-${o.id}`} className="flex flex-col bg-ink-2 p-7 sm:p-8">
                <h3 className="text-[1.5rem] leading-tight font-bold tracking-tight">{o.name}</h3>
                <p className="mt-2 text-[0.95rem] text-run-pass">{o.forWho}</p>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-run-text">{o.summary}</p>
                <ul className="mt-6 mb-8 space-y-3 text-[0.98rem]">
                  {o.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-white/90">
                      <CheckIcon className="mt-1 size-4 shrink-0 text-run-pass" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppButton
                  tone="dark"
                  label={o.cta}
                  message={o.message}
                  source={`offer-${o.id}`}
                  className="mt-auto w-full sm:w-auto sm:self-start"
                />
              </article>
            ))}
          </div>
          <p className="mt-8 text-[1.0625rem] text-run-text">
            Hiring a full-time Senior SDET?{" "}
            <Link href="/hire/" className="font-semibold text-white underline underline-offset-4 hover:text-run-pass">
              See my experience for hiring teams
            </Link>
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section id="work" className={`${wrap} py-20 lg:py-28`}>
        <h2 className={h2}>Case studies</h2>
        <p className="mt-4 max-w-2xl text-[1.0625rem] text-slate">
          Real work from my current role at {employer}. Names and internal details are withheld; the results are not.
        </p>
        <ul className="mt-12 border-t border-line">
          {caseStudies.map((c) => (
            <li key={c.slug} className="border-b border-line">
              <Link
                href={`/case-studies/${c.slug}/`}
                className="group grid gap-3 py-8 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-10"
              >
                <p className="text-[1.5rem] leading-tight font-bold tracking-tight text-pass sm:text-[1.75rem]">{c.result}</p>
                <div>
                  <h3 className="text-[1.25rem] leading-snug font-semibold group-hover:underline group-hover:underline-offset-4">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[1.0625rem] text-slate">{c.summary}</p>
                  <p className="mt-3 text-[0.95rem] font-semibold">Read the case study</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="border-y border-line bg-paper-2/60 py-20 lg:py-24">
        <div className={wrap}>
          <h2 id="process" className={h2}>How we start</h2>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <span className="inline-flex size-9 items-center justify-center rounded-full border-2 border-pass font-bold text-pass">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-[1.2rem] font-bold">{s.title}</h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate">{s.text}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
            {promises.map((p) => (
              <li key={p} className="flex gap-3 text-[1.0625rem]">
                <CheckIcon className="mt-1 size-4 shrink-0 text-pass" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className={`${wrap} grid gap-10 py-20 lg:grid-cols-[1fr_1.6fr] lg:py-28`}>
        <h2 className={h2}>About me</h2>
        <div className="max-w-[40rem] space-y-5 text-[1.125rem] leading-relaxed text-ink/85">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <p className="text-slate">
            Based in {person.location}. Working remotely with teams in the Gulf, Europe and the US.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${wrap} grid gap-10 pb-20 lg:grid-cols-[1fr_1.6fr] lg:pb-28`}>
        <h2 className={h2}>Questions people ask</h2>
        <div className="border-t border-line">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-line">
              <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-[1.125rem] font-semibold">
                {f.q}
                <span className="faq-toggle mt-0.5 text-2xl leading-none font-normal text-pass transition-transform" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="max-w-[40rem] pb-6 text-[1.0625rem] leading-relaxed text-slate">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 sm:py-20">
          <h2 className="max-w-3xl text-[2.4rem] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[3.6rem]">
            Tell me what&apos;s breaking.
          </h2>
          <p className="mt-5 max-w-xl text-[1.125rem] leading-relaxed text-run-text">
            Send a short message about your product and your biggest testing problem. I&apos;ll reply with honest first thoughts, even if we don&apos;t end up working together.
          </p>
          <div className="mt-9">
            <ContactPair tone="dark" source="final-cta" message={messages.general} />
          </div>
          <p className="mt-6 text-[0.95rem] text-run-dim">
            Prefer to copy the address? <EmailText className="text-run-text" />
          </p>
        </div>
      </section>

      <StickyBar />
    </>
  );
}

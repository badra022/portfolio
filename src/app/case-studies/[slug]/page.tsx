import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, employer, offers } from "@/content/site";
import { ContactPair } from "@/components/Contact";
import { StickyBar } from "@/components/StickyBar";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.summary };
}

const sectionTitle = "text-[1.6rem] font-bold tracking-tight sm:text-[1.9rem]";

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className={sectionTitle}>{title}</h2>
      <div className="mt-5 max-w-[40rem] space-y-4 text-[1.125rem] leading-relaxed text-ink/85">
        {items.map((t) => (
          <p key={t.slice(0, 32)}>{t}</p>
        ))}
      </div>
    </section>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) notFound();
  const offer = offers.find((o) => o.id === c.offerId)!;
  const others = caseStudies.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-6xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
      <Link href="/#work" className="text-[0.95rem] text-slate hover:text-ink">
        All case studies
      </Link>
      <div className="mt-6 grid gap-12 lg:grid-cols-[1.7fr_1fr]">
        <div>
          <p className="text-[1.25rem] font-bold text-pass">{c.result}</p>
          <h1 className="mt-3 text-[2.4rem] leading-[1.05] font-extrabold tracking-[-0.03em] sm:text-[3.4rem]">{c.title}</h1>
          <p className="mt-6 max-w-[40rem] text-[1.2rem] leading-relaxed text-ink/80">{c.summary}</p>
          <div className="mt-10">
            <Section title="Before" items={c.before} />
            <Section title="What I did" items={c.during} />
            <Section title="After" items={c.after} />
          </div>
        </div>
        <aside className="order-first lg:order-none lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-line bg-paper-2/60 p-6">
            <dl className="space-y-5">
              <div>
                <dt className="text-sm text-slate">Company</dt>
                <dd className="mt-1 font-semibold">{employer[0].toUpperCase() + employer.slice(1)}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate">My role</dt>
                <dd className="mt-1 font-semibold">{c.role}</dd>
              </div>
              <div>
                <dt className="text-sm text-slate">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-paper px-2.5 py-1 text-sm">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-5 border-t border-line pt-4 text-sm text-slate">
              Company and product details are withheld under confidentiality.
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-6 rounded-3xl bg-ink px-6 py-12 text-white sm:px-10">
        <h2 className="max-w-2xl text-[1.9rem] leading-tight font-bold tracking-tight sm:text-[2.3rem]">What I can do for you</h2>
        <p className="mt-4 max-w-2xl text-[1.125rem] leading-relaxed text-run-text">{c.forYou}</p>
        <p className="mt-2 text-run-dim">
          Related service: <span className="text-white">{offer.name}</span>
        </p>
        <div className="mt-8">
          <ContactPair tone="dark" source={`case-${c.slug}`} label={offer.cta} message={offer.message} />
        </div>
      </section>

      <nav aria-label="More case studies" className="mt-16">
        <h2 className="text-[1.3rem] font-bold">More case studies</h2>
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/case-studies/${o.slug}/`} className="flex flex-col gap-1 py-4 hover:text-pass sm:flex-row sm:justify-between sm:gap-6">
                <span className="font-semibold">{o.title}</span>
                <span className="text-slate">{o.result}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <StickyBar message={offer.message} />
    </article>
  );
}

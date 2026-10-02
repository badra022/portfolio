import { heroRun } from "@/content/site";
import { CheckIcon } from "./icons";

const STEP = 0.75; // seconds between lines

/** The hero's signature moment: a test run where everyday release fears pass, one by one. */
export function TestRun() {
  const total = heroRun.length;
  const end = 0.4 + total * STEP + 0.4;
  return (
    <figure
      className="overflow-hidden rounded-2xl bg-ink text-run-text shadow-[0_30px_60px_-30px_rgba(20,32,51,0.55)]"
      aria-label="Example test run: release checks passing"
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-xs text-run-dim">your-app / release checks</span>
      </div>
      <div className="px-5 py-5 font-mono text-[0.84rem] leading-relaxed sm:px-6 sm:text-[0.9rem]">
        <p className="text-run-dim">
          <span className="text-run-pass">$</span> npx playwright test
        </p>
        <p className="mt-1 mb-4 text-run-dim">Running {total} tests using 4 workers</p>
        <ol className="space-y-2.5">
          {heroRun.map((line, i) => {
            const start = 0.4 + i * STEP;
            const done = start + STEP * 0.8;
            return (
              <li
                key={line}
                className="run-line flex gap-3"
                style={{ animationDelay: `${start}s`, ["--done" as string]: `${done}s` }}
              >
                <span className="relative mt-[0.2em] inline-flex size-4 shrink-0 items-center justify-center">
                  <span className="run-mark-pending absolute inset-0 rounded-full border-2 border-run-dim/40 border-t-run-pass" />
                  <span className="run-mark-done absolute inset-0 inline-flex items-center justify-center text-run-pass">
                    <CheckIcon />
                  </span>
                </span>
                <span>{line}</span>
              </li>
            );
          })}
        </ol>
        <p className="run-line mt-5 border-t border-white/10 pt-4" style={{ animationDelay: `${end}s` }}>
          <span className="text-run-pass">{total} passed</span>
          <span className="text-run-dim"> · safe to ship</span>
        </p>
      </div>
    </figure>
  );
}

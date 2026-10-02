import Link from "next/link";
import { person } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon, CheckIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-line pb-28 sm:pb-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-10 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="space-y-3">
          <p className="font-bold">{person.name}</p>
          <p className="max-w-md text-slate">
            Senior SDET and QA automation consultant, based in {person.location}. Working remotely with teams worldwide.
          </p>
          <p className="flex items-center gap-2 text-sm text-slate">
            <span className="inline-flex size-5 items-center justify-center rounded-full bg-pass-soft text-pass">
              <CheckIcon className="size-3" />
            </span>
            <span>
              This site is covered by Playwright tests that run on every change.{" "}
              <a href={`${person.repo}/actions`} className="underline underline-offset-4 hover:text-ink" target="_blank" rel="noopener noreferrer">
                See the test runs
              </a>
            </span>
          </p>
        </div>
        <ul className="flex flex-wrap items-start gap-x-6 gap-y-3 text-[0.95rem]">
          <li>
            <a href={`mailto:${person.email}`} className="inline-flex items-center gap-2 hover:text-pass">
              <MailIcon className="size-4" /> {person.email}
            </a>
          </li>
          <li>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-pass">
              <LinkedInIcon className="size-4" /> LinkedIn
            </a>
          </li>
          <li>
            <a href={person.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-pass">
              <GitHubIcon className="size-4" /> GitHub
            </a>
          </li>
          <li>
            <Link href="/hire/" className="hover:text-pass">For recruiters</Link>
          </li>
        </ul>
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-slate sm:px-6">
        © {new Date().getFullYear()} {person.name}. Client and employer names are withheld under confidentiality.
      </p>
    </footer>
  );
}

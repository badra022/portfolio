# Ahmed Badra — Senior SDET portfolio

[![Test and deploy](https://github.com/badra022/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/badra022/portfolio/actions/workflows/deploy.yml)

Live site: **https://badra022.github.io/portfolio/**

Portfolio and services site for Ahmed Badra, Senior SDET and QA automation consultant. Built with Next.js (static export), TypeScript and Tailwind CSS, tested with Playwright, and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Edit the content

All copy — headline, offers, case studies, FAQ, hiring page, contact details — lives in one file:

```
src/content/site.ts
```

Change it, push to `main`, and the site rebuilds, re-runs the tests and redeploys in a few minutes. You can edit it right in the GitHub web editor.

## Run locally

```bash
npm install
npm run dev            # http://localhost:3000/portfolio
```

Production build and tests:

```bash
npx playwright install chromium
npm run og             # renders the share image to public/og.png
npm run build          # static site in ./out
npm run test:e2e       # serves ./out at /portfolio and runs the suite
```

## What the tests cover

The Playwright suite (`tests/`) runs on desktop and mobile Chrome, using page objects:

- Every WhatsApp button opens a chat with the right number and a prefilled, offer-specific message
- Every email button is a `mailto:` with a subject line
- All case study pages render the full story and contact buttons
- No broken internal links, no console errors, no horizontal scroll on phones
- Mobile sticky contact bar appears on phones only
- Accessibility check with axe (no serious or critical WCAG 2 A/AA issues)
- Employer stays anonymous; no prices appear on the page
- Share preview image (`og.png`) is published

## Project layout

```
src/app/                 pages (home, /case-studies/[slug], /hire)
src/components/          header, footer, contact buttons, hero test run
src/content/site.ts      all site copy
tests/pages/             page objects
tests/specs/             test specs
scripts/serve.mjs        serves ./out under /portfolio, like GitHub Pages
scripts/og.mjs           renders the social share image with Playwright
.github/workflows/       CI: build, type check, test, deploy
```

## Using a custom domain

Set `NEXT_PUBLIC_BASE_PATH=""` in the workflow's build step (and update `siteUrl` in `src/content/site.ts`), then add the domain under **Settings → Pages**.

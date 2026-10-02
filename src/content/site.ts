// All site copy lives here. Edit this file to change wording, offers,
// case studies or contact details — the pages read from it.

export const person = {
  name: "Ahmed Badra",
  role: "Senior SDET & QA automation consultant",
  location: "Cairo, Egypt",
  email: "ahmedbadra29@gmail.com",
  whatsapp: "201158667913", // international format, no "+" or spaces
  linkedin: "https://linkedin.com/in/badra099",
  github: "https://github.com/badra022",
  repo: "https://github.com/badra022/portfolio",
  siteUrl: "https://badra022.github.io/portfolio",
};

export const employer = "a global industrial software company";

/** Build a WhatsApp click-to-chat link with a prefilled message. */
export function whatsappLink(message: string) {
  return `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Build a mailto link with subject and body. */
export function mailLink(subject: string, body = "") {
  const params = new URLSearchParams();
  params.set("subject", subject);
  if (body) params.set("body", body);
  return `mailto:${person.email}?${params.toString().replace(/\+/g, "%20")}`;
}

export const messages = {
  general:
    "Hi Ahmed, I found your portfolio. I'd like to talk about testing for our product. Here's what we're working on: ",
  audit:
    "Hi Ahmed, I'm interested in a Release Confidence Audit. Our app is built with ___ and our biggest problem right now is ___.",
  build:
    "Hi Ahmed, we need help with our test automation. Current setup: ___ (none / Selenium / Cypress / Playwright). Main issue: ___.",
  partner:
    "Hi Ahmed, I'd like to discuss ongoing QA support for our team of ___ developers.",
  hire: "Hi Ahmed, I'm hiring for a Senior SDET role at ___ and would like to talk.",
};

export const hero = {
  audience: "For startups, product teams and companies shipping web apps and APIs",
  headline: "Ship releases you can trust.",
  sub: "I'm Ahmed, a senior SDET. I build, fix and audit test automation — Playwright, API and CI — so bugs get caught before your users find them.",
  primaryCta: "Message me on WhatsApp",
  secondaryCta: "Email me",
  reassurance: "You talk to me directly. No agency, no sales team.",
};

// Lines shown in the animated test run in the hero.
export const heroRun = [
  "checkout completes on Chrome, Safari and mobile",
  "login survives an expired session",
  "API answers bad input with a 4xx, not a 500",
  "last week's bug stays fixed",
  "deploy is blocked when a critical test fails",
];

export const proof = [
  { value: "40% → 95%", label: "automated test coverage, across new and legacy services" },
  { value: "Selenium → Playwright", label: "framework migration I led, end to end" },
  { value: "1 framework", label: "built to serve every QA automation project on the team" },
  { value: "ISTQB", label: "Certified Tester, Foundation Level" },
];

export const problems = [
  {
    pain: "Every release breaks something you already fixed.",
    outcome: "A regression suite that runs on every pull request and stops bad merges.",
  },
  {
    pain: "Tests fail at random, so nobody trusts them.",
    outcome: "Flaky tests found, fixed or quarantined, so a red build means a real bug.",
  },
  {
    pain: "A freelancer or agency built your app, and there are no tests.",
    outcome: "A map of what can break, then automated checks on the flows that make you money.",
  },
  {
    pain: "You're stuck with old Selenium scripts nobody wants to touch.",
    outcome: "A step-by-step move to Playwright and TypeScript, without stopping releases.",
  },
  {
    pain: "Nobody outside QA knows if the product is healthy.",
    outcome: "Test results in a dashboard and in your team chat, readable by anyone.",
  },
];

export type Offer = {
  id: string;
  name: string;
  forWho: string;
  summary: string;
  includes: string[];
  cta: string;
  message: string;
};

export const offers: Offer[] = [
  {
    id: "audit",
    name: "Release Confidence Audit",
    forWho: "For startups and apps built by freelancers or agencies",
    summary:
      "A fixed-scope review of your app, your tests and your pipeline. You get a clear list of what can break and what to fix first.",
    includes: [
      "Risk map of your critical user flows",
      "Review of existing tests, test data and CI setup",
      "Flaky test and pipeline speed analysis",
      "Written report with prioritized fixes and a 30-day plan",
      "Walkthrough call to go through findings with your team",
    ],
    cta: "Ask about an audit",
    message: messages.audit,
  },
  {
    id: "build",
    name: "Framework build or rescue",
    forWho: "For teams with no automation, or automation nobody trusts",
    summary:
      "I set up a test framework that your team can keep running, or I fix the one you have.",
    includes: [
      "Playwright + TypeScript (or Cypress) framework with page objects and fixtures",
      "API tests with Playwright, Postman or Supertest",
      "Runs in your CI on every pull request, with reports",
      "Selenium or Nightwatch to Playwright migration",
      "Docs and a handover session so your team owns it",
    ],
    cta: "Talk about your framework",
    message: messages.build,
  },
  {
    id: "partner",
    name: "Ongoing QA partner",
    forWho: "For teams that ship often and need QA without a full-time hire",
    summary:
      "I join your team part-time to keep tests green and cover new features as you build them.",
    includes: [
      "Test coverage for new features each sprint",
      "Suite maintenance and flaky test fixes",
      "Release checks and exploratory testing",
      "Monthly quality report for founders and managers",
    ],
    cta: "Discuss ongoing support",
    message: messages.partner,
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  result: string;
  summary: string;
  stack: string[];
  role: string;
  before: string[];
  during: string[];
  after: string[];
  forYou: string;
  offerId: Offer["id"];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "coverage-40-to-95",
    title: "Taking automated test coverage from 40% to 95%",
    result: "40% → 95% automated coverage",
    summary:
      "Structured automation for both new and legacy services on a platform engineering team, plus higher requirements coverage across the board.",
    stack: ["Playwright", "TypeScript", "Postman", "TestRail", "CI/CD"],
    role: "SDET, owned QA for the delivery team",
    before: [
      "A platform engineering team at a global industrial software company was shipping new services while older ones kept running in production.",
      "Only about 40% of the team's tests were automated. The rest relied on manual checks, which slowed releases and left regressions to chance.",
    ],
    during: [
      "I owned QA for the team end to end: test planning, test design and automation, inside an Agile delivery cycle.",
      "I introduced a structured approach to automation for new services and worked back through the legacy ones, starting with the flows with the most risk.",
      "I linked automated tests to requirements, so the team could see which requirements were covered and which were not.",
      "Testing covered frontend, backend, data pipelines, cloud-native services and databases — from smoke tests to usability checks across environments.",
    ],
    after: [
      "Automated test coverage rose from 40% to 95%.",
      "Requirements coverage went up across the team, and regressions were caught by the suite instead of by users.",
      "Developers, product and DevOps had a shared view of quality to plan releases against.",
    ],
    forYou:
      "If most of your testing is still manual, I can find the highest-risk flows and automate those first.",
    offerId: "build",
  },
  {
    slug: "selenium-to-playwright",
    title: "Migrating a test framework from Selenium to Playwright",
    result: "Full migration to Playwright + TypeScript",
    summary:
      "Led the move of the team's shared framework and test projects from Selenium (Nightwatch.js) to Playwright, without pausing delivery.",
    stack: ["Playwright", "TypeScript", "Nightwatch.js", "Selenium", "BrowserStack", "AWS Device Farm", "TestRail"],
    role: "SDET, led the migration",
    before: [
      "The team's end-to-end tests ran on a Nightwatch.js (Selenium) framework I had built and maintained. It handled several app environments and ran on remote grids like BrowserStack and AWS Device Farm.",
      "It worked, but Selenium-based suites are slower to write and harder to keep stable than modern tools allow.",
    ],
    during: [
      "I designed a new Playwright framework in TypeScript that covers end-to-end, API and integration tests in one place.",
      "I structured it around page objects, backend service classes and shared test utilities, using Playwright's own fixtures, custom assertions and per-environment configs.",
      "I moved the test projects across in steps, so releases were never blocked by the migration.",
      "Reporting stayed connected the whole way: results flow to TestRail, Microsoft Teams and the QA dashboard.",
    ],
    after: [
      "One modern framework now serves end-to-end, API and integration testing.",
      "New tests are faster to write and easier to debug, with Playwright's tracing and fixtures.",
      "Results reach the right people automatically, with no manual reporting.",
    ],
    forYou:
      "If you're stuck on old Selenium or Cypress scripts, I can plan and run a migration that doesn't stop your releases.",
    offerId: "build",
  },
  {
    slug: "qa-dashboard",
    title: "A live QA dashboard so stakeholders see quality, not just hear about it",
    result: "Test results visible to everyone, live",
    summary:
      "Designed and built a serverless dashboard on AWS that shows automation results and status to managers and stakeholders, with minimal manual reporting.",
    stack: ["React", "Webpack", "AWS Lambda", "DynamoDB Streams", "API Gateway", "S3", "Route 53", "VPC"],
    role: "SDET, designed, built and owned the dashboard",
    before: [
      "Automation results lived inside test tools and CI logs. Anyone outside QA had to ask for a status update.",
      "Pulling results together by hand took time and was out of date as soon as it was sent.",
    ],
    during: [
      "I built a React dashboard served from S3 and Route 53, backed by API Gateway and Lambda.",
      "Test runs write their results to DynamoDB, and DynamoDB Streams keep the dashboard current as runs finish.",
      "I set it up so the automation frameworks report into it on their own, with no extra steps for testers.",
    ],
    after: [
      "Stakeholders check the state of automation themselves, any time.",
      "The QA team spends less time on status reports and more time testing.",
      "The dashboard became part of a wider reporting setup for the QA team.",
    ],
    forYou:
      "If your founders or managers can't tell whether a release is safe, I can make test results visible to them.",
    offerId: "partner",
  },
  {
    slug: "api-regression-and-ai-qa",
    title: "An API regression setup and AI-assisted QA workflows",
    result: "Faster API regression and test authoring",
    summary:
      "Built a Postman API regression system connected to the team's tools and reports, and introduced AI-assisted QA workflows with GitHub Copilot.",
    stack: ["Postman", "Newman", "GitHub Copilot", "VS Code", "CI/CD"],
    role: "SDET, designed the setup and trained the team",
    before: [
      "API tests existed, but running them and sharing results was a manual job.",
      "The team had no shared way of using AI tools in QA work.",
    ],
    during: [
      "I designed a regression setup where the Postman API tests run in sync with the team's tools and reports.",
      "I took the initiative to build AI-assisted QA workflows in VS Code with GitHub Copilot, for writing and reviewing tests faster.",
      "I helped onboard and train new team members on the frameworks and workflows.",
    ],
    after: [
      "API regressions run as part of the normal cycle, with results where the team already looks.",
      "Test writing is faster with AI help, and every test is still reviewed by a person.",
      "New team members get productive sooner.",
    ],
    forYou:
      "If your API tests sit unused, or you want AI tools in your QA process without losing control, I can set that up.",
    offerId: "audit",
  },
];

export const steps = [
  {
    title: "Send a message",
    text: "Tell me about your product and what's going wrong, on WhatsApp or email. One line is enough to start.",
  },
  {
    title: "Short call",
    text: "We talk through your app, your team and your goals. I ask questions and give you honest first thoughts.",
  },
  {
    title: "Clear proposal",
    text: "You get a written plan with scope, deliverables and timeline before any work starts.",
  },
  {
    title: "Work in your repo",
    text: "I work in your codebase and tools, with regular updates. Everything I build is yours.",
  },
];

export const promises = [
  "Scope agreed in writing before work starts",
  "All code and docs live in your repo, from day one",
  "Happy to sign your NDA",
  "Plain-English updates, not just test logs",
];

export const faqs = [
  {
    q: "Why work with someone based in Cairo?",
    a: "Cairo time overlaps fully with Gulf and European working hours, and with part of the US morning. I write clear, async-friendly updates, so work keeps moving between calls. And you get enterprise-level QA experience for a startup budget.",
  },
  {
    q: "Can you work with our stack?",
    a: "Most likely. I work with Playwright, Cypress, Selenium/Nightwatch and Appium for UI; Postman, Bruno and Supertest for APIs; Pytest, JUnit and TestNG for unit and service tests; and TypeScript, JavaScript, Python and Java. I set up tests in GitHub Actions and other CI, and run them on grids like BrowserStack. If it runs in a browser or exposes an API, I can test it.",
  },
  {
    q: "Our app was built by a freelancer and the code is messy. Can you still help?",
    a: "Yes, that's exactly what the audit is for. I map what can break first, then automate the flows that matter most. You don't need clean code to start testing it.",
  },
  {
    q: "Will we depend on you forever?",
    a: "No. Everything lives in your repo with documentation, and I finish with a handover session so your team can run and extend it.",
  },
  {
    q: "Do you use AI?",
    a: "Yes, I use AI tools like GitHub Copilot to write tests faster. I review every test myself. AI speeds up the work; it doesn't decide what quality means for your product.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I'm open to full-time remote Senior SDET roles. See the hiring page for my experience and skills.",
  },
];

export const about = {
  paragraphs: [
    "I'm a senior SDET with a background in Systems and Biomedical Engineering from Cairo University. Today I own quality for a platform engineering team at a global industrial software company, from test planning to automation.",
    "I've built the frameworks a whole QA team runs on, moved them to Playwright, and made results visible to people who never open a test report. Before that, I taught C, C++ and data structures to university students — which is why I care about clear docs and teams that can run things without me.",
    "I believe a test suite is only useful if people trust it. Green should mean safe to ship, and red should mean a real problem.",
  ],
};

export const hire = {
  headline: "Senior SDET, open to full-time remote roles.",
  sub: "I lead QA from test planning to automation, build frameworks a whole team can use, and make quality visible to everyone involved.",
  highlights: [
    "Owned QA for a platform engineering delivery team in an Agile setup",
    "Designed and built the automation framework used by all of the team's QA projects",
    "Led the migration from Selenium (Nightwatch.js) to Playwright + TypeScript",
    "Raised automated test coverage from 40% to 95% across new and legacy services",
    "Built a serverless QA dashboard on AWS for stakeholder visibility",
    "Introduced AI-assisted QA workflows with GitHub Copilot",
    "Onboarded and trained new team members",
  ],
  experience: [
    {
      role: "Software Development Engineer in Test",
      company: "Global industrial software company",
      place: "Cairo, hybrid",
      period: "2024 – present",
      points: [
        "Own QA for a platform engineering team, from test planning to automation.",
        "Designed, built and improved the automation framework behind all QA projects.",
        "Led the Selenium to Playwright migration of the framework and test projects.",
        "Designed a Postman API regression setup synced with team tools and reports.",
        "Built and own the QA automation dashboard (React, AWS serverless).",
        "Test frontend, backend, data pipelines, cloud-native apps and databases.",
        "Raised automated coverage from 40% to 95%.",
      ],
    },
    {
      role: "Software Instructor",
      company: "TeacherOn",
      place: "Remote",
      period: "2022 – 2024",
      points: [
        "Taught C, C++, data structures, embedded systems and microprocessors to university students.",
      ],
    },
    {
      role: "Machine Learning Engineer (intern)",
      company: "Technocolabs",
      place: "Remote",
      period: "2022",
      points: ["Built an ML-powered web app with Python and Flask."],
    },
  ],
  skills: [
    { group: "UI automation", items: ["Playwright", "Cypress", "Selenium", "Nightwatch.js", "Appium"] },
    { group: "API testing", items: ["Postman", "Bruno", "Supertest", "REST APIs"] },
    { group: "Test frameworks", items: ["Pytest", "JUnit", "TestNG"] },
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C/C++"] },
    { group: "CI and cloud", items: ["CI/CD", "GitHub Actions", "AWS", "Linux & Bash", "BrowserStack", "AWS Device Farm"] },
    { group: "Process and tools", items: ["STLC", "Agile", "Jira & Confluence", "TestRail", "Git", "GitHub Copilot"] },
  ],
  education: "B.Sc. Systems and Biomedical Engineering, Cairo University, 2022 — Very Good with Honors",
  certifications: [
    "ISTQB Certified Tester, Foundation Level (CTFL)",
    "AWS DevOps and Linux for Cloud — Cloud Native Base Camp",
    "React Web Development — DEPI",
  ],
};

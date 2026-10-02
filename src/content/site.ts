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
  photo: "/ahmed.jpg", // in /public; served under the base path
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
  manual:
    "Hi Ahmed, I'm interested in test planning and manual QA. Our product is ___ and we need help with ___.",
  build:
    "Hi Ahmed, we need help with our test automation. Current setup: ___ (none / Selenium / Cypress / Playwright). Main issue: ___.",
  ecosystem:
    "Hi Ahmed, I'd like to talk about QA tooling and reporting for our team. Our biggest gap right now is ___.",
  architecture:
    "Hi Ahmed, we're setting up or scaling our QA team and want help with test architecture. Team size: ___.",
  hire: "Hi Ahmed, I'm hiring for a Senior SDET role at ___ and would like to talk.",
};

export const hero = {
  audience: "For startups, product teams and QA teams shipping web apps and APIs",
  headline: "Ship releases you can trust.",
  sub: "I'm Ahmed, a senior SDET. I build complete test automation and the QA systems around it: test data tools, CI pipelines, and reports your stakeholders actually read.",
  primaryCta: "Message me on WhatsApp",
  secondaryCta: "Email me",
  reassurance: "You talk to me directly. No agency, no sales team.",
};

// Lines shown in the animated test run in the hero.
export const heroRun = [
  "checkout completes on Chrome, Safari and mobile",
  "test data seeded through the QA API",
  "API answers bad input with a 4xx, not a 500",
  "last week's bug stays fixed",
  "deploy is blocked when a critical test fails",
];
export const heroRunSummary = "report sent to stakeholders";

export const proof = [
  { value: "40% → 95%", label: "automation coverage I delivered across new and legacy services" },
  { value: "Selenium → Playwright", label: "framework migration I led, end to end" },
  { value: "Full QA ecosystem", label: "framework, test data APIs, dashboard and AI reports" },
  { value: "ISTQB", label: "Certified Tester, Foundation Level" },
];

export const problems = [
  {
    pain: "Every release breaks something you already fixed.",
    outcome: "Full regression automation that runs on every pull request and blocks bad merges.",
  },
  {
    pain: "Your tests pass, but bugs still reach production.",
    outcome:
      "Stronger tests that catch more kinds of defects: functional, API, data, edge cases and regressions. They check what actually matters, not just that a page loaded.",
  },
  {
    pain: "Tests fail at random, and debugging takes hours.",
    outcome: "Clear logs, traces and reports, so a person or an AI agent can find the cause fast.",
  },
  {
    pain: "Testers spend hours preparing test data by hand.",
    outcome: "A test data API and helper scripts that set up any scenario in seconds.",
  },
  {
    pain: "A freelancer or agency built your app, and there are no tests.",
    outcome: "A map of what can break, then automated checks on the flows that make you money.",
  },
  {
    pain: "Your test cases are outdated, or were never written.",
    outcome:
      "Clear test plans and test cases, drafted quickly with AI and reviewed by a person, kept in your test management tool.",
  },
];

export const system = {
  title: "A QA system your team uses every day",
  intro:
    "Tests are only one part of quality. Your team gets the whole system around them, ready to use, so test results turn into decisions.",
  layers: [
    {
      name: "Test planning",
      text: "Test plans and test cases are drafted by an AI workflow from your requirements, then reviewed and approved by your team.",
    },
    {
      name: "Test framework",
      text: "Your team writes and runs UI, API and integration tests on one clear, shared architecture.",
    },
    {
      name: "Test data and tooling",
      text: "Testers create data and set up scenarios in seconds, through simple APIs and scripts.",
    },
    {
      name: "Observability",
      text: "Developers see exactly why a test failed, through clear logs, traces and HTML reports. AI agents can analyze pipeline runs too.",
    },
    {
      name: "Test management",
      text: "Every result shows up in TestRail, Xray or Jira, linked to its requirement.",
    },
    {
      name: "Results delivery",
      text: "Stakeholders get dashboards and short reports sent automatically, each showing what matters to them and summarized by AI.",
    },
  ],
};

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
      "Review of your test architecture",
      "Gaps in reporting and observability",
      "Flaky test and pipeline speed analysis",
      "Written report with prioritized fixes and a 30-day plan",
      "Walkthrough call to go through findings with your team",
    ],
    cta: "Ask about an audit",
    message: messages.audit,
  },
  {
    id: "manual",
    name: "Test planning and manual QA, AI-assisted",
    forWho: "For teams that need solid test coverage fast, with or without automation",
    summary:
      "I write the test plans and test cases your product needs, and run the hands-on testing. AI does the first draft, and I check every one.",
    includes: [
      "Test strategy and test plans from your requirements or user stories",
      "Test cases written with proven test design techniques (ISTQB)",
      "Exploratory, usability, smoke and release testing",
      "Clear bug reports your developers can act on",
      "An agentic workflow that drafts test plans, test cases and bug reports for you, with a person approving every step",
      "Everything delivered into your test management tool",
    ],
    cta: "Talk about test planning",
    message: messages.manual,
  },
  {
    id: "build",
    name: "Complete test automation",
    forWho: "For teams with little automation, or automation nobody trusts",
    summary:
      "I automate your full regression scope, 100% of the agreed test cases, and wire it into CI so it runs on every change.",
    includes: [
      "Playwright + TypeScript (or Cypress) framework",
      "UI, API and integration tests",
      "100% of the agreed regression suite automated",
      "Stronger assertions and test design that catch more types of defects",
      "Runs in CI on every pull request",
      "Selenium or Nightwatch to Playwright migration",
      "Docs and a handover session",
    ],
    cta: "Talk about automation",
    message: messages.build,
  },
  {
    id: "ecosystem",
    name: "QA ecosystem and tooling",
    forWho: "For QA teams that need more than test scripts",
    summary:
      "I build the backend tools and reporting that make your QA team faster and your results visible.",
    includes: [
      "Test data APIs and services",
      "Automation scripts that assist manual testing",
      "Logging and observability for fast debugging, by people or AI agents",
      "Test management integration (TestRail, Xray, Jira)",
      "Stakeholder dashboards and automatic, AI-summarized reports",
      "Built cloud-native on AWS",
    ],
    cta: "Talk about QA tooling",
    message: messages.ecosystem,
  },
  {
    id: "architecture",
    name: "Test architecture and team enablement",
    forWho: "For companies setting up or scaling a QA function",
    summary:
      "I design the test architecture, set the standards, and onboard your team so they can run it without me.",
    includes: [
      "Test strategy and architecture decisions",
      "Framework standards and code reviews",
      "Onboarding and training sessions",
      "AI-assisted QA workflows with Claude Code, GitHub Copilot and agents",
    ],
    cta: "Talk about architecture",
    message: messages.architecture,
  },
];

export const offersNote = "Any of these can also run as ongoing monthly support.";

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
    title: "Raising automation coverage from 40% to 95%",
    result: "40% → 95% automation coverage",
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
      "If most of your testing is still manual, I start with the highest-risk flows. On a defined scope, I aim to automate 100% of your regression suite.",
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
    slug: "test-data-observability-ai-reports",
    title: "Test data APIs, a logging standard and AI-summarized pipeline reports",
    result: "Faster test setup and faster debugging",
    summary:
      "Built the tooling behind the automated tests: APIs that create test data, a logging setup used in every test, and AI reports that analyze each pipeline run.",
    stack: ["TypeScript", "REST APIs", "Playwright", "CI pipelines", "AI agents"],
    role: "SDET, designed and built the tooling",
    before: [
      "Setting up test data and understanding failed pipeline runs both took manual effort.",
      "When a test failed, the reason was often buried in long CI output, and every test logged information in its own way.",
    ],
    during: [
      "I built test data APIs, so any automated test can request the exact data it needs instead of preparing it by hand.",
      "I designed a logging setup used in every automated test, with a clear guide and standard, so each test gives the most observability possible.",
      "I built AI-summarized reports: an agent analyzes each pipeline run and writes a short summary of what passed, what failed and why.",
    ],
    after: [
      "Test setup is consistent and reusable across the whole suite.",
      "Every failure comes with the context needed to debug it, for people and for AI agents.",
      "The team and stakeholders read a short summary of each run instead of digging through logs.",
    ],
    forYou:
      "If your tests are slow to set up or hard to debug, I can build the test data tools, logging and AI reporting around them.",
    offerId: "ecosystem",
  },
  {
    slug: "qa-dashboard",
    title: "A QA results delivery system: from test runs to stakeholder dashboards",
    result: "Results reach every stakeholder, automatically",
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
      "The same results flow to TestRail for test management and to Microsoft Teams for the people who need a quick status.",
    ],
    after: [
      "Stakeholders check the state of automation themselves, any time.",
      "The QA team spends less time on status reports and more time testing.",
      "Test management, chat and the dashboard all show the same results, so everyone works from one source of truth.",
    ],
    forYou:
      "If your founders or managers can't tell whether a release is safe, I can make test results visible to them.",
    offerId: "ecosystem",
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
    offerId: "architecture",
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
    q: "Do you only write tests?",
    a: "No. I also build the tools around them: test data APIs, scripts that help manual testers, logging and reporting pipelines, and dashboards. I write test plans and test cases, and do hands-on manual testing too.",
  },
  {
    q: "Can you really automate 100%?",
    a: "Of the agreed scope, yes. We first agree which test cases matter. Then I automate all of them. If a few are better left manual, such as visual or exploratory checks, I'll tell you up front.",
  },
  {
    q: "Can you work with our stack?",
    a: "Most likely. I work with Playwright, Cypress, Selenium/Nightwatch and Appium for UI; Postman, Bruno and Supertest for APIs; Pytest, JUnit and TestNG for unit and service tests; and TypeScript, JavaScript, Python and Java. I set up tests in GitHub Actions and other CI, run them on grids like BrowserStack, and build backends and tools on AWS. If it runs in a browser or exposes an API, I can test it.",
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
    a: "Yes. I use Claude Code, GitHub Copilot and agentic workflows to build faster. I also set up AI workflows for QA teams, such as agents that draft test plans, test cases and test reports. A person reviews and approves every step, so AI does the heavy lifting and your team keeps control.",
  },
  {
    q: "Are you open to full-time roles?",
    a: "Yes. I'm open to full-time remote Senior SDET roles. See the hiring page for my experience and skills.",
  },
];

export const about = {
  paragraphs: [
    "I'm a senior SDET with a background in Systems and Biomedical Engineering from Cairo University. Today I own quality for a platform engineering team at a global industrial software company, from test planning to automation.",
    "I also build software. Alongside test frameworks, I build the backends, APIs and dashboards QA teams rely on, deployed cloud-native on AWS. I use Claude Code, GitHub Copilot and agentic workflows to deliver faster.",
    "Before QA, I taught C, C++ and data structures to university students. That's why I care about clear docs, and about teams that can run things without me. I believe a test suite is only useful if people trust it: green should mean safe to ship, and red should mean a real problem.",
  ],
};

export const hire = {
  headline: "Senior SDET, open to full-time remote roles.",
  sub: "I lead QA from test planning to automation, build the systems a whole team relies on, and make quality visible to everyone involved.",
  highlights: [
    "I own QA end to end, from test planning to automation, in Agile teams",
    "I design test architecture and frameworks a whole QA team can build on",
    "I lead framework migrations, like Selenium (Nightwatch.js) to Playwright + TypeScript",
    "I build QA ecosystems: test data APIs, reporting pipelines and dashboards on AWS",
    "I turn test results into stakeholder views, linked to test management tools",
    "I write test plans and test cases, and run manual, exploratory and usability testing",
    "I build agentic workflows that draft test plans and test cases, with a person approving each step",
    "I build software too: cloud-native backends on AWS, React front ends, Node.js",
    "I use AI to deliver faster: Claude Code, GitHub Copilot and agentic workflows",
    "I onboard and train teams so they can run what I build",
  ],
  recentResult: "Recent result: automation coverage raised from 40% to 95% across new and legacy services.",
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
        "Built test data APIs, a logging standard used in every automated test, and AI-summarized pipeline reports.",
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
    { group: "Test design and manual QA", items: ["Test planning", "ISTQB test design techniques", "Exploratory testing", "Usability testing", "Bug reporting"] },
    { group: "Test frameworks", items: ["Pytest", "JUnit", "TestNG"] },
    { group: "Development", items: ["Node.js", "React", "REST API design", "AWS Lambda", "API Gateway", "DynamoDB", "S3"] },
    { group: "AI-assisted engineering", items: ["Claude Code", "GitHub Copilot", "Agentic workflows"] },
    { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C/C++"] },
    { group: "CI and cloud", items: ["CI/CD", "GitHub Actions", "AWS", "Linux & Bash", "BrowserStack", "AWS Device Farm"] },
    { group: "Process and tools", items: ["STLC", "Agile", "Jira & Confluence", "TestRail", "Git"] },
  ],
  education: "B.Sc. Systems and Biomedical Engineering, Cairo University, 2022 — Very Good with Honors",
  certifications: [
    "ISTQB Certified Tester, Foundation Level (CTFL)",
    "AWS DevOps and Linux for Cloud — Cloud Native Base Camp",
    "React Web Development — DEPI",
  ],
};

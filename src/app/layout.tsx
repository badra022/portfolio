import type { Metadata, Viewport } from "next";
import "./globals.css";
import { person } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const description =
  "Senior SDET and QA automation consultant. I build, fix and audit Playwright, API and CI test automation for startups and product teams, so bugs get caught before users find them.";

export const metadata: Metadata = {
  metadataBase: new URL(person.siteUrl + "/"),
  title: {
    default: `${person.name} — Senior SDET & QA automation consultant`,
    template: `%s — ${person.name}`,
  },
  description,
  keywords: [
    "SDET",
    "QA automation consultant",
    "Playwright",
    "test automation",
    "QA audit",
    "API testing",
    "freelance QA engineer",
    "Selenium to Playwright migration",
  ],
  authors: [{ name: person.name, url: person.siteUrl }],
  openGraph: {
    type: "website",
    url: person.siteUrl + "/",
    title: `${person.name} — Ship releases you can trust`,
    description,
    siteName: person.name,
    images: [{ url: "og.png", width: 1200, height: 630, alt: `${person.name}, Senior SDET` }],
  },
  twitter: { card: "summary_large_image", images: ["og.png"] },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/icon.svg` },
};

export const viewport: Viewport = { themeColor: "#f2f4f1" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: "Senior Software Development Engineer in Test",
  email: `mailto:${person.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
  url: person.siteUrl,
  sameAs: [person.linkedin, person.github],
  knowsAbout: ["Test automation", "Playwright", "API testing", "CI/CD", "Quality assurance"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}

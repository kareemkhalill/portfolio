import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: AI Engineer in Saudi Arabia | LLM Apps & AI Automation`,
    template: `%s | ${site.name}: AI Engineer`,
  },
  description:
    "AI Engineer in Saudi Arabia building LLM applications, AI agents, WhatsApp AI assistants, workflow automation, and full-stack AI products. Experience at the Royal Commission for AlUla (RCU).",
  keywords: [
    "AI Engineer",
    "AI Engineer Saudi Arabia",
    "Senior AI Engineer",
    "LLM Engineer",
    "Generative AI Engineer",
    "AI Automation Engineer",
    "Agentic AI Developer",
    "Enterprise AI Developer",
    "Computer Vision Engineer",
    "Python Developer",
    "AI Consultant",
    "Karim Khalil",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name}: AI Engineer`,
    title: `${site.name}: AI Engineer in Saudi Arabia`,
    description:
      "Production AI systems: LLM-powered assistants, workflow automation, and full-stack products. Based in AlUla, Saudi Arabia.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}: AI Engineer in Saudi Arabia`,
    description:
      "Production AI systems: LLM applications, AI automation, and full-stack products.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "AI Engineer",
  description:
    "AI Engineer building production LLM applications, automation, and AI products in Saudi Arabia.",
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  sameAs: [site.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "AlUla",
    addressCountry: "SA",
  },
  worksFor: {
    "@type": "Organization",
    name: "Platfarm | Royal Commission for AlUla (RCU)",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Canadian International College",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Large Language Models",
    "Computer Vision",
    "AI Agents",
    "Workflow Automation",
    "Machine Learning",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { site, projects, capabilities, experience, resumeHref } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="aurora" />
        <div className="grid-bg" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-32">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2.5 rounded-full border hairline bg-surface px-4 py-1.5 text-sm text-muted">
                <span className="pulse-dot" />
                Open to AI roles &amp; consulting
              </span>
              <span className="label-mono flex items-center gap-2 text-faint">
                <MapPin size={13} className="text-accent" />
                AlUla, Saudi Arabia — Royal Commission for AlUla (RCU)
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-10 max-w-4xl text-5xl font-semibold leading-[1.05] md:text-7xl">
              AI systems that <span className="text-gradient">watch, understand, and&nbsp;act</span> — in production, not in notebooks.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{site.tagline}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-glow flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium"
              >
                See the work <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border hairline bg-surface px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[rgba(99,102,241,0.5)]"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          {/* Proof strip */}
          <Reveal delay={0.4}>
            <dl className="mt-20 grid grid-cols-2 border-t hairline md:grid-cols-4">
              {[
                { big: "8", small: "production systems built" },
                { big: "222", small: "automated tests on my flagship product" },
                { big: "LLM + CV", small: "language and vision, end to end" },
                { big: "RCU", small: "Royal Commission for AlUla" },
              ].map(({ big, small }) => (
                <div key={small} className="border-b hairline py-6 pr-6 md:border-b-0">
                  <dt className="sr-only">{small}</dt>
                  <dd>
                    <p className="font-display tabular text-3xl font-semibold text-accent md:text-4xl">{big}</p>
                    <p className="mt-2 text-sm leading-snug text-faint">{small}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="01 — What I build"
            title="AI that solves business problems, end to end"
            description="From the model to the API to the workflow around it — systems designed to remove manual work, reduce risk, and put answers in front of the people who need them."
          />
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05} className="h-full">
                <div className="h-full border-t-2 border-accent pt-5">
                  <p className="label-mono text-faint">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-2 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="02 — Selected work"
            title="Case studies with real demos"
            description="Every system below shipped. Most include a live demo or recorded footage of the software running — not mockups."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <div key={p.slug} className={i === 0 ? "md:col-span-2" : undefined}>
                <ProjectCard project={p} delay={i * 0.05} />
              </div>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/projects"
              className="link-underline mt-10 inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              View all {projects.length} projects <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="03 — Experience" title="Where I've shipped" />
          <div className="mt-12">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="grid gap-4 border-t hairline py-8 md:grid-cols-[1fr_2fr]">
                  <div>
                    <p className="label-mono text-faint">{e.period}</p>
                    <h3 className="font-display mt-2 text-xl font-semibold">{e.company}</h3>
                    <p className="mt-1 text-sm font-medium text-accent">{e.role}</p>
                    <p className="mt-1 text-sm text-faint">
                      {e.location} · {e.mode}
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm leading-relaxed text-muted md:pt-1">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative border-t hairline">
        <div className="aurora opacity-70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <Reveal>
            <p className="label-mono text-faint">04 — Contact</p>
            <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
              Hiring for AI in <span className="text-gradient">Saudi Arabia</span> or the Gulf?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              I&apos;m open to AI engineering roles and consulting engagements — LLM applications, computer vision, and automation that ships.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-glow flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium">
                Start a conversation <ArrowUpRight size={16} />
              </Link>
              <a
                href={resumeHref}
                download
                className="rounded-full border hairline px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[rgba(99,102,241,0.5)]"
              >
                Download CV
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

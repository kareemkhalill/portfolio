import Link from "next/link";
import { ArrowRight, MapPin, Building2, Cpu, MessageSquareText } from "lucide-react";
import { site, projects, capabilities, experience, resumeHref } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SpotlightCard from "@/components/SpotlightCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="aurora" />
        <div className="grid-bg" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pt-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2.5 rounded-full border hairline bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur">
                <span className="pulse-dot" />
                Open to AI roles & consulting
              </span>
              <span className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={14} className="text-accent" />
                {site.location} · Royal Commission for AlUla (RCU)
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              AI systems that <span className="text-gradient">watch, understand, and act</span> in production, not in notebooks.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.tagline}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-glow flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                See the work <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border hairline bg-surface/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-[rgba(56,189,248,0.5)]"
              >
                Get in touch
              </Link>
            </div>
          </Reveal>

          {/* Proof bar */}
          <Reveal delay={0.4}>
            <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-borderc md:grid-cols-4">
              {[
                { icon: Cpu, big: "8", small: "production AI systems built" },
                { icon: MessageSquareText, big: "LLM + CV", small: "full-stack AI: language & vision" },
                { icon: Building2, big: "RCU", small: "Royal Commission for AlUla" },
                { icon: MapPin, big: "KSA", small: "on the ground in Saudi Arabia" },
              ].map(({ icon: Icon, big, small }) => (
                <div key={small} className="group bg-surface p-6 transition-colors hover:bg-surface-2">
                  <Icon size={18} className="text-accent transition-transform group-hover:scale-110" />
                  <p className="tabular mt-3 text-2xl font-semibold tracking-tight">{big}</p>
                  <p className="mt-1 text-sm text-faint">{small}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="What I build"
            title="AI that solves the problem, not just the demo"
            description="From the model to the API to the workflow wrapped around it, every system here is designed to cut manual work, reduce risk, and put the right answer in front of the person who needs it."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05} className="h-full">
                <SpotlightCard className="h-full rounded-2xl border hairline bg-surface p-6">
                  <h3 className="font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Selected work"
            title="Systems that shipped, not slides that pitched"
            description="Every project below is running or has run in production. Most come with a live demo or recorded footage of the actual software, not a mockup."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
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
          <SectionHeading title="Built where it counts" />
          <div className="mt-12 space-y-px overflow-hidden rounded-2xl border hairline bg-borderc">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className="grid gap-4 bg-surface p-6 transition-colors hover:bg-surface-2 md:grid-cols-[1fr_2fr]">
                  <div>
                    <h3 className="font-semibold tracking-tight">{e.company}</h3>
                    <p className="mt-1 text-sm text-accent">{e.role}</p>
                    <p className="mt-1 text-sm text-faint">
                      {e.period} · {e.location} · {e.mode}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm leading-relaxed text-muted">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
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
        <div className="aurora opacity-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Building AI teams in <span className="text-gradient">Saudi Arabia</span> or the Gulf?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              I&apos;m open to AI engineering roles and consulting work: LLM applications, computer vision, and automation built to actually ship.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-glow rounded-full px-6 py-3 text-sm font-medium">
                Get in touch
              </Link>
              <a
                href={resumeHref}
                download
                className="rounded-full border hairline bg-surface/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-[rgba(56,189,248,0.5)]"
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

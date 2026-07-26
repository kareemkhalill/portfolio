import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CircleAlert, Layers, Target, TrendingUp, Wrench } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "@/components/Reveal";
import DriveVideo from "@/components/DriveVideo";
import WhatsAppDemo from "@/components/WhatsAppDemo";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.oneLiner,
    openGraph: { title: project.name, description: project.oneLiner },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={16} /> All projects
        </Link>
        <p className="label-mono mt-8 text-accent">{project.category}</p>
        <h1 className="font-display mt-3 text-4xl font-semibold md:text-6xl">{project.name}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{project.oneLiner}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span key={t} className="rounded-md border hairline bg-surface px-2.5 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Metrics */}
      <Reveal delay={0.1}>
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border hairline bg-borderc md:grid-cols-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-surface p-6">
              <p className="tabular text-2xl font-semibold tracking-tight text-accent">{m.value}</p>
              <p className="mt-1 text-sm text-faint">{m.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Demo */}
      <Reveal delay={0.15}>
        <div className="mt-12">
          <h2 className="font-display mb-4 flex items-center gap-2 text-2xl font-semibold">
            {project.demoUrl ? "Live demo" : project.simulated ? "Interactive demo" : "Demo"}
          </h2>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group flex items-center justify-between rounded-2xl border hairline bg-surface p-6"
            >
              <div>
                <p className="font-medium">Open the live application</p>
                <p className="mt-1 text-sm text-muted">
                  {project.demoUrl.replace("https://", "")} — hosted demo with seeded sample data. First load may take
                  a moment while the free-tier server wakes up.
                </p>
              </div>
              <ArrowRight size={20} className="shrink-0 text-accent transition-transform group-hover:translate-x-1" />
            </a>
          ) : project.driveVideoId ? (
            <DriveVideo id={project.driveVideoId} title={project.name} />
          ) : project.simulated ? (
            <WhatsAppDemo />
          ) : null}
        </div>
      </Reveal>

      {/* Problem / Solution */}
      <div className="mt-14 space-y-12">
        <Reveal>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Target size={18} className="text-accent" /> The business problem
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{project.problem}</p>
        </Reveal>

        <Reveal>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Wrench size={18} className="text-accent" /> The solution
          </h2>
          <p className="mt-4 leading-relaxed text-muted">{project.solution}</p>
        </Reveal>

        {/* Architecture */}
        <Reveal>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <Layers size={18} className="text-accent" /> How it works
          </h2>
          <ol className="mt-6 space-y-px overflow-hidden rounded-2xl border hairline bg-borderc">
            {project.architecture.map((a, i) => (
              <li key={a.step} className="flex gap-4 bg-surface p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium">{a.step}</p>
                  <p className="mt-1 text-sm text-muted">{a.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Challenges */}
        <Reveal>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <CircleAlert size={18} className="text-accent" /> Engineering challenges
          </h2>
          <ul className="mt-4 space-y-3">
            {project.challenges.map((c) => (
              <li key={c} className="flex gap-3 text-muted">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Impact */}
        <Reveal>
          <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
            <TrendingUp size={18} className="text-accent" /> Business impact
          </h2>
          <ul className="mt-4 space-y-3">
            {project.impact.map((c) => (
              <li key={c} className="flex gap-3 text-muted">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {/* Next project */}
      <Reveal>
        <Link
          href={`/projects/${next.slug}`}
          className="group card-lift mt-16 flex items-center justify-between rounded-2xl border hairline bg-surface p-6"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-faint">Next case study</p>
            <p className="mt-2 font-semibold">{next.name}</p>
          </div>
          <ArrowRight size={20} className="text-accent transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </article>
  );
}

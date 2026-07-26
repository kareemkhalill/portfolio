import Link from "next/link";
import { ArrowUpRight, Globe, PlayCircle, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";
import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

export default function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <SpotlightCard className="h-full rounded-2xl border hairline bg-surface">
        <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {project.category}
            </span>
            {project.demoUrl ? (
              <span className="flex items-center gap-1 text-xs text-faint">
                <Globe size={14} /> Live demo
              </span>
            ) : project.driveVideoId ? (
              <span className="flex items-center gap-1 text-xs text-faint">
                <PlayCircle size={14} /> Video demo
              </span>
            ) : project.simulated ? (
              <span className="flex items-center gap-1 text-xs text-faint">
                <Sparkles size={14} /> Interactive demo
              </span>
            ) : null}
          </div>
          <h3 className="mt-4 text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
            {project.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.oneLiner}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((t) => (
              <span key={t} className="rounded-md bg-surface-2 px-2 py-1 text-xs text-faint">
                {t}
              </span>
            ))}
          </div>
          <span className="mt-5 flex items-center gap-1 text-sm font-medium text-accent">
            Read case study
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </Link>
      </SpotlightCard>
    </Reveal>
  );
}

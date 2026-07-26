import type { Metadata } from "next";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects: Production AI Case Studies",
  description:
    "Case studies of production AI systems: computer vision for safety and security, LLM-powered WhatsApp assistants, and workflow automation, with recorded demos.",
};

export default function ProjectsPage() {
  const product = projects.filter((p) => p.category === "Full-Stack & AI Product");
  const llm = projects.filter((p) => p.category === "LLM & Automation");
  const cv = projects.filter((p) => p.category === "Computer Vision");

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        title="Case studies, not bullet points"
        description="Problem, architecture, challenges, outcome. Most with demos of the real system."
      />

      <h2 className="mt-16 text-lg font-semibold text-foreground">Flagship product</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {product.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
        ))}
      </div>

      <h2 className="mt-16 text-lg font-semibold text-foreground">LLM applications & automation</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {llm.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
        ))}
      </div>

      <h2 className="mt-16 text-lg font-semibold text-foreground">Computer vision systems</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {cv.map((p, i) => (
          <ProjectCard key={p.slug} project={p} delay={i * 0.05} />
        ))}
      </div>
    </div>
  );
}

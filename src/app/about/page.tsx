import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { skills, certifications, education, site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Karim Khalil, AI Engineer in AlUla, Saudi Arabia. Computer vision, LLM applications, and AI automation, currently at the Royal Commission for AlUla (RCU).",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="About" title="Engineer first. AI is the tool." />

      <Reveal delay={0.1}>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            AI Engineer in AlUla, currently with Platfarm at the{" "}
            <span className="text-foreground">Royal Commission for AlUla</span>.
          </p>
          <p>
            <span className="text-foreground">Vision:</span> PPE compliance, intrusion, fire, driver fatigue.
            YOLOv8 and CNN pipelines on live video, Dockerized, served over FastAPI.
          </p>
          <p>
            <span className="text-foreground">Language:</span> assistants that do real work, like a WhatsApp
            bot that returns a report in seconds. Plus{" "}
            <span className="text-foreground">ClientFlow Pro</span>, my bilingual CRM product with 222 tests.
          </p>
          <p>I don&apos;t stop at the model. Undeployed models create zero value.</p>
        </div>
      </Reveal>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeading title="Technical toolkit" />
        <div className="mt-10 space-y-8">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-faint">{s.group}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="rounded-lg border hairline bg-surface px-3 py-1.5 text-sm text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Education & Certs */}
      <div className="mt-20 grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border hairline bg-surface p-6">
            <GraduationCap size={20} className="text-accent" />
            <h3 className="mt-4 font-semibold">Education</h3>
            <p className="mt-2 text-sm text-muted">{education.degree}</p>
            <p className="text-sm text-faint">
              {education.school} · {education.year}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border hairline bg-surface p-6">
            <Award size={20} className="text-accent" />
            <h3 className="mt-4 font-semibold">Certifications</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-muted">
              {certifications.map((c) => (
                <li key={c.name}>
                  {c.name} <span className="text-faint">· {c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Link
          href="/projects"
          className="mt-16 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
        >
          See the work <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  );
}

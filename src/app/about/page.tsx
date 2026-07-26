import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { skills, certifications, education, site } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Karim Khalil — AI Engineer in AlUla, Saudi Arabia. Computer vision, LLM applications, and AI automation, currently at the Royal Commission for AlUla (RCU).",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading eyebrow="About" title="Engineer first. AI is the tool, outcomes are the job." />

      <Reveal delay={0.1}>
        <div className="mt-8 space-y-5 leading-relaxed text-muted">
          <p>
            I&apos;m {site.name}, an AI Engineer based in AlUla, Saudi Arabia — currently working with
            Platfarm at the <span className="text-foreground">Royal Commission for AlUla (RCU)</span>,
            where I build AI applications and automated workflows and keep a Royal Commission
            platform&apos;s data accurate and reliable.
          </p>
          <p>
            My work spans the two halves of applied AI. On the <span className="text-foreground">computer
            vision</span> side, I&apos;ve shipped real-time systems that keep people safe: PPE compliance
            monitoring, intrusion detection, fire and smoke detection, and driver-fatigue monitoring —
            YOLOv8 and CNN pipelines running on live video, deployed with Docker, exposed through FastAPI.
            On the <span className="text-foreground">LLM side</span>, I build assistants and automation
            that remove manual work — like a WhatsApp assistant that turns a plain-language message into
            a delivered report in seconds. And I ship complete products: <span className="text-foreground">ClientFlow
            Pro</span>, my bilingual (English/Arabic) CRM and business-management platform with an AI follow-up
            assistant and WhatsApp integration, carries 222 automated tests.
          </p>
          <p>
            What ties it together: I don&apos;t stop at the model. A model that isn&apos;t deployed,
            monitored, validated, and trusted by the people using it doesn&apos;t create value. My
            background in platform operations and data validation means I build AI systems with the
            operational discipline to actually run in production.
          </p>
        </div>
      </Reveal>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
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
          See what I&apos;ve built <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  );
}

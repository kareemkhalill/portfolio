import type { Metadata } from "next";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "@/components/LinkedinIcon";
import { site, resumeHref } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Karim Khalil, AI Engineer in Saudi Arabia. Open to AI engineering roles, consulting, and project inquiries.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for roles and project inquiries. I reply quickly.",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "in/karim-khalil-091830201",
    href: site.linkedin,
    note: "Connect or message me directly.",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "Available during KSA business hours.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Tell me what you're building"
        description="Open to AI roles across the Gulf, remote positions, and consulting work."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target={c.label === "LinkedIn" ? "_blank" : undefined}
              rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="card-lift flex h-full flex-col rounded-2xl border hairline bg-surface p-6"
            >
              <c.icon size={20} className="text-accent" />
              <h3 className="mt-4 font-semibold">{c.label}</h3>
              <p className="mt-1 break-all text-sm text-muted">{c.value}</p>
              <p className="mt-3 text-xs leading-relaxed text-faint">{c.note}</p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-col items-start gap-6 rounded-2xl border hairline bg-surface p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-sm text-faint">
              <MapPin size={14} className="text-accent" /> {site.location}, on-site, hybrid, or remote
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">Want it all in one place?</h3>
            <p className="mt-1 text-sm text-muted">Everything on this site, condensed onto one page.</p>
          </div>
          <a
            href={resumeHref}
            download
            className="btn-glow flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </Reveal>
    </div>
  );
}

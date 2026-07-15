import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import LinkedinIcon from "./LinkedinIcon";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-1 text-sm text-faint">
            AI Engineer · {site.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-muted">
          <Link href="/projects" className="hover:text-foreground">Projects</Link>
          <Link href="/about" className="hover:text-foreground">About</Link>
          <Link href="/contact" className="hover:text-foreground">Contact</Link>
        </div>
        <div className="flex items-center gap-4 text-muted">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent">
            <LinkedinIcon size={18} />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className="hover:text-accent">
            <Mail size={18} />
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} aria-label="Phone" className="hover:text-accent">
            <Phone size={18} />
          </a>
        </div>
      </div>
      <div className="border-t hairline py-4 text-center text-xs text-faint">
        © {new Date().getFullYear()} {site.name}. Built with Next.js.
      </div>
    </footer>
  );
}

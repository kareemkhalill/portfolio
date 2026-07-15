"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site, resumeHref } from "@/lib/data";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[rgba(9,9,11,0.75)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Karim Khalil
          <span className="ml-2 text-xs font-normal text-faint">AI Engineer</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={resumeHref}
            download
            className="btn-glow rounded-full px-4 py-1.5 text-sm font-medium"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t hairline bg-background px-6 py-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a href={resumeHref} download className="mt-2 block py-3 text-sm font-medium text-accent">
            Download CV
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="block py-3 text-sm text-muted hover:text-foreground">
            LinkedIn
          </a>
        </div>
      )}
    </header>
  );
}

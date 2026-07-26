"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

const GRADIENTS: Record<Project["category"], string> = {
  "Full-Stack & AI Product": "linear-gradient(135deg, #8b5cf6 0%, #ff6f5e 100%)",
  "LLM & Automation": "linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)",
  "Computer Vision": "linear-gradient(135deg, #ff6f5e 0%, #f9c74f 100%)",
};

export default function ProjectShowreel({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 280, damping: 28, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 280, damping: 28, mass: 0.4 });

  return (
    <div
      className="relative border-t hairline"
      onMouseMove={(e) => {
        mx.set(e.clientX);
        my.set(e.clientY);
      }}
    >
      {projects.map((p, i) => (
        <Link
          key={p.slug}
          href={`/projects/${p.slug}`}
          onMouseEnter={() => setActive(p)}
          onMouseLeave={() => setActive(null)}
          className="group relative flex items-center justify-between gap-6 border-b hairline py-7 transition-colors md:py-9"
        >
          <div className="flex min-w-0 items-baseline gap-4 md:gap-8">
            <span className="label-mono shrink-0 text-faint transition-colors group-hover:text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display truncate text-2xl font-semibold transition-all duration-300 group-hover:translate-x-2 group-hover:text-accent md:text-4xl">
              {p.name}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <span className="label-mono hidden text-faint sm:inline">{p.category}</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border hairline text-faint transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </Link>
      ))}

      {/* Cursor-follow preview */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="pointer-events-none fixed z-40 hidden overflow-hidden rounded-2xl shadow-2xl md:block"
            style={{
              left: springX,
              top: springY,
              translateX: "24px",
              translateY: "-50%",
              width: 260,
              height: 168,
              background: GRADIENTS[active.category],
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex h-full flex-col justify-between bg-black/15 p-5">
              <span className="label-mono text-white/80">{active.category}</span>
              <div>
                <p className="text-sm font-medium leading-snug text-white">{active.shortName}</p>
                <p className="mt-1 text-xs text-white/75">View case study →</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

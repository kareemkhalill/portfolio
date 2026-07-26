"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Illustrative render of a detection-pipeline viewport.
 * Boxes are scripted, not model output. Labeled as such in the UI.
 */

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  vx: number;
  vy: number;
  label: string;
  conf: number;
  hue: "accent" | "warn" | "ok";
};

const COLORS = {
  accent: "56, 189, 248",
  warn: "251, 146, 60",
  ok: "74, 222, 128",
};

function makeBoxes(): Box[] {
  return [
    { x: 0.08, y: 0.34, w: 0.16, h: 0.42, vx: 0.00035, vy: -0.00012, label: "person", conf: 0.94, hue: "accent" },
    { x: 0.36, y: 0.22, w: 0.13, h: 0.34, vx: -0.00022, vy: 0.00018, label: "helmet", conf: 0.88, hue: "ok" },
    { x: 0.62, y: 0.45, w: 0.19, h: 0.38, vx: 0.00018, vy: -0.00021, label: "no-vest", conf: 0.79, hue: "warn" },
    { x: 0.44, y: 0.62, w: 0.11, h: 0.24, vx: -0.0003, vy: -0.00015, label: "person", conf: 0.91, hue: "accent" },
  ];
}

export default function LiveDetection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();
  const [fps, setFps] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let boxes = makeBoxes();
    let scan = 0;
    let last = performance.now();
    let frames = 0;
    let fpsClock = last;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      const dt = Math.min(now - last, 50);
      last = now;

      ctx.clearRect(0, 0, W, H);

      // grid floor
      ctx.strokeStyle = "rgba(238, 241, 248, 0.05)";
      ctx.lineWidth = 1;
      for (let i = 1; i < 8; i++) {
        const y = (H / 8) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      for (let i = 1; i < 10; i++) {
        const x = (W / 10) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }

      if (!reduce) {
        boxes = boxes.map((b) => {
          let { x, y, vx, vy } = b;
          x += vx * dt;
          y += vy * dt;
          if (x < 0.03 || x + b.w > 0.97) vx = -vx;
          if (y < 0.08 || y + b.h > 0.92) vy = -vy;
          return { ...b, x, y, vx, vy };
        });
      }

      boxes.forEach((b) => {
        const px = b.x * W;
        const py = b.y * H;
        const pw = b.w * W;
        const ph = b.h * H;
        const rgb = COLORS[b.hue];

        ctx.fillStyle = `rgba(${rgb}, 0.07)`;
        ctx.fillRect(px, py, pw, ph);

        // corner brackets
        ctx.strokeStyle = `rgba(${rgb}, 0.85)`;
        ctx.lineWidth = 1.5;
        const c = Math.min(14, pw * 0.3, ph * 0.3);
        const corners: [number, number, number, number][] = [
          [px, py + c, px, py],
          [px, py, px + c, py],
          [px + pw - c, py, px + pw, py],
          [px + pw, py, px + pw, py + c],
          [px, py + ph - c, px, py + ph],
          [px, py + ph, px + c, py + ph],
          [px + pw - c, py + ph, px + pw, py + ph],
          [px + pw, py + ph, px + pw, py + ph - c],
        ];
        corners.forEach(([x1, y1, x2, y2]) => {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        });

        // label chip
        const text = `${b.label} ${b.conf.toFixed(2)}`;
        ctx.font = "500 10px ui-monospace, SFMono-Regular, Menlo, monospace";
        const tw = ctx.measureText(text).width;
        ctx.fillStyle = `rgba(${rgb}, 0.92)`;
        ctx.fillRect(px, Math.max(0, py - 15), tw + 10, 14);
        ctx.fillStyle = "#05060b";
        ctx.fillText(text, px + 5, Math.max(10, py - 4.5));
      });

      // scan line
      if (!reduce) {
        scan = (scan + dt * 0.00022) % 1;
        const sy = scan * H;
        const grad = ctx.createLinearGradient(0, sy - 40, 0, sy);
        grad.addColorStop(0, "rgba(56, 189, 248, 0)");
        grad.addColorStop(1, "rgba(56, 189, 248, 0.16)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, sy - 40, W, 40);
        ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, sy);
        ctx.lineTo(W, sy);
        ctx.stroke();
      }

      frames++;
      if (now - fpsClock > 500) {
        setFps(Math.round((frames * 1000) / (now - fpsClock)));
        frames = 0;
        fpsClock = now;
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-surface">
      <div className="flex items-center justify-between border-b hairline px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          <span className="pulse-dot" />
          detect.stream
        </span>
        <span className="tabular font-mono text-[11px] text-faint">
          {reduce ? "static" : `${fps} fps`}
        </span>
      </div>
      <canvas ref={canvasRef} className="block h-[280px] w-full md:h-[340px]" aria-hidden="true" />
      <p className="border-t hairline px-4 py-2 font-mono text-[10.5px] text-faint">
        Illustrative render of the detection UI. Real footage on the case-study pages.
      </p>
    </div>
  );
}

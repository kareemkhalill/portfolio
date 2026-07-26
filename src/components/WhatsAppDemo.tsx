"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCheck, FileText, Send } from "lucide-react";

type Msg = { from: "user" | "bot"; text: string; report?: boolean };

const scenarios: Record<string, Msg[]> = {
  "Send me today's operations report": [
    { from: "bot", text: "On it 👍 Generating today's operations report…" },
    { from: "bot", text: "Here's your operations report for today.", report: true },
    { from: "bot", text: "Anything else? You can also ask for weekly summaries or specific dashboards." },
  ],
  "How did the platform perform this week?": [
    { from: "bot", text: "Let me pull this week's platform performance…" },
    { from: "bot", text: "Weekly performance summary is ready: uptime, data-quality checks, and activity trends included.", report: true },
    { from: "bot", text: "Want me to schedule this as a recurring Monday report?" },
  ],
  "Generate the data quality summary": [
    { from: "bot", text: "Running data-quality validation across the dashboards…" },
    { from: "bot", text: "Validation complete ✅ Here's the data-quality summary.", report: true },
    { from: "bot", text: "All checks documented. Ask me anytime, I'm available 24/7." },
  ],
};

const prompts = Object.keys(scenarios);

export default function WhatsAppDemo() {
  const [messages, setMessages] = useState<Msg[]>([
    { from: "bot", text: "Hi 👋 I'm the AI reporting assistant. Ask me for a report in plain language." },
  ]);
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const run = async (prompt: string) => {
    if (busy) return;
    setBusy(true);
    setMessages((m) => [...m, { from: "user", text: prompt }]);
    for (const reply of scenarios[prompt]) {
      setTyping(true);
      await new Promise((r) => setTimeout(r, 1100));
      setTyping(false);
      setMessages((m) => [...m, reply]);
      await new Promise((r) => setTimeout(r, 350));
    }
    setBusy(false);
  };

  return (
    <div className="overflow-hidden rounded-2xl border hairline bg-surface">
      <div className="flex items-center gap-3 border-b hairline bg-surface-2 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-accent">
          <FileText size={16} />
        </div>
        <div>
          <p className="text-sm font-medium">Reporting Assistant</p>
          <p className="text-xs text-faint">{typing ? "typing…" : "online"}</p>
        </div>
      </div>

      <div ref={scrollRef} className="h-80 space-y-3 overflow-y-auto p-4">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-sm bg-accent text-[#05060b]"
                    : "rounded-bl-sm bg-surface-2 text-foreground"
                }`}
              >
                {m.report && (
                  <span className="mb-2 flex items-center gap-2 rounded-lg bg-accent-soft px-3 py-2 text-xs font-medium text-accent">
                    <FileText size={14} /> report.pdf · generated just now
                  </span>
                )}
                {m.text}
                {m.from === "user" && (
                  <CheckCheck size={14} className="ml-1 inline-block opacity-70" />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-sm bg-surface-2 px-4 py-3">
              <span className="flex gap-1">
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-muted"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }}
                  />
                ))}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="border-t hairline p-3">
        <p className="mb-2 flex items-center gap-1 px-1 text-xs text-faint">
          <Send size={12} /> Try a request:
        </p>
        <div className="flex flex-wrap gap-2">
          {prompts.map((p) => (
            <button
              key={p}
              onClick={() => run(p)}
              disabled={busy}
              className="rounded-full border hairline px-3 py-1.5 text-xs text-muted transition-colors hover:border-[rgba(56,189,248,0.5)] hover:text-foreground disabled:opacity-40"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <p className="border-t hairline px-4 py-2 text-xs text-faint">
        Interactive simulation of the production assistant&apos;s workflow. The real system runs on OpenClaw with live LLM processing.
      </p>
    </div>
  );
}

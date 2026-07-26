import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Karim Khalil — AI Engineer in Saudi Arabia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b0c10 60%, #14152a 100%)",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#818cf8",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          AI Engineer — Saudi Arabia
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 28 }}>Karim Khalil</div>
        <div style={{ display: "flex", fontSize: 34, color: "#9a9ca8", marginTop: 28, maxWidth: 950, lineHeight: 1.4 }}>
          Production computer vision, LLM applications &amp; full-stack AI products — Royal Commission for AlUla (RCU)
        </div>
        <div style={{ display: "flex", marginTop: 48, height: 6, width: 220, background: "#6366f1" }} />
      </div>
    ),
    { ...size }
  );
}

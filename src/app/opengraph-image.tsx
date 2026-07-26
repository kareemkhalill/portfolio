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
          background: "linear-gradient(135deg, #08080d 55%, #16102a 100%)",
          color: "#f3f2f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#8b5cf6",
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            fontFamily: "monospace",
          }}
        >
          AI Engineer — Saudi Arabia
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, marginTop: 28 }}>Karim Khalil</div>
        <div style={{ display: "flex", fontSize: 34, color: "#a5a3b3", marginTop: 28, maxWidth: 950, lineHeight: 1.4 }}>
          Production computer vision, LLM applications &amp; full-stack AI products — Royal Commission for AlUla (RCU)
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            height: 6,
            width: 220,
            background: "linear-gradient(90deg, #8b5cf6, #ff6f5e)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

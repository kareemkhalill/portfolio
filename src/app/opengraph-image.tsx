import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Karim Khalil, AI Engineer in Saudi Arabia";
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
          background: "linear-gradient(135deg, #05060b 60%, #0c1226 100%)",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#38bdf8", fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
          AI Engineer · Saudi Arabia
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 24 }}>Karim Khalil</div>
        <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", marginTop: 24, maxWidth: 900, lineHeight: 1.4 }}>
          LLM applications, AI automation & full-stack products. Royal Commission for AlUla (RCU)
        </div>
      </div>
    ),
    { ...size }
  );
}

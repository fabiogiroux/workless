import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Workless — Automação e IA sob medida"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #0A0E0D 0%, #101615 50%, #0A0E0D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Hexagon decoration top right */}
        <svg
          width="320"
          height="320"
          viewBox="0 0 100 100"
          fill="none"
          style={{ position: "absolute", top: "-40px", right: "-40px", opacity: 0.12 }}
        >
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            stroke="#00D9A3"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Brand */}
        <div
          style={{
            color: "#00D9A3",
            fontSize: "32px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          workless<span style={{ color: "#F5FFFE" }}>.</span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "#F5FFFE",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: "auto",
            letterSpacing: "-0.02em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Automação e IA</div>
          <div style={{ color: "#00D9A3" }}>sob medida.</div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "#7A9890",
            fontSize: "28px",
            marginTop: "24px",
            display: "flex",
          }}
        >
          Em semanas, não meses.
        </div>
      </div>
    ),
    { ...size }
  )
}

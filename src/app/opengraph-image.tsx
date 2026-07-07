import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#007AFF 0%,#0A84FF 45%,#1C1C1E 120%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 900, letterSpacing: -2 }}>NEXUS</div>
        <div style={{ fontSize: 32, marginTop: 16, opacity: 0.9 }}>
          Fitness &amp; Gym Management Platform
        </div>
      </div>
    ),
    { ...size }
  );
}

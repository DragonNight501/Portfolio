import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export default function OpenGraphImage() {
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
          background: "linear-gradient(135deg, #0b0b0f 0%, #1a1030 100%)",
          color: "#f5f7fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#a78bfa", letterSpacing: 6 }}>
          {siteConfig.title.toUpperCase()}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 28, fontSize: 32, color: "#a1a1aa" }}>
          Next.js · TypeScript · Tailwind CSS
        </div>
      </div>
    ),
    size,
  );
}

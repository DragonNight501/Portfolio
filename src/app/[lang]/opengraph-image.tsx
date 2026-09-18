import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";
import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// `alt` must be static, so it stays language-neutral.
export const alt = siteConfig.name;

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(isLocale(lang) ? lang : defaultLocale);

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
          background: "linear-gradient(135deg, #ffffff 0%, #e7ebf5 55%, #dfe7f7 100%)",
          color: "#0d1117",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#4f46e5", letterSpacing: 6 }}>
          {dict.meta.title.toUpperCase()}
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
        <div style={{ marginTop: 28, fontSize: 32, color: "#5a6376" }}>
          {dict.meta.ogTagline}
        </div>
      </div>
    ),
    size,
  );
}

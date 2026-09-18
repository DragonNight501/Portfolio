import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import { siteConfig } from "@/data/site";
import { isLocale, localeLabels, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

type LayoutParams = { params: Promise<{ lang: string }> };

// Only /en and /de exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutParams): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dict = getDictionary(lang);
  const title = `${siteConfig.name} | ${dict.meta.title}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.description,
    keywords: [...dict.meta.keywords, siteConfig.name],
    authors: [{ name: siteConfig.name, url: siteConfig.github }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((locale) => [locale, `/${locale}`])),
        "x-default": "/en",
      },
    },
    openGraph: {
      type: "website",
      locale: localeLabels[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeLabels[l].og),
      url: `/${lang}`,
      siteName: siteConfig.name,
      title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f6f7f9",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LayoutParams) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-void focus:px-4 focus:py-2 focus:text-white"
        >
          {dict.common.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "404 – Page not found · Seite nicht gefunden",
};

/* Unmatched URLs never reach a [lang] layout, so this page speaks both languages. */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <main className="bg-grid relative flex min-h-screen items-center justify-center px-6 text-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">404</p>

            <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
              This page does not exist
            </h1>
            <p lang="de" className="mt-2 text-xl text-muted">
              Diese Seite existiert nicht
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/en"
                className="inline-flex items-center rounded-lg bg-void px-5 py-3 text-sm font-medium text-white"
              >
                Back to home
              </Link>
              <Link
                href="/de"
                lang="de"
                className="inline-flex items-center rounded-lg border border-line-strong bg-surface px-5 py-3 text-sm font-medium"
              >
                Zur Startseite
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

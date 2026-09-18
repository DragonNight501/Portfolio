"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import { defaultLocale, isLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/get-dictionary";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang && isLocale(params.lang) ? params.lang : defaultLocale;
  const dict = dictionaries[lang].error;

  useEffect(() => {
    console.error("APP_ERROR:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-paper text-fg">
      <Container className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          {dict.eyebrow}
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          {dict.title}
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
          {dict.description}
        </p>

        <div className="mt-8">
          <Button onClick={reset}>{dict.retry}</Button>
        </div>
      </Container>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("APP_ERROR:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center bg-paper text-fg">
      <Container className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent">
          Error
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-muted">
          An unexpected error occurred while rendering this page.
        </p>

        <div className="mt-8">
          <Button onClick={reset}>Try again</Button>
        </div>
      </Container>
    </main>
  );
}

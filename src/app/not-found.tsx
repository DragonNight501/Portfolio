import Link from "next/link";
import { buttonStyles } from "@/components/ui/button";
import Container from "@/components/ui/container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center bg-[var(--background)] text-[var(--text-main)]">
      <Container className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
          This page does not exist
        </h1>

        <p className="mx-auto mt-4 max-w-xl leading-8 text-[var(--text-secondary)]">
          The link may be outdated or mistyped. Everything else is still on the
          home page.
        </p>

        <Link href="/" className={buttonStyles("primary", "mt-8")}>
          Back to home
        </Link>
      </Container>
    </main>
  );
}

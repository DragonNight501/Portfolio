import Container from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <Container className="flex flex-col gap-4 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
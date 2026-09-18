import Container from "@/components/ui/container";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-3 font-mono text-[11px] tracking-tight text-faint md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>Next.js · TypeScript · Tailwind CSS — deployed on Vercel</p>
      </Container>
    </footer>
  );
}

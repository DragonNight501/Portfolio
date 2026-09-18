import Container from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function Footer({ dict }: { dict: Dictionary["footer"] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-3 font-mono text-[11px] tracking-tight text-faint md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}
        </p>
        <p>{dict.builtWith}</p>
      </Container>
    </footer>
  );
}

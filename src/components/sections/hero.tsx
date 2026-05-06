import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--text-secondary)]">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" />
              {siteConfig.heroBadge}
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-[var(--text-secondary)]">
                {siteConfig.name}
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                {siteConfig.heroTitleTop}
                <span className="block text-[var(--accent)]">
                  {siteConfig.heroTitleBottom}
                </span>
              </h1>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                {siteConfig.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>

              <a href="#contact">
                <Button variant="secondary">Contact Me</Button>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <div className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                  <div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {siteConfig.heroCardTitle}
                    </p>
                    <p className="mt-1 font-medium">{siteConfig.heroCardValue}</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-[var(--accent)]" />
                </div>

                <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent)]/20 to-white/5 p-6">
                  <p className="text-sm text-[var(--text-secondary)]">Current Goal</p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight">
                    Building modern fullstack projects with clean UI and solid structure.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                      {siteConfig.heroCardFocusLabel}
                    </p>
                    <p className="mt-2 font-medium">{siteConfig.heroCardFocusValue}</p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-sm text-[var(--text-secondary)]">
                      {siteConfig.heroCardStackLabel}
                    </p>
                    <p className="mt-2 font-medium">{siteConfig.heroCardStackValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-[var(--accent)]/20 blur-3xl" />
            <div className="absolute -bottom-6 right-0 h-32 w-32 rounded-full bg-[var(--accent)]/10 blur-3xl" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div>
              <SectionTitle
                eyebrow="About Me"
                title={siteConfig.aboutTitle}
                description={siteConfig.aboutDescription}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-8">
              <div className="space-y-6">
                <p className="leading-8 text-[var(--text-secondary)]">
                  I am currently learning frontend and backend development step by
                  step, while focusing on building real portfolio projects that
                  reflect modern design and practical coding skills.
                </p>

                <p className="leading-8 text-[var(--text-secondary)]">
                  My goal is to become a strong fullstack developer who can build
                  fast, responsive, and visually impressive web applications.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-2xl font-bold">03+</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      Practice Projects
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-black/20 p-4">
                    <p className="text-2xl font-bold">100%</p>
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                      Learning Commitment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionTitle index="01" eyebrow={dict.eyebrow} title={dict.title} />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-8 text-muted md:text-lg">
              <p>
                {dict.intro.before}
                <span className="font-medium text-fg">{dict.intro.highlight}</span>
                {dict.intro.after}
              </p>
              <p>
                {dict.reason.before}
                <span className="font-medium text-fg">{dict.reason.highlight}</span>
                {dict.reason.after}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {dict.principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06} className="h-full">
              <div className="card h-full rounded-2xl p-7">
                <p className="font-mono text-[11px] tracking-[0.2em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-muted">{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

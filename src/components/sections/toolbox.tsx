import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { toolbox } from "@/data/toolbox";

export default function Toolbox() {
  return (
    <section id="toolbox" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionTitle
              index="05"
              eyebrow="Toolbox"
              title="Tools change. Fundamentals transfer."
              description="The technologies I currently use. Because they sit on concepts I already understand, picking up the next one is a matter of syntax, not starting over."
            />
          </Reveal>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {toolbox.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05} className="h-full">
                <div className="h-full bg-surface p-6">
                  <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-fg/90">
                        <span className="font-mono text-xs text-muted" aria-hidden="true">
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

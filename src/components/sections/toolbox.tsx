import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function Toolbox({ dict }: { dict: Dictionary["toolbox"] }) {
  return (
    <section id="toolbox" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionTitle
              index="05"
              eyebrow={dict.eyebrow}
              title={dict.title}
              description={dict.description}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {dict.groups.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05} className="h-full">
                <div className="card h-full rounded-2xl p-6">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-fg">
                        <span className="font-mono text-xs text-faint" aria-hidden="true">
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

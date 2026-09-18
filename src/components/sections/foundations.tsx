import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import type { Dictionary } from "@/i18n/get-dictionary";

export default function Foundations({ dict }: { dict: Dictionary["foundations"] }) {
  return (
    <section id="foundations" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            index="02"
            eyebrow={dict.eyebrow}
            title={dict.title}
            description={dict.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.areas.map((area, index) => (
            <Reveal key={area.title} delay={(index % 4) * 0.05} className="h-full">
              <article className="group card relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-accent to-cyan transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-faint transition group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-line-strong transition group-hover:bg-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{area.summary}</p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                  {area.concepts.map((concept) => (
                    <li
                      key={concept}
                      className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[10px] tracking-tight text-muted"
                    >
                      {concept}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

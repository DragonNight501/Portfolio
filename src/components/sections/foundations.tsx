import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { foundations } from "@/data/foundations";

export default function Foundations() {
  return (
    <section id="foundations" className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            index="02"
            eyebrow="Foundations"
            title="The Computer Science behind the code."
            description="The areas I studied in depth. They are the reason I can move between layers — from an index on a table to a TLS handshake — without treating any of them as magic."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {foundations.map((area, index) => (
            <Reveal key={area.title} delay={(index % 4) * 0.05} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted transition group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-line-strong transition group-hover:bg-accent"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold leading-snug">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{area.summary}</p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {area.concepts.map((concept) => (
                    <li
                      key={concept}
                      className="rounded-md border border-line bg-ink/60 px-2 py-1 font-mono text-[11px] text-muted"
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

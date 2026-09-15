import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { principles } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionTitle
              index="01"
              eyebrow="About"
              title="A computer scientist who builds for the web."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-5 text-base leading-8 text-muted md:text-lg">
              <p>
                My background is in{" "}
                <span className="text-fg">Computer Science</span>, so I see
                software as one part of a larger system: data travelling
                through networks, processes sharing memory, queries hitting
                indexes, and users on the other end of it all.
              </p>
              <p>
                Programming is how I build things. Understanding how computers,
                networks and databases actually work is what lets me reason
                about <span className="text-fg">why</span> something is slow,
                insecure or fragile — and fix the cause instead of the symptom.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal key={principle.title} delay={index * 0.06} className="h-full">
              <div className="h-full bg-surface p-7">
                <p className="font-mono text-xs text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold">{principle.title}</h3>
                <p className="mt-3 leading-7 text-muted">{principle.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

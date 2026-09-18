import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import GithubIcon from "@/components/ui/github-icon";
import { buttonStyles } from "@/components/ui/button";
import Reveal from "@/components/ui/reveal";
import { siteConfig, systemLayers } from "@/data/site";
import { foundations } from "@/data/foundations";
import { projects } from "@/data/projects";

const stats = [
  { value: String(foundations.length), label: "core CS areas" },
  { value: String(systemLayers.length), label: "system layers" },
  { value: String(projects.length), label: "deployed projects" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-56 left-1/4 h-[520px] w-[720px] animate-[drift_18s_ease-in-out_infinite] rounded-full bg-accent/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[560px] animate-[drift_22s_ease-in-out_infinite_reverse] rounded-full bg-cyan/15 blur-[130px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/70 px-3 py-1.5 font-mono text-[11px] tracking-tight text-muted backdrop-blur">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Open to opportunities
            </p>

            <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              {siteConfig.name}
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl md:text-[4.2rem]">
              I understand the whole system,{" "}
              <span className="text-gradient">not just the code.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
              {siteConfig.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#foundations" className={buttonStyles("primary")}>
                Explore my foundations
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#projects" className={buttonStyles("secondary")}>
                View projects
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className={buttonStyles("ghost", "px-3")}
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-mono text-3xl font-medium tracking-tight">
                    {stat.value.padStart(2, "0")}
                  </dd>
                  <dd className="mt-1 text-xs text-faint">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <figure className="panel relative overflow-hidden rounded-2xl">
              <div
                className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-accent/12 blur-[70px]"
                aria-hidden="true"
              />

              <div className="relative flex items-center justify-between border-b border-line bg-surface-2/60 px-5 py-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </div>
                <figcaption className="font-mono text-[11px] tracking-tight text-faint">
                  the-stack.txt
                </figcaption>
              </div>

              <ol className="relative divide-y divide-line/70">
                {systemLayers.map((layer, index) => (
                  <li
                    key={layer.name}
                    className="group grid grid-cols-[2.25rem_1fr] items-center gap-3 px-5 py-3.5 transition hover:bg-surface-2/70"
                  >
                    <span className="font-mono text-[11px] text-faint transition group-hover:text-accent">
                      L{systemLayers.length - index}
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <div>
                        <p className="font-medium tracking-tight">{layer.name}</p>
                        <p className="text-sm text-muted">{layer.detail}</p>
                      </div>
                      <p className="font-mono text-[11px] text-faint transition group-hover:text-accent">
                        {layer.tools}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="relative border-t border-line bg-surface-2/60 px-5 py-3 font-mono text-[11px] tracking-tight text-faint">
                <span className="text-accent">$</span> from transistors to
                interfaces — every layer matters
              </p>
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

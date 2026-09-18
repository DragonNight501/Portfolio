"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { requestJourney } from "@/data/request-journey";
import { cn } from "@/lib/utils";

export default function RequestJourney() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = requestJourney[active];
  const lastIndex = requestJourney.length - 1;

  function select(index: number, focus = false) {
    const next = Math.min(Math.max(index, 0), lastIndex);
    setActive(next);

    const tab = tabRefs.current[next];
    // On mobile the tab list scrolls horizontally; keep the active step visible.
    tab?.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (focus) tab?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const keys: Record<string, number> = {
      ArrowDown: active + 1,
      ArrowRight: active + 1,
      ArrowUp: active - 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: lastIndex,
    };

    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key], true);
    }
  }

  return (
    <section id="systems" className="relative border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <SectionTitle
            index="03"
            eyebrow="Systems"
            title={
              <>
                What actually happens when you{" "}
                <span className="text-gradient">open a website?</span>
              </>
            }
            description="A classic interview question — and a good test of whether someone understands the whole picture. Here is one request, followed through every layer."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="inlay relative mt-14 grid overflow-hidden rounded-2xl lg:grid-cols-[320px_1fr]">
            <div
              className="pointer-events-none absolute -top-24 right-0 h-64 w-96 rounded-full bg-accent-soft/20 blur-[90px]"
              aria-hidden="true"
            />

            <div
              role="tablist"
              aria-label="Steps of a web request"
              aria-orientation="vertical"
              className="relative flex gap-1 overflow-x-auto [scrollbar-width:none] border-b border-white/10 p-3 lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0"
            >
              {requestJourney.map((item, index) => {
                const isActive = index === active;

                return (
                  <button
                    key={item.title}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    id={`journey-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="journey-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(index)}
                    onKeyDown={handleKeyDown}
                    className={cn(
                      "flex shrink-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition focus-visible:outline-2 focus-visible:outline-accent",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/50 hover:bg-white/[0.06] hover:text-white/80",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg border font-mono text-xs transition",
                        isActive
                          ? "border-cyan/60 bg-cyan/10 text-cyan"
                          : index < active
                            ? "border-white/25 text-cyan/70"
                            : "border-white/15 text-white/40",
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <div
              id="journey-panel"
              role="tabpanel"
              aria-labelledby={`journey-tab-${active}`}
              className="relative flex min-h-[420px] flex-col p-6 md:p-10"
            >
              <div
                className="h-px overflow-hidden rounded-full bg-white/15"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent-soft to-cyan transition-[width] duration-500"
                  style={{ width: `${((active + 1) / requestJourney.length) * 100}%` }}
                />
              </div>

              <div key={active} className="animate-[fadeIn_0.35s_ease-out]">
                <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-white/40">
                    step {String(active + 1).padStart(2, "0")}/
                    {String(requestJourney.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-md border border-cyan/40 bg-cyan/10 px-2 py-1 text-cyan">
                    {step.layer}
                  </span>
                  <span className="rounded-md border border-white/15 px-2 py-1 text-white/45">
                    {step.where}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
                  {step.explanation}
                </p>

                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
                    Concepts involved
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {step.concepts.map((concept) => (
                      <li
                        key={concept}
                        className="rounded-lg border border-white/12 bg-white/[0.05] px-3 py-1.5 text-sm text-white/85"
                      >
                        {concept}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-10">
                <button
                  type="button"
                  onClick={() => select(active - 1)}
                  disabled={active === 0}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white/35 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                {active === lastIndex ? (
                  <button
                    type="button"
                    onClick={() => select(0)}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-white/70 transition hover:border-white/35 hover:text-white"
                  >
                    Start over
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => select(active + 1)}
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-void transition hover:bg-cyan"
                  >
                    Next step
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

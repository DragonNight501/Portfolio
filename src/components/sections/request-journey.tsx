"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "@/components/ui/container";
import SectionTitle from "@/components/ui/section-title";
import Reveal from "@/components/ui/reveal";
import { buttonStyles } from "@/components/ui/button";
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
          <div className="panel relative mt-14 grid overflow-hidden rounded-2xl lg:grid-cols-[320px_1fr]">
            <div
              className="pointer-events-none absolute -top-28 right-0 h-64 w-96 rounded-full bg-accent/10 blur-[90px]"
              aria-hidden="true"
            />

            <div
              role="tablist"
              aria-label="Steps of a web request"
              aria-orientation="vertical"
              className="relative flex gap-1 overflow-x-auto [scrollbar-width:none] border-b border-line bg-surface-2/50 p-3 lg:flex-col lg:overflow-visible lg:border-r lg:border-b-0"
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
                        ? "bg-surface text-fg shadow-[0_1px_2px_rgb(13_17_23/0.06)]"
                        : "text-muted hover:bg-surface/70 hover:text-fg",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-7 w-7 shrink-0 place-items-center rounded-lg border font-mono text-xs transition",
                        isActive
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : index < active
                            ? "border-accent/30 text-accent/70"
                            : "border-line-strong text-faint",
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
                className="h-px overflow-hidden rounded-full bg-line"
                aria-hidden="true"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-cyan transition-[width] duration-500"
                  style={{ width: `${((active + 1) / requestJourney.length) * 100}%` }}
                />
              </div>

              <div key={active} className="animate-[fadeIn_0.35s_ease-out]">
                <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-faint">
                    step {String(active + 1).padStart(2, "0")}/
                    {String(requestJourney.length).padStart(2, "0")}
                  </span>
                  <span className="rounded-md border border-accent/35 bg-accent/10 px-2 py-1 text-accent">
                    {step.layer}
                  </span>
                  <span className="rounded-md border border-line-strong px-2 py-1 text-muted">
                    {step.where}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  {step.explanation}
                </p>

                <div className="mt-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
                    Concepts involved
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {step.concepts.map((concept) => (
                      <li
                        key={concept}
                        className="rounded-lg border border-line bg-surface-2/70 px-3 py-1.5 text-sm text-fg"
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
                  className={buttonStyles("secondary", "px-4 py-2")}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                {active === lastIndex ? (
                  <button
                    type="button"
                    onClick={() => select(0)}
                    className={buttonStyles("secondary", "px-4 py-2")}
                  >
                    Start over
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => select(active + 1)}
                    className={buttonStyles("primary", "px-4 py-2")}
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

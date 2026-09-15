"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wide"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-line-strong bg-surface text-accent">
              {">_"}
            </span>
            {siteConfig.shortName}
          </a>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className={buttonStyles("secondary", "px-4 py-2")}
            >
              Get in touch
            </a>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-surface md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          id="mobile-menu"
          inert={!isOpen}
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav
            aria-label="Mobile"
            className="flex flex-col gap-1 rounded-2xl border border-line bg-surface p-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-fg"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={buttonStyles("primary", "mt-2 w-full")}
            >
              Get in touch
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

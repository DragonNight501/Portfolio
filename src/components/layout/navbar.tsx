"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import LanguageSwitcher from "@/components/layout/language-switcher";
import { sections, siteConfig } from "@/data/site";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type NavbarProps = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href={`/${lang}`}
            className="flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
          >
            <span className="chip grid h-8 w-8 place-items-center rounded-lg text-[11px]">
              {">_"}
            </span>
            {siteConfig.shortName}
          </a>

          <nav aria-label={dict.mainLabel} className="hidden items-center gap-1 lg:flex">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-surface-2 hover:text-fg"
              >
                {dict.links[id]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher lang={lang} label={dict.languageLabel} />

            <div className="hidden lg:block">
              <a href="#contact" className={buttonStyles("primary", "px-4 py-2")}>
                {dict.cta}
              </a>
            </div>

            <button
              type="button"
              aria-label={isOpen ? dict.closeMenu : dict.openMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line-strong bg-surface lg:hidden"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          inert={!isOpen}
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            isOpen ? "max-h-[28rem] pb-5 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav aria-label={dict.mobileLabel} className="card flex flex-col gap-1 rounded-xl p-3">
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-4 py-3 text-sm text-muted transition hover:bg-surface-2 hover:text-fg"
                onClick={() => setIsOpen(false)}
              >
                {dict.links[id]}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className={buttonStyles("primary", "mt-2 w-full")}
            >
              {dict.cta}
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}

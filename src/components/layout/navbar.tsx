"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-black/30 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-wide">
            {siteConfig.shortName}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="secondary">Hire Me</Button>
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-3 rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a href="#contact" onClick={() => setIsOpen(false)}>
              <Button variant="secondary" className="w-full">
                Hire Me
              </Button>
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
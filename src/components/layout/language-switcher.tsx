"use client";

import type { MouseEvent } from "react";
import { localeCookie, localeLabels, locales } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

/** Remembers an explicit choice so "/" redirects to it next time. */
function rememberLocale(locale: Locale) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
  className?: string;
};

export default function LanguageSwitcher({ lang, label, className }: LanguageSwitcherProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>, target: Locale) {
    rememberLocale(target);

    if (target === lang) {
      event.preventDefault();
      return;
    }

    // Keep the reader on the same section after switching.
    event.preventDefault();
    window.location.assign(`/${target}${window.location.hash}`);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "inline-flex items-center rounded-lg border border-line-strong bg-surface p-0.5 font-mono text-[11px]",
        className,
      )}
    >
      {locales.map((locale) => {
        const isActive = locale === lang;

        return (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-current={isActive ? "true" : undefined}
            title={localeLabels[locale].name}
            onClick={(event) => handleClick(event, locale)}
            className={cn(
              "rounded-md px-2 py-1 tracking-wider transition",
              isActive ? "bg-void text-white" : "text-muted hover:text-fg",
            )}
          >
            <span aria-hidden="true">{localeLabels[locale].short}</span>
            <span className="sr-only">{localeLabels[locale].name}</span>
          </a>
        );
      })}
    </div>
  );
}

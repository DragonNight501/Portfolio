export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that remembers an explicit choice made with the language switcher. */
export const localeCookie = "NEXT_LOCALE";

export const localeLabels: Record<Locale, { short: string; name: string; og: string }> = {
  en: { short: "EN", name: "English", og: "en_US" },
  de: { short: "DE", name: "Deutsch", og: "de_DE" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

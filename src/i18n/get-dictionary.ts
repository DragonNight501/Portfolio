import type { Locale } from "@/i18n/config";
import { en } from "@/i18n/dictionaries/en";
import { de } from "@/i18n/dictionaries/de";

export type { Dictionary } from "@/i18n/dictionaries/en";

export const dictionaries = { en, de };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

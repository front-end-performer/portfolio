import { de } from "./de";
import { en } from "./en";
import { uk } from "./uk";
import type { Locale, LocaleContent } from "../types";

export const localeContent: Record<Locale, LocaleContent> = {
  en,
  de,
  uk,
};

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "de" || value === "uk";
}

export function detectLocale(): Locale {
  const saved = localStorage.getItem("locale");
  if (saved && isLocale(saved)) {
    return saved;
  }

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("uk")) return "uk";
  return "en";
}

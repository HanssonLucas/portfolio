export const locales = ["sv", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sv";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function localizedHref(locale: Locale, path = "/"): string {
  return `/${locale}${path === "/" ? "" : path}`;
}

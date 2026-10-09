"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent } from "react";
import { locales, type Locale } from "@/i18n/config";
import { headerMessages } from "@/i18n/header";

type LanguageSwitcherProps = {
  locale: Locale;
  onNavigate?: () => void;
};

export function LanguageSwitcher({
  locale,
  onNavigate,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const messages = headerMessages[locale];

  function languagePath(targetLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = targetLocale;

    return segments.join("/");
  }

  function handleSwitch(
    event: MouseEvent<HTMLAnchorElement>,
    targetLocale: Locale,
  ) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    onNavigate?.();

    if (targetLocale === locale) return;

    router.push(
      `${languagePath(targetLocale)}${window.location.search}${window.location.hash}`,
      { scroll: false },
    );
  }

  return (
    <nav aria-label={messages.languageNavigation}>
      <ul className="inline-flex rounded-full border border-border bg-surface/60 p-1">
        {locales.map((targetLocale) => (
          <li key={targetLocale}>
            <Link
              href={languagePath(targetLocale)}
              hrefLang={targetLocale}
              lang={targetLocale}
              onClick={(event) => handleSwitch(event, targetLocale)}
              aria-label={
                targetLocale === "sv"
                  ? "Visa sidan på svenska"
                  : "View this page in English"
              }
              aria-current={targetLocale === locale ? "true" : undefined}
              className={`inline-flex min-h-9 min-w-10 items-center justify-center rounded-full px-2 text-xs font-semibold transition-colors ${
                targetLocale === locale
                  ? "bg-accent text-accent-foreground"
                  : "text-muted hover:text-accent"
              }`}
            >
              {targetLocale.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

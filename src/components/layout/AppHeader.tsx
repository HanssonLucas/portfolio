"use client";

import Link from "next/link";
import { useRef, useState, type MouseEvent } from "react";
import { PageContainer } from "@/components/layout/PageContainer";

const navigation = [
  { label: "Hem", href: "/#home" },
  { label: "Projekt", href: "/#projects" },
  { label: "Om mig", href: "/#about" },
];

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 shrink-0 text-accent"
    >
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleNavigation(event: MouseEvent<HTMLAnchorElement>) {
    // Behåll vanligt beteende för exempelvis Ctrl-klick.
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

    closeMenu();

    const destination = new URL(event.currentTarget.href);

    // Från en annan sida sköter Next.js navigationen.
    if (
      destination.origin !== window.location.origin ||
      destination.pathname !== window.location.pathname ||
      destination.search !== window.location.search
    ) {
      return;
    }

    const target = document.getElementById(
      decodeURIComponent(destination.hash.slice(1)),
    );

    if (!target) return;

    event.preventDefault();

    if (window.location.hash !== destination.hash) {
      window.history.pushState(
        null,
        "",
        `${destination.pathname}${destination.search}${destination.hash}`,
      );
    }

    requestAnimationFrame(() => {
      target.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });
  }

  return (
    <header
      className="sticky top-0 z-50 shrink-0 border-b border-border/50 bg-background/85 backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          event.preventDefault();
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <PageContainer>
        <div className="flex min-h-20 items-center gap-12 py-4 sm:min-h-24">
          <Link
            href="/#home"
            onClick={handleNavigation}
            aria-label="Lucas Hansson – startsida"
            className="inline-flex min-h-11 shrink-0 items-center rounded text-2xl font-semibold tracking-tight text-accent"
          >
            L/H.
          </Link>

          <nav aria-label="Huvudnavigation" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className="group relative inline-flex min-h-11 items-center rounded text-sm text-foreground transition-colors hover:text-accent"
                  >
                    {item.label}

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/documents/lucas-hansson-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Öppna mitt CV som PDF i en ny flik"
                  className="group relative inline-flex min-h-11 items-center rounded text-sm text-foreground transition-colors hover:text-accent"
                >
                  CV
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                  />
                </a>
              </li>
            </ul>
          </nav>

          <Link
            href="/#contact"
            onClick={handleNavigation}
            className="ml-auto hidden min-h-11 items-center justify-center gap-3 rounded-full border border-accent/50 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5 md:inline-flex"
          >
            Kontakta mig
            <ArrowRightIcon />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Stäng menyn" : "Öppna menyn"}
            onClick={() => setMenuOpen((open) => !open)}
            className="ml-auto inline-flex min-h-11 items-center gap-3 rounded-full border border-border bg-surface/60 px-4 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent md:hidden"
          >
            {menuOpen ? "Stäng" : "Meny"}

            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="size-5"
            >
              {menuOpen ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </PageContainer>

      <nav
        id="mobile-navigation"
        aria-label="Mobilnavigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-b border-border bg-background shadow-xl md:hidden"
      >
        <PageContainer>
          <div className="pb-6 pt-3">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className="flex min-h-12 items-center rounded-lg px-3 text-sm text-foreground transition-colors hover:bg-surface hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/documents/lucas-hansson-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  aria-label="Öppna mitt CV som PDF i en ny flik"
                  className="flex min-h-12 items-center rounded-lg px-3 text-sm text-foreground transition-colors hover:bg-surface hover:text-accent"
                >
                  CV
                </a>
              </li>
            </ul>

            <Link
              href="/#contact"
              onClick={handleNavigation}
              className="mt-4 inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-accent/50 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
            >
              Kontakta mig
              <ArrowRightIcon />
            </Link>
          </div>
        </PageContainer>
      </nav>
    </header>
  );
}

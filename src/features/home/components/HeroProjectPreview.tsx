import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { heroMessages } from "@/i18n/hero";
import pasdartPreview from "../../../../public/images/projects/pasdart/pasdart-hero.png";
import Link from "next/link";

type HeroProjectPreviewProps = {
  locale: Locale;
};

export function HeroProjectPreview({ locale }: HeroProjectPreviewProps) {
  const text = heroMessages[locale].preview;

  return (
    <figure className="relative mx-auto flex w-full min-w-0 max-w-xl flex-col overflow-hidden rounded-2xl border border-accent/20 bg-surface/65 shadow-[0_24px_64px_-28px_#000000b3] backdrop-blur-sm lg:absolute lg:inset-0 lg:max-w-none">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
      />

      <div className="min-h-0 p-1.5 pb-0 sm:p-2 sm:pb-0 lg:flex-1">
        <div className="overflow-hidden rounded-xl border border-white/5 bg-[#111111] lg:h-full">
          <Image
            src={pasdartPreview}
            alt={text.imageAlt}
            className="block h-auto w-full lg:h-full lg:object-contain"
            sizes="(min-width: 1536px) 600px, (min-width: 1280px) 520px, (min-width: 1024px) 44vw, (min-width: 640px) 558px, calc(100vw - 64px)"
            loading="eager"
            unoptimized
          />
        </div>
      </div>

      <figcaption className="flex min-h-12 shrink-0 flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-3 sm:px-5">
        <Link
          href={`/${locale}/project/pasdart`}
          aria-label={`${text.readMore} – Pasd'Art`}
          className="inline-flex items-center gap-2 rounded text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Pasd&apos;Art
          <svg
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 text-accent"
          >
            <path d="M5 12h14m-5-5 5 5-5 5" />
          </svg>
        </Link>

        <span className="inline-flex items-center gap-2 text-xs font-medium text-muted">
          <span
            aria-hidden="true"
            className="size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_#65efc440]"
          />
          {text.status}
        </span>
      </figcaption>
    </figure>
  );
}

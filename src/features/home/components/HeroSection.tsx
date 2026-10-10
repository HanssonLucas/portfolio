import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import type { Locale } from "@/i18n/config";
import { heroMessages } from "@/i18n/hero";
import heroMountains from "../../../../public/images/hero/hero-mountains.png";
import { HeroProjectPreview } from "./HeroProjectPreview";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  locale: Locale;
};

export function HeroSection({ locale }: HeroSectionProps) {
  const text = heroMessages[locale];

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-16 sm:min-h-[calc(100svh-6rem)] sm:py-24"
    >
      <div className={styles.landscape} aria-hidden="true">
        <Image
          src={heroMountains}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className={styles.mountains}
          unoptimized
        />
      </div>

      <PageContainer>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-stretch xl:-mr-16 xl:gap-24 2xl:-mr-36 2xl:gap-28 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)]">
          <div className="min-w-0">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {text.eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              {text.heading}{" "}
              <span className="text-accent">{text.headingAccent}</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:min-h-[6.5em]">
              {text.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {text.projects}

                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 shrink-0"
                >
                  <path d="M5 12h14m-5-5 5 5-5 5" />
                </svg>
              </a>

              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-accent/70 bg-background/70 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
              >
                {text.about}
              </a>
            </div>
          </div>

          <div className="relative isolate min-w-0 lg:mt-12">
            <div className={styles.glow} aria-hidden="true" />
            <HeroProjectPreview locale={locale} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

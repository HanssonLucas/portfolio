import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { localizedHref, type Locale } from "@/i18n/config";
import { aboutMessages } from "@/i18n/about";
import lucasPhoto from "../../../../public/images/about/lucas-waterfall.jpg";

type AboutPageContentProps = {
  locale?: Locale;
};

export function AboutPageContent({ locale = "sv" }: AboutPageContentProps) {
  const text = aboutMessages[locale];

  return (
    <main className="relative isolate flex-1 overflow-clip pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top_right,#65efc410,transparent_65%)]"
      />

      <PageContainer>
        <Link
          href={`${localizedHref(locale)}#about`}
          className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-muted transition-colors hover:text-accent"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M19 12H5m5-5-5 5 5 5" />
          </svg>
          {text.backToHome}
        </Link>

        <header className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              {text.eyebrow}
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {text.heading}{" "}
              <span className="text-accent">{text.headingAccent}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {text.introduction}
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rotate-3 rounded-2xl border border-accent/25"
            />

            <Image
              src={lucasPhoto}
              alt={text.imageAlt}
              className="aspect-4/3 w-full rounded-2xl border border-border object-cover"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 448px, calc(100vw - 48px)"
              loading="eager"
            />
          </div>
        </header>

        <div className="mt-16 space-y-6 sm:mt-24">
          {text.sections.map((section, index) => (
            <section
              key={section.id}
              aria-labelledby={`about-${section.id}`}
              className={`grid gap-6 rounded-2xl border p-6 sm:p-8 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:p-10 ${
                section.id === "teamwork"
                  ? "border-accent/30 bg-[linear-gradient(135deg,#65efc40d,#0d1b16)]"
                  : "border-border/70 bg-surface/50"
              }`}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 font-mono text-xs text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  id={`about-${section.id}`}
                  className="mt-4 text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
                >
                  {section.heading}
                </h2>
              </div>

              <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="about-next-step"
          className="mt-12 rounded-2xl border border-accent/25 bg-surface p-6 sm:mt-16 sm:p-10"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {text.nextStep.eyebrow}
          </p>

          <h2
            id="about-next-step"
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {text.nextStep.heading}
          </h2>

          <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted">
            {text.nextStep.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:lucas.hansson9@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              {text.nextStep.contact}
            </a>

            <a
              href="/documents/lucas-hansson-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={text.nextStep.cvLabel}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-accent/30 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
            >
              {text.nextStep.cv}
            </a>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

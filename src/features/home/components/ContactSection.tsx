import { PageContainer } from "@/components/layout/PageContainer";
import type { Locale } from "@/i18n/config";
import { contactMessages } from "@/i18n/contact";

const email = "lucas.hansson9@gmail.com";

type ContactSectionProps = {
  locale?: Locale;
};

export function ContactSection({ locale = "sv" }: ContactSectionProps) {
  const text = contactMessages[locale];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-8 border-t border-border/50 py-16 sm:py-20"
    >
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border text-xs text-accent"
              >
                04
              </span>

              <p className="text-sm font-medium uppercase tracking-widest">
                {text.sectionLabel}
              </p>

              <span
                aria-hidden="true"
                className="hidden h-px w-16 bg-border sm:block"
              />
            </div>

            <h2
              id="contact-heading"
              className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {text.heading}
            </h2>

            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {text.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {text.sendEmail}

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
                href="https://www.linkedin.com/in/lucas-hansson-0b0361176/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={text.linkedInLabel}
                className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-foreground transition-colors hover:text-accent"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 shrink-0"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/HanssonLucas"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={text.githubLabel}
                className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-foreground transition-colors hover:text-accent"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="size-4 shrink-0"
                >
                  <path d="M6.766 11.328c-2.063-.25-3.516-1.734-3.516-3.656 0-.781.281-1.625.75-2.188-.203-.515-.172-1.609.063-2.062.625-.078 1.468.25 1.968.703.594-.187 1.219-.281 1.985-.281.765 0 1.39.094 1.953.265.484-.437 1.344-.765 1.969-.687.218.422.25 1.515.046 2.047.5.593.766 1.39.766 2.203 0 1.922-1.453 3.375-3.547 3.64.531.344.89 1.094.89 1.954v1.625c0 .468.391.734.86.547C13.781 14.359 16 11.53 16 8.03 16 3.61 12.406 0 7.984 0 3.563 0 0 3.61 0 8.031a7.88 7.88 0 0 0 5.172 7.422c.422.156.828-.125.828-.547v-1.25c-.219.094-.5.156-.75.156-1.031 0-1.64-.562-2.078-1.609-.172-.422-.36-.672-.719-.719-.187-.015-.25-.093-.25-.187 0-.188.313-.328.625-.328.453 0 .844.281 1.25.86.313.452.64.655 1.031.655s.641-.14 1-.5c.266-.265.47-.5.657-.656" />
                </svg>
                GitHub
              </a>

              <a
                href={`mailto:${email}`}
                className="inline-flex min-h-11 min-w-0 items-center gap-2 rounded text-sm text-muted transition-colors hover:text-accent"
              >
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
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 6 9 7 9-7" />
                </svg>

                <span className="break-all">{email}</span>
              </a>
            </div>
          </div>

          <aside
            aria-labelledby="availability-heading"
            className="rounded-2xl border border-accent/20 bg-surface/80 p-6 shadow-[0_16px_48px_#00000030] backdrop-blur-md sm:p-8 lg:mt-12"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1.5 size-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_#65efc450]"
              />

              <div>
                <h3
                  id="availability-heading"
                  className="text-base font-semibold"
                >
                  {text.availabilityHeading}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {text.availabilityDescription}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </PageContainer>
    </section>
  );
}

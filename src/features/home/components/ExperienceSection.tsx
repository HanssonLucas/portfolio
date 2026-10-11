import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { localizedHref, type Locale } from "@/i18n/config";
import { experienceMessages } from "@/i18n/experience";

const experiences = [
  {
    id: "education",
    technologies: ["JavaScript", "TypeScript", "React", "C# / .NET"],
  },
  {
    id: "hitract",
    technologies: ["React", "Next.js", "TypeScript", "Material UI"],
  },
  {
    id: "personal-projects",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "SQLite"],
  },
] as const;

type ExperienceSectionProps = {
  locale?: Locale;
};

export function ExperienceSection({ locale = "sv" }: ExperienceSectionProps) {
  const text = experienceMessages[locale];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 border-t border-border/50 pb-20 pt-10 sm:pb-28 sm:pt-12"
    >
      <PageContainer>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-border text-xs text-accent"
            >
              03
            </span>

            <h2
              id="experience-heading"
              className="text-sm font-medium uppercase tracking-widest"
            >
              {text.heading}
            </h2>

            <span
              aria-hidden="true"
              className="hidden h-px w-16 bg-border sm:block"
            />
          </div>

          <Link
            href={localizedHref(locale, "/about")}
            className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-accent/40 px-5 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
          >
            {text.readMore}

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
          </Link>
        </div>

        <div className="relative mt-14 lg:mt-20 lg:translate-x-6">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-2 hidden h-px bg-border lg:block"
          />

          <ol className="grid lg:grid-cols-3 lg:gap-12">
            {experiences.map((experience) => {
              const item = text.items[experience.id];

              return (
                <li
                  key={experience.id}
                  className="relative min-w-0 pb-12 pl-9 last:pb-0 lg:flex lg:flex-col lg:pb-0 lg:pl-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-2 top-2 w-px bg-border lg:hidden"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 z-10 flex size-4 items-center justify-center rounded-full border border-accent bg-background shadow-[0_0_14px_#65efc420]"
                  >
                    <span className="size-2 rounded-full bg-accent" />
                  </span>

                  <p className="relative w-fit bg-background pr-3 text-xs leading-4 text-muted lg:ml-7 lg:px-2">
                    {item.period}
                  </p>

                  <div className="mt-7 flex flex-1 flex-col lg:mt-9">
                    <h3 className="text-xl font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-foreground lg:min-h-12">
                      {item.role}
                    </p>

                    <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <ul
                      aria-label={text.technologiesLabel.replace(
                        "{name}",
                        item.title,
                      )}
                      className="mt-auto flex flex-wrap gap-2 pt-6"
                    >
                      {experience.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md border border-border bg-background/70 px-2.5 py-1 text-xs text-muted"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </PageContainer>
    </section>
  );
}

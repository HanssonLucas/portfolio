import { PageContainer } from "@/components/layout/PageContainer";

const experiences = [
  {
    id: "hitract",
    period: "Nov 2025 – Maj 2026",
    title: "Hitract",
    role: "Frontendutvecklare · LIA",
    description:
      "Under min LIA arbetade jag med React och Next.js i en större kodbas. Jag utvecklade komponenter och gränssnitt tillsammans med teamet och fick erfarenhet av att bygga vidare på en befintlig produkt.",
    technologies: ["React", "Next.js", "TypeScript", "Material UI"],
  },
  {
    id: "education",
    period: "Aug 2024 – Jun 2026",
    title: "EC Utbildning",
    role: "Frontendutveckling med fullstackkompetens",
    description:
      "Tvåårig utbildning där jag arbetade med frontend, backend, databaser och UX. Jag avslutade utbildningen med högsta betyg på mitt examensarbete, bokningssystemet Samspel.",
    technologies: ["JavaScript", "TypeScript", "React", "C# / .NET"],
  },
  {
    id: "personal-projects",
    period: "Maj 2026 – Nu",
    title: "Personliga projekt",
    role: "Pasd’Art & Samspel",
    description:
      "Jag fortsätter utveckla två egna projekt med fokus på behov jag själv har mött. Här arbetar jag med hela flödet, från design och gränssnitt till backend och databas.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "SQLite"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8 border-t border-border/50 py-16 sm:py-24"
    >
      <PageContainer>
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
            Erfarenhet & utbildning
          </h2>

          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-border sm:block"
          />
        </div>

        <ol className="mt-10 grid lg:grid-cols-3">
          {experiences.map((experience) => (
            <li
              key={experience.id}
              className="relative min-w-0 pb-10 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-8 lg:last:pr-0"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-2 top-2 w-px bg-border lg:inset-x-0 lg:bottom-auto lg:top-2 lg:h-px lg:w-auto"
              />

              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-10 flex size-4 items-center justify-center rounded-full border border-accent bg-background"
              >
                <span className="size-2 rounded-full bg-accent" />
              </span>

              <p className="relative w-fit bg-background pr-4 text-xs leading-4 text-muted lg:ml-7 lg:px-2">
                {experience.period}
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-tight">
                {experience.title}
              </h3>

              <p className="mt-1 text-sm text-foreground">{experience.role}</p>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {experience.description}
              </p>

              <ul
                aria-label={`Teknik och kunskaper – ${experience.title}`}
                className="mt-5 flex flex-wrap gap-2"
              >
                {experience.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-md border border-border bg-surface/50 px-2.5 py-1 text-xs text-muted"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  );
}

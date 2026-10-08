import { PageContainer } from "@/components/layout/PageContainer";

const projects = [
  {
    name: "Pasdart",
    category: "Eget projekt · Under utveckling",
    description:
      "En webbapplikation för dartcuper med gruppspel, slutspel och matchresultat.",
  },
  {
    name: "Bokningssystem",
    category: "Examensarbete",
    description:
      "En webbapplikation där elever bokar tider för handledning och muntliga redovisningar, och lärare hanterar bokningstillfällen.",
  },
];

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-8 border-t border-border/50 bg-background py-16 sm:py-24"
    >
      <PageContainer>
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Mina projekt
        </p>

        <h2
          id="projects-heading"
          className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Utvalda projekt
        </h2>

        <p className="mt-5 max-w-2xl leading-relaxed text-muted">
          Projekt där jag omsätter idéer i fungerande webbapplikationer.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <p className="text-sm text-accent">{project.category}</p>

              <h3 className="mt-3 text-2xl font-semibold">{project.name}</h3>

              <p className="mt-4 leading-relaxed text-muted">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

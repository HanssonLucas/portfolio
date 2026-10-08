import type { Project } from "@/features/projects/data/projects";

type ProjectStoryProps = {
  sections: Project["details"];
};

export function ProjectStory({ sections }: ProjectStoryProps) {
  if (sections.length === 0) return null;

  return (
    <section aria-labelledby="project-story-heading" className="mt-16 sm:mt-24">
      <div className="mb-8">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Bakom projektet
        </p>

        <h2
          id="project-story-heading"
          className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Från idé till verklighet.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {sections.map((section, index) => (
          <section
            key={section.id}
            aria-labelledby={`story-${section.id}`}
            className={`relative isolate overflow-hidden rounded-2xl border p-6 sm:p-8 ${
              index === 0
                ? "border-accent/25 bg-surface md:col-span-2"
                : "border-border bg-surface/60"
            }`}
          >
            {index === 0 && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#65efc414,transparent_65%)]"
              />
            )}

            <div className="mb-6 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 font-mono text-xs text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span aria-hidden="true" className="h-px w-12 bg-accent/25" />
            </div>

            <div
              className={
                index === 0 ? "grid gap-5 md:grid-cols-[1fr_2fr] md:gap-12" : ""
              }
            >
              <h3
                id={`story-${section.id}`}
                className="max-w-sm text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
              >
                {section.heading}
              </h3>

              <div
                className={`space-y-4 text-base leading-relaxed text-muted ${
                  index === 0 ? "" : "mt-4"
                }`}
              >
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

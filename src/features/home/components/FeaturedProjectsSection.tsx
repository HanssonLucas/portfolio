import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectGallery } from "@/features/projects/components/ProjectGallery";
import { projects } from "@/features/projects/data/projects";
import { ProjectLinks } from "@/features/projects/components/ProjectLinks";

export function FeaturedProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section-glow section-glow-left scroll-mt-28 border-t border-border/50 bg-background py-16 sm:py-24"
    >
      <PageContainer>
        <div className="flex items-center gap-4">
          <span className="flex size-7 items-center justify-center rounded-lg border border-border text-xs text-accent">
            01
          </span>

          <h2
            id="projects-heading"
            className="text-sm font-medium uppercase tracking-widest"
          >
            Utvalda projekt
          </h2>

          <span aria-hidden="true" className="h-px w-16 bg-border" />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              aria-labelledby={`${project.id}-heading`}
              className="overflow-hidden rounded-2xl border border-accent/20 bg-surface"
            >
              <ProjectGallery name={project.name} images={project.gallery}>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    className="block aspect-2/1 w-full bg-[#111111] object-contain object-top"
                    sizes="(min-width: 1152px) 540px, (min-width: 768px) 46vw, 100vw"
                    unoptimized
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-surface to-transparent"
                  />

                  <span className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-background/95 px-3 py-2 text-xs font-medium text-accent">
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-accent"
                    />
                    {project.status}
                  </span>
                </div>
              </ProjectGallery>

              <div className="relative px-6 pb-6 pt-2 sm:px-8 sm:pb-8">
                <h3
                  id={`${project.id}-heading`}
                  className="text-2xl font-semibold tracking-tight"
                >
                  {project.name}
                </h3>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                  {project.category}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <ul
                  aria-label={`Teknik i ${project.name}`}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-border bg-background/50 px-2.5 py-1 text-xs text-muted"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>{" "}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
                  <Link
                    href={`/project/${project.id}`}
                    aria-label={`Läs mer om ${project.name}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-accent/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5 hover:text-accent"
                  >
                    <span>Läs mer</span>

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

                  <ProjectLinks name={project.name} links={project.links} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

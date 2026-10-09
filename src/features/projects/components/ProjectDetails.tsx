import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import type { Project } from "@/features/projects/data/projects";
import { ProjectGallery } from "./ProjectGallery";
import { ProjectStory } from "./ProjectStory";
import { ProjectLinks } from "./ProjectLinks";

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <main className="flex-1 py-10 sm:py-16">
      <PageContainer>
        <Link
          href="/#projects"
          className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-muted transition-colors hover:text-accent"
        >
          <span aria-hidden="true">←</span>
          Tillbaka till projekten
        </Link>

        <header className="mt-8 sm:mt-12">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {project.category}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.name}
            </h1>

            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-3 py-1.5 text-xs font-medium text-accent">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {project.status}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>

          <ul
            aria-label={`Teknik i ${project.name}`}
            className="mt-6 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs text-muted"
              >
                {technology}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ProjectLinks name={project.name} links={project.links} />
          </div>
        </header>

        <section
          aria-labelledby="project-images-heading"
          className="mt-12 sm:mt-16"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2
              id="project-images-heading"
              className="text-sm font-medium uppercase tracking-widest"
            >
              Bilder från projektet
            </h2>

            <p className="text-sm text-muted">
              Klicka på bilden för att öppna galleriet
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-accent/20 bg-surface">
            <ProjectGallery name={project.name} images={project.gallery}>
              <Image
                src={project.image}
                alt={project.imageAlt}
                className="block h-auto w-full"
                sizes="(min-width: 1152px) 1104px, calc(100vw - 48px)"
                loading="eager"
                unoptimized
              />
            </ProjectGallery>
          </div>
        </section>
        <ProjectStory sections={project.details} />
      </PageContainer>
    </main>
  );
}

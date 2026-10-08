import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import pasdartHome from "../../../../public/images/projects/pasdart/pasdart-home.png";
import bookingHome from "../../../../public/images/projects/booking/booking-home.png";
import { ProjectGallery } from "./ProjectGallery";

const projects = [
  {
    id: "pasdart",
    name: "Pasd'Art",
    category: "Eget projekt",
    status: "Under utveckling",
    description:
      "Ett webbaserat system för dartcuper med lagindelning, gruppspel, slutspel och matchresultat.",
    image: pasdartHome,
    imageAlt:
      "Pasd'Arts startsida med introduktion och möjlighet att skapa en cup.",
    technologies: ["Next.js", "TypeScript", "Material UI", "PostgreSQL"],
    gallery: [
      {
        src: "/images/projects/pasdart/pasdart-home.png",
        alt: "Pasd'Arts startsida.",
        caption: "Startsidan — introduktion till Pasd’Art.",
      },
      {
        src: "/images/projects/pasdart/pasdart-players.png",
        alt: "Spelarhantering i Pasd'Art.",
        caption: "Hantera spelare inför en cup.",
      },
      {
        src: "/images/projects/pasdart/pasdart-create.png",
        alt: "Vyn för att skapa en dartcup i Pasd'Art.",
        caption: "Skapa en ny cup.",
      },
      {
        src: "/images/projects/pasdart/pasdart-groups.png",
        alt: "Gruppspel med tabeller och matchresultat i Pasd'Art.",
        caption: "Följ gruppspelets tabeller och resultat.",
      },
      {
        src: "/images/projects/pasdart/pasdart-playoffs.png",
        alt: "Slutspel med semifinaler och final i Pasd'Art.",
        caption: "Slutspel — från semifinaler till final.",
      },
    ],
  },
  {
    id: "samspel",
    name: "Samspel",
    category: "Bokningssystem · Examensarbete",
    status: "Vidareutvecklas",
    description:
      "Ett bokningssystem för handledning och muntliga redovisningar. Lärare skapar tillfällen och studenter bokar en tid.",
    image: bookingHome,
    imageAlt:
      "Samspels startsida med rubriken Mer tid för handledning. Mindre bokningskrångel.",
    technologies: ["Next.js", "TypeScript", "Material UI", "SQLite"],
    gallery: [
      {
        src: "/images/projects/booking/booking-home.png",
        alt: "Samspels startsida.",
        caption: "Startsidan — introduktion till Samspel.",
      },
      {
        src: "/images/projects/booking/booking-overview.png",
        alt: "Översikt över bokningstillfällen i Samspel.",
        caption: "Överblick över kommande bokningstillfällen.",
      },
      {
        src: "/images/projects/booking/booking-create.png",
        alt: "Formulär för att skapa ett bokningstillfälle i Samspel.",
        caption: "Skapa ett nytt bokningstillfälle.",
      },
      {
        src: "/images/projects/booking/booking-participants.png",
        alt: "Deltagarlista för ett bokningstillfälle i Samspel.",
        caption: "Se deltagare och bokade tider.",
      },
      {
        src: "/images/projects/booking/booking-classes.png",
        alt: "Klasshantering i Samspel.",
        caption: "Hantera klasser.",
      },
    ],
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
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}

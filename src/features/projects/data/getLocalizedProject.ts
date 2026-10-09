import type { Locale } from "@/i18n/config";
import { projectsMessages } from "@/i18n/projects";
import type { Project } from "./projects";

export function getLocalizedProject(project: Project, locale: Locale) {
  if (project.id !== "pasdart" && project.id !== "samspel") {
    throw new Error(`Översättningar saknas för projektet: ${project.id}`);
  }

  const translation = projectsMessages[locale].items[project.id];

  return {
    ...project,
    category: translation.category,
    status: translation.status,
    description: translation.description,
    imageAlt: translation.imageAlt,
    gallery: project.gallery.map((image) => {
      const imageTranslation = translation.gallery[image.src];

      if (!imageTranslation) {
        throw new Error(`Översättning saknas för bilden: ${image.src}`);
      }

      return {
        src: image.src,
        alt: imageTranslation.alt,
        caption: imageTranslation.caption,
      };
    }),
  };
}

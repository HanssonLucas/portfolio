import type { Locale } from "./config";

type ProjectDetailsMessages = {
  backToProjects: string;
  projectImages: string;
  openGalleryHint: string;
  loading: string;
};

export const projectDetailsMessages = {
  sv: {
    backToProjects: "Tillbaka till projekten",
    projectImages: "Bilder från projektet",
    openGalleryHint: "Klicka på bilden för att öppna galleriet",
    loading: "Laddar projektet…",
  },
  en: {
    backToProjects: "Back to projects",
    projectImages: "Project screenshots",
    openGalleryHint: "Click the image to open the gallery",
    loading: "Loading project…",
  },
} satisfies Record<Locale, ProjectDetailsMessages>;

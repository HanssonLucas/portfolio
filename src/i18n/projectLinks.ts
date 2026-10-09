import type { Locale } from "./config";

type ProjectLinksMessages = {
  openSite: string;
  openSiteLabel: string;
  githubLabel: string;
};

export const projectLinksMessages = {
  sv: {
    openSite: "Öppna sida",
    openSiteLabel: "Öppna sida för {name} i en ny flik",
    githubLabel: "Visa koden för {name} på GitHub i en ny flik",
  },
  en: {
    openSite: "Visit site",
    openSiteLabel: "Open the website for {name} in a new tab",
    githubLabel: "View the code for {name} on GitHub in a new tab",
  },
} satisfies Record<Locale, ProjectLinksMessages>;

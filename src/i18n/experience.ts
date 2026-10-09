import type { Locale } from "./config";

type ExperienceItemMessages = {
  period: string;
  title: string;
  role: string;
  description: string;
};

type ExperienceMessages = {
  heading: string;
  readMore: string;
  technologiesLabel: string;
  items: Record<
    "hitract" | "education" | "personal-projects",
    ExperienceItemMessages
  >;
};

export const experienceMessages = {
  sv: {
    heading: "Erfarenhet & utbildning",
    readMore: "Läs mer om min bakgrund",
    technologiesLabel: "Teknik och kunskaper – {name}",
    items: {
      hitract: {
        period: "Nov 2025 – Maj 2026",
        title: "Hitract",
        role: "Frontendutvecklare · LIA",
        description:
          "Under min LIA arbetade jag med React och Next.js i en större kodbas. Jag utvecklade komponenter och gränssnitt tillsammans med teamet och fick erfarenhet av att bygga vidare på en befintlig produkt.",
      },
      education: {
        period: "Aug 2024 – Jun 2026",
        title: "EC Utbildning",
        role: "Frontendutveckling med fullstackkompetens",
        description:
          "Tvåårig utbildning där jag arbetade med frontend, backend, databaser och UX. Jag avslutade utbildningen med högsta betyg på mitt examensarbete, bokningssystemet Samspel.",
      },
      "personal-projects": {
        period: "Maj 2026 – Nu",
        title: "Personliga projekt",
        role: "Pasd’Art & Samspel",
        description:
          "Jag fortsätter utveckla två egna projekt med fokus på behov jag själv har mött. Här arbetar jag med hela flödet, från design och gränssnitt till backend och databas.",
      },
    },
  },

  en: {
    heading: "Experience & education",
    readMore: "More about my background",
    technologiesLabel: "Technologies and skills – {name}",
    items: {
      hitract: {
        period: "Nov 2025 – May 2026",
        title: "Hitract",
        role: "Frontend Developer · Internship",
        description:
          "During my internship, I worked with React and Next.js in a larger codebase. I developed components and interfaces together with the team and gained experience building on an existing product.",
      },
      education: {
        period: "Aug 2024 – Jun 2026",
        title: "EC Utbildning",
        role: "Frontend Development with Full-Stack Skills",
        description:
          "A two-year programme covering frontend, backend, databases and UX. I completed my studies with the highest grade on my graduation project, the booking system Samspel.",
      },
      "personal-projects": {
        period: "May 2026 – Present",
        title: "Personal projects",
        role: "Pasd’Art & Samspel",
        description:
          "I continue to develop two personal projects based on needs I've experienced myself. I work on the whole process, from design and interfaces to backend and databases.",
      },
    },
  },
} satisfies Record<Locale, ExperienceMessages>;

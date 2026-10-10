import type { Locale } from "./config";

type HeroMessages = {
  eyebrow: string;
  heading: string;
  headingAccent: string;
  description: string;
  projects: string;
  about: string;
  preview: {
    imageAlt: string;
    status: string;
    description: string;
    readMore: string;
  };
};

export const heroMessages = {
  sv: {
    eyebrow: "Frontendutvecklare · Fullstackkompetens",
    heading: "Jag bygger webbapplikationer med fokus på",
    headingAccent: "funktion och upplevelse.",
    description:
      "Jag heter Lucas och är frontendutvecklare med fullstackkompetens. Här visar jag projekt jag byggt, erfarenheter jag fått och hur jag arbetar med modern webbutveckling.",
    projects: "Se mina projekt",
    about: "Läs mer om mig",
    preview: {
      imageAlt: "Pasdarts cupvy med semifinaler, final och matchresultat.",
      status: "Under utveckling",
      description: "Dartcuper från laglottning till final.",
      readMore: "Om projektet",
    },
  },
  en: {
    eyebrow: "Frontend developer · Full-stack skills",
    heading: "I build web applications with a focus on",
    headingAccent: "functionality and user experience.",
    description:
      "I'm Lucas, a frontend developer with full-stack skills. Here I share the projects I've built, what I've learned and how I approach modern web development.",
    projects: "Explore my projects",
    about: "More about me",
    preview: {
      imageAlt:
        "Pasdart's tournament view showing semifinals, the final and match results.",
      status: "In development",
      description: "Dart tournaments from team draws to the final.",
      readMore: "About the project",
    },
  },
} satisfies Record<Locale, HeroMessages>;

import pasdartHome from "../../../../public/images/projects/pasdart/pasdart-home.png";
import bookingHome from "../../../../public/images/projects/booking/booking-home.png";

export const projects = [
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

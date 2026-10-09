import pasdartHome from "../../../../public/images/projects/pasdart/pasdart-home.png";
import bookingHome from "../../../../public/images/projects/booking/booking-home.png";

export const projects = [
  {
    id: "pasdart",
    name: "Pasd'Art",
    image: pasdartHome,
    technologies: ["Next.js", "TypeScript", "Material UI", "PostgreSQL"],
    links: {
      live: "https://pasdart.vercel.app/",
      github: "https://github.com/HanssonLucas/Pasdart",
    },
    gallery: [
      {
        src: "/images/projects/pasdart/pasdart-home.png",
      },
      {
        src: "/images/projects/pasdart/pasdart-players.png",
      },
      {
        src: "/images/projects/pasdart/pasdart-create.png",
      },
      {
        src: "/images/projects/pasdart/pasdart-groups.png",
      },
      {
        src: "/images/projects/pasdart/pasdart-playoffs.png",
      },
    ],
  },
  {
    id: "samspel",
    name: "Samspel",
    image: bookingHome,
    technologies: ["Next.js", "TypeScript", "Material UI", "SQLite"],
    links: {
      live: "",
      github: "https://github.com/HanssonLucas/school-booking-system",
    },
    gallery: [
      {
        src: "/images/projects/booking/booking-home.png",
      },
      {
        src: "/images/projects/booking/booking-overview.png",
      },
      {
        src: "/images/projects/booking/booking-create.png",
      },
      {
        src: "/images/projects/booking/booking-participants.png",
      },
      {
        src: "/images/projects/booking/booking-classes.png",
      },
    ],
  },
];

export type Project = (typeof projects)[number];

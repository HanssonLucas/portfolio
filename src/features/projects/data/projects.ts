import type { StaticImageData } from "next/image";
import pasdartHome from "../../../../public/images/projects/pasdart/pasdart-home.png";
import bookingHome from "../../../../public/images/projects/booking/booking-homescreen.png";
import bookingHomeEnglish from "../../../../public/images/projects/booking/booking-homescreen-eng.png";

export type Project = {
  id: "pasdart" | "samspel";
  name: string;
  image: StaticImageData;
  imageEn?: StaticImageData;
  technologies: string[];
  links: {
    live: string;
    github: string;
  };
  gallery: {
    src: string;
    srcEn?: string;
  }[];
};

export const projects: Project[] = [
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
        src: "/images/projects/pasdart/pasdart-randomize-team.png",
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
    imageEn: bookingHomeEnglish,
    technologies: ["Next.js", "TypeScript", "Material UI", "SQLite"],
    links: {
      live: "",
      github: "https://github.com/HanssonLucas/school-booking-system",
    },
    gallery: [
      {
        src: "/images/projects/booking/booking-homescreen.png",
        srcEn: "/images/projects/booking/booking-homescreen-eng.png",
      },
      {
        src: "/images/projects/booking/booking-classes.png",
        srcEn: "/images/projects/booking/booking-classes-eng.png",
      },
      {
        src: "/images/projects/booking/booking-classes-howitworks.png",
        srcEn: "/images/projects/booking/booking-classes-howitworks-eng.png",
      },
      {
        src: "/images/projects/booking/booking-create-class.png",
        srcEn: "/images/projects/booking/booking-create-class-eng.png",
      },
      {
        src: "/images/projects/booking/booking-overview.png",
        srcEn: "/images/projects/booking/booking-overview-eng.png",
      },
      {
        src: "/images/projects/booking/booking-create-howitworks.png",
        srcEn: "/images/projects/booking/booking-create-howitworks-eng.png",
      },
      {
        src: "/images/projects/booking/booking-create.png",
        srcEn: "/images/projects/booking/booking-create-eng.png",
      },
      {
        src: "/images/projects/booking/booking-participants.png",
        srcEn: "/images/projects/booking/booking-participants-eng.png",
      },
    ],
  },
];

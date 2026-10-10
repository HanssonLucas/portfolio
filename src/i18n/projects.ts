import type { Locale } from "./config";

type ProjectTranslation = {
  category: string;
  status: string;
  description: string;
  imageAlt: string;
  gallery: Record<
    string,
    {
      alt: string;
      caption: string;
    }
  >;
};

type ProjectsMessages = {
  heading: string;
  readMore: string;
  readMoreAbout: string;
  technologies: string;
  items: Record<"pasdart" | "samspel", ProjectTranslation>;
};

export const projectsMessages: Record<Locale, ProjectsMessages> = {
  sv: {
    heading: "Utvalda projekt",
    readMore: "Läs mer",
    readMoreAbout: "Läs mer om",
    technologies: "Teknik i",
    items: {
      pasdart: {
        category: "Eget projekt",
        status: "Under utveckling",
        description:
          "Ett webbaserat system för dartcuper med lagindelning, gruppspel, slutspel och matchresultat.",
        imageAlt:
          "Pasd'Arts startsida med introduktion och möjlighet att skapa en cup.",
        gallery: {
          "/images/projects/pasdart/pasdart-home.png": {
            alt: "Pasd'Arts startsida.",
            caption: "Startsidan — introduktion till Pasd’Art.",
          },
          "/images/projects/pasdart/pasdart-players.png": {
            alt: "Spelarhantering i Pasd'Art.",
            caption: "Hantera spelare inför en cup.",
          },
          "/images/projects/pasdart/pasdart-create.png": {
            alt: "Vyn för att skapa en dartcup i Pasd'Art.",
            caption: "Skapa en ny cup.",
          },
          "/images/projects/pasdart/pasdart-randomize-team.png": {
            alt: "Lagindelning i Pasd'Art med fem lottade dubbelpar och möjlighet att slumpa om eller godkänna lagen.",
            caption: "Lotta och godkänn lagen inför cupen.",
          },
          "/images/projects/pasdart/pasdart-groups.png": {
            alt: "Gruppspel med tabeller och matchresultat i Pasd'Art.",
            caption: "Följ gruppspelets tabeller och resultat.",
          },
          "/images/projects/pasdart/pasdart-playoffs.png": {
            alt: "Slutspel med semifinaler och final i Pasd'Art.",
            caption: "Slutspel — från semifinaler till final.",
          },
        },
      },

      samspel: {
        category: "Bokningssystem · Examensarbete",
        status: "Vidareutvecklas",
        description:
          "Ett bokningssystem för handledning och muntliga redovisningar. Lärare skapar tillfällen och studenter bokar en tid.",
        imageAlt:
          "Samspels startsida med rubriken Mer tid för handledning. Mindre bokningskrångel.",
        gallery: {
          "/images/projects/booking/booking-homescreen.png": {
            alt: "Samspels startsida.",
            caption: "Startsidan — introduktion till Samspel.",
          },
          "/images/projects/booking/booking-overview.png": {
            alt: "Översikt över bokningstillfällen i Samspel.",
            caption: "Överblick över bokningstillfällen.",
          },
          "/images/projects/booking/booking-create.png": {
            alt: "Formulär för att skapa ett bokningstillfälle i Samspel.",
            caption: "Skapa ett nytt bokningstillfälle.",
          },
          "/images/projects/booking/booking-create-howitworks.png": {
            alt: "Hjälpdialog som förklarar hur lärare hanterar bokningstillfällen i Samspel.",
            caption: "Så fungerar Mina tillfällen.",
          },
          "/images/projects/booking/booking-participants.png": {
            alt: "Deltagarlista för ett bokningstillfälle i Samspel.",
            caption: "Se deltagare och bokade tider.",
          },
          "/images/projects/booking/booking-classes.png": {
            alt: "Översikt över lärarens klasser i Samspel.",
            caption: "Hantera klasser.",
          },
          "/images/projects/booking/booking-create-class.png": {
            alt: "Dialog för att skapa en klass med namn, klassbeteckning och beskrivning i Samspel.",
            caption: "Skapa en ny klass.",
          },
          "/images/projects/booking/booking-classes-howitworks.png": {
            alt: "Hjälpdialog som förklarar klasshantering och hur elever ansluter till klasser i Samspel.",
            caption: "Så fungerar Mina klasser.",
          },
        },
      },
    },
  },

  en: {
    heading: "Featured projects",
    readMore: "Read more",
    readMoreAbout: "Read more about",
    technologies: "Technologies used in",
    items: {
      pasdart: {
        category: "Personal project",
        status: "In development",
        description:
          "A web application for dart tournaments, with team draws, group stages, playoffs and match results.",
        imageAlt:
          "Pasd'Art's home page with an introduction and the option to create a tournament.",
        gallery: {
          "/images/projects/pasdart/pasdart-home.png": {
            alt: "Pasd'Art's home page.",
            caption: "The home page — an introduction to Pasd'Art.",
          },
          "/images/projects/pasdart/pasdart-players.png": {
            alt: "Player management in Pasd'Art.",
            caption: "Manage players before a tournament.",
          },
          "/images/projects/pasdart/pasdart-create.png": {
            alt: "The tournament creation view in Pasd'Art.",
            caption: "Create a new tournament.",
          },
          "/images/projects/pasdart/pasdart-randomize-team.png": {
            alt: "Team selection in Pasd'Art showing five randomly assigned pairs, with options to reshuffle or confirm the teams.",
            caption: "Draw and confirm teams before the tournament.",
          },
          "/images/projects/pasdart/pasdart-groups.png": {
            alt: "Group standings and match results in Pasd'Art.",
            caption: "Follow the group standings and results.",
          },
          "/images/projects/pasdart/pasdart-playoffs.png": {
            alt: "The playoffs with semifinals and a final in Pasd'Art.",
            caption: "The playoffs — from semifinals to the final.",
          },
        },
      },

      samspel: {
        category: "Booking system · Graduation project",
        status: "Ongoing development",
        description:
          "A booking system for tutoring sessions and oral presentations. Teachers create sessions and students book a time slot.",
        imageAlt:
          "Samspel's home page with a headline about more time for tutoring and less hassle with bookings.",
        gallery: {
          "/images/projects/booking/booking-homescreen.png": {
            alt: "Samspel's home page.",
            caption: "The home page — an introduction to Samspel.",
          },
          "/images/projects/booking/booking-overview.png": {
            alt: "An overview of booking sessions in Samspel.",
            caption: "An overview of booking sessions.",
          },
          "/images/projects/booking/booking-create.png": {
            alt: "The form for creating a booking session in Samspel.",
            caption: "Create a new booking session.",
          },
          "/images/projects/booking/booking-create-howitworks.png": {
            alt: "A help dialog explaining how teachers manage booking sessions in Samspel.",
            caption: "How to manage booking sessions.",
          },
          "/images/projects/booking/booking-participants.png": {
            alt: "The participant list for a booking session in Samspel.",
            caption: "View participants and booked time slots.",
          },
          "/images/projects/booking/booking-classes.png": {
            alt: "An overview of the teacher's classes in Samspel.",
            caption: "Manage classes.",
          },
          "/images/projects/booking/booking-create-class.png": {
            alt: "A dialog for creating a class with a name, class designation and description in Samspel.",
            caption: "Create a new class.",
          },
          "/images/projects/booking/booking-classes-howitworks.png": {
            alt: "A help dialog explaining class management and how students join classes in Samspel.",
            caption: "How to manage classes.",
          },
        },
      },
    },
  },
};

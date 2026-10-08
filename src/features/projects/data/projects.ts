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
    details: [
      {
        id: "background",
        heading: "Från dartkväll till webbapp",
        paragraphs: [
          "Pasd’Art började med ett behov i mitt eget dartgäng. Vi hanterade lottning, matcher, tabeller och resultat manuellt. Det fungerade, men blev lätt rörigt när vi ville hålla koll på hela cupen.",
          "Jag ville samla flödet på ett ställe: skapa en cup, lotta lag, genomföra gruppspel och slutspel och till sist få fram en vinnare.",
        ],
      },
      {
        id: "role",
        heading: "Min roll",
        paragraphs: [
          "Jag utvecklar projektet själv och ansvarar för design, UX, frontend, backend, databas och driftsättning. Arbetet omfattar även behörigheter, ett visningsläge för åskådare och stöd för olika matchformat.",
          "Applikationen är byggd med Next.js, TypeScript och Material UI. Data lagras i PostgreSQL via Neon, med Drizzle för databashanteringen. Projektet körs live på Vercel.",
        ],
      },
      {
        id: "challenges",
        heading: "Mer logik än jag först trodde",
        paragraphs: [
          "Den största utmaningen har varit att få turneringslogiken att fungera i olika scenarier. Gruppspel, tabeller, särskiljning med castoff, seedning och slutspel behöver hänga ihop även när flera lag får lika resultat.",
          "Schemaläggningen har också krävt mycket arbete. Matcher ska kunna fördelas över flera darttavlor utan att samma lag får två matcher samtidigt.",
        ],
      },
      {
        id: "lessons",
        heading: "Det jag tar med mig",
        paragraphs: [
          "Projektet har gett mig praktisk erfarenhet av datamodellering, API-struktur, state-hantering och säkerhet. Jag har fått arbeta med hur gränssnitt, matchlogik och sparade resultat påverkar varandra.",
          "När projektet har vuxit har det också blivit tydligt varför stora komponenter behöver delas upp. En tydligare ansvarsfördelning gör koden lättare att förstå, felsöka och vidareutveckla.",
        ],
      },
      {
        id: "next-steps",
        heading: "Testat i praktiken, med mer att bygga",
        paragraphs: [
          "Vi har testat riktiga turneringsflöden i appen. Det ger mig konkreta saker att förbättra och hjälper mig att utforma systemet för våra dartkvällar.",
          "Framåt vill jag utveckla historik, spelarstatistik, leaderboard, rating och bättre lagbalansering. Det är planerade förbättringar, medan fokus nu ligger på att fortsätta utveckla det befintliga cupflödet.",
        ],
      },
    ],
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
    details: [],
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
export type Project = (typeof projects)[number];

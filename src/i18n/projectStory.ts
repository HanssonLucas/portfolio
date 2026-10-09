import type { Locale } from "./config";

type StorySection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

type ProjectStoryMessages = {
  eyebrow: string;
  heading: string;
  items: Record<"pasdart" | "samspel", StorySection[]>;
};

export const projectStoryMessages: Record<Locale, ProjectStoryMessages> = {
  sv: {
    eyebrow: "Bakom projektet",
    heading: "Från idé till verklighet.",
    items: {
      pasdart: [
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

      samspel: [
        {
          id: "background",
          heading: "Från delat dokument till bokningssystem",
          paragraphs: [
            "Samspel började som mitt examensarbete. Under utbildningen använde vi Google Docs för att boka handledning och muntliga redovisningar. Jag ville göra bokningen tydligare och samla hela flödet på ett ställe.",
            "Vi hade studenter från flera olika länder, och alla var inte lika bekväma med svenska. Därför byggde jag hela systemet på både svenska och engelska. Språkstödet var en viktig del av idén från början, så att fler skulle kunna förstå och använda systemet.",
            "Lärare kan skapa tillfällen med lediga tider och studenter kan boka och avboka direkt, utan att behöva ändra i ett gemensamt dokument.",
          ],
        },
        {
          id: "role",
          heading: "Min roll",
          paragraphs: [
            "Jag har utvecklat projektet själv och ansvarat för design, UX, frontend, backend och databas. Systemet är byggt med Next.js, TypeScript, Material UI och SQLite.",
            "Under examensarbetet låg fokus på bokningsflödet för lärare och studenter. Efteråt har jag fortsatt utveckla systemet med bland annat inloggning, behörigheter, e-postverifiering och klasshantering.",
          ],
        },
        {
          id: "challenges",
          heading: "Att få tider och bokningar att fungera ihop",
          paragraphs: [
            "En av de största utmaningarna har varit logiken bakom tidsluckorna. Starttid, sluttid och längden på varje samtal avgör vilka tider som går att boka. Jag har också behövt hantera vad som händer när en lärare ändrar ett tillfälle som redan har bokningar.",
            "När fler funktioner tillkom blev behörigheter en större del av arbetet. Lärare och studenter behöver kunna göra olika saker och bara komma åt de klasser och den information som hör till dem.",
          ],
        },
        {
          id: "lessons",
          heading: "Det jag tar med mig",
          paragraphs: [
            "Projektet har lärt mig mycket om hur gränssnitt, bokningslogik och databas behöver hänga ihop. En ändring av ett tillfälle kan påverka både lediga tider och befintliga bokningar, vilket har fått mig att tänka igenom fler scenarier.",
            "Jag har också lagt mycket tid på att göra vyerna tydliga och enhetliga. När projektet har vuxit har jag sett värdet av att dela upp stora komponenter och återanvända både logik och design.",
          ],
        },
        {
          id: "next-steps",
          heading: "Från examensarbete till nästa steg",
          paragraphs: [
            "Examensarbetet avslutades med högsta betyg, men jag har fortsatt utveckla Samspel för att göra det mer användbart i praktiken. Hittills har jag själv testat flödena under utvecklingen. Nästa steg är att få återkoppling från lärare och studenter.",
            "Vid presentationen nämnde min lärare att systemet skulle kunna vara intressant för skolan och erbjöd sig att hjälpa mig med en kontakt när jag känner mig redo. Jag planerar att följa upp det och se om det finns intresse för att testa Samspel.",
          ],
        },
      ],
    },
  },

  en: {
    eyebrow: "Behind the project",
    heading: "From idea to reality.",
    items: {
      pasdart: [
        {
          id: "background",
          heading: "From darts nights to a web app",
          paragraphs: [
            "Pasd’Art started with a need in my own darts group. We handled draws, matches, standings and results manually. It worked, but keeping track of the whole tournament could quickly get messy.",
            "I wanted to bring everything together: creating a tournament, drawing teams, running the group stage and playoffs, and eventually finding a winner.",
          ],
        },
        {
          id: "role",
          heading: "My role",
          paragraphs: [
            "I develop the project myself and handle design, UX, frontend, backend, the database and deployment. This also includes permissions, a spectator view and support for different match formats.",
            "The application is built with Next.js, TypeScript and Material UI. Data is stored in PostgreSQL through Neon, with Drizzle for database access. The project is live on Vercel.",
          ],
        },
        {
          id: "challenges",
          heading: "More logic than I first expected",
          paragraphs: [
            "The biggest challenge has been making the tournament logic work across different scenarios. Group stages, standings, castoff tie-breaks, seeding and playoffs all need to work together, including when several teams finish with equal results.",
            "Scheduling has also taken a lot of work. Matches need to be spread across multiple dartboards without scheduling the same team in two matches at once.",
          ],
        },
        {
          id: "lessons",
          heading: "What I've learned",
          paragraphs: [
            "The project has given me practical experience with data modelling, API structure, state management and security. I've worked through how the interface, match logic and saved results affect each other.",
            "As the project has grown, I've also seen why large components need to be split up. Giving each part a clearer responsibility makes the code easier to understand, debug and build on.",
          ],
        },
        {
          id: "next-steps",
          heading: "Tested in practice, with more to build",
          paragraphs: [
            "We've tested real tournament flows in the app. That gives me specific things to improve and helps me shape the system around our darts nights.",
            "Next, I'd like to add tournament history, player statistics, a leaderboard, ratings and better team balancing. These are planned improvements; for now, I'm focusing on developing the existing tournament flow.",
          ],
        },
      ],

      samspel: [
        {
          id: "background",
          heading: "From a shared document to a booking system",
          paragraphs: [
            "Samspel started as my graduation project. During my studies, we used Google Docs to book tutoring sessions and oral presentations. I wanted to make booking clearer and bring the whole process together in one place.",
            "We had students from several countries, and not everyone was equally comfortable with Swedish. That's why I built the whole system in both Swedish and English. Language support was an important part of the original idea, helping more students understand and use the system.",
            "Teachers can create sessions with available time slots, and students can book or cancel directly without editing a shared document.",
          ],
        },
        {
          id: "role",
          heading: "My role",
          paragraphs: [
            "I developed the project myself and handled design, UX, frontend, backend and the database. The system is built with Next.js, TypeScript, Material UI and SQLite.",
            "During the graduation project, I focused on the booking flow for teachers and students. Since then, I've continued developing the system with features such as login, permissions, email verification and class management.",
          ],
        },
        {
          id: "challenges",
          heading: "Making time slots and bookings work together",
          paragraphs: [
            "One of the biggest challenges has been the logic behind time slots. The start time, end time and length of each appointment determine which slots can be booked. I've also had to handle what happens when a teacher changes a session that already has bookings.",
            "As more features were added, permissions became a bigger part of the work. Teachers and students need different capabilities and should only have access to the classes and information relevant to them.",
          ],
        },
        {
          id: "lessons",
          heading: "What I've learned",
          paragraphs: [
            "The project has taught me a lot about how the interface, booking logic and database need to work together. Changing a session can affect both available time slots and existing bookings, which has made me think through more scenarios.",
            "I've also spent a lot of time making the views clear and consistent. As the project has grown, I've seen the value of splitting up large components and reusing both logic and design.",
          ],
        },
        {
          id: "next-steps",
          heading: "Beyond the graduation project",
          paragraphs: [
            "The graduation project received the highest grade, but I've continued developing Samspel to make it more useful in practice. So far, I've tested the flows myself during development. The next step is to get feedback from teachers and students.",
            "During my presentation, my teacher mentioned that the school might be interested in the system and offered to help me get in touch with someone when I feel ready. I plan to follow up and see if there's interest in trying Samspel.",
          ],
        },
      ],
    },
  },
};

import type { Locale } from "./config";

type AboutSectionId =
  | "career-change"
  | "frontend"
  | "education"
  | "previous-experience"
  | "teamwork"
  | "outside-work";

type AboutStorySection = {
  id: AboutSectionId;
  heading: string;
  paragraphs: string[];
};

type AboutMessages = {
  metadata: {
    title: string;
    description: string;
  };
  backToHome: string;
  eyebrow: string;
  heading: string;
  headingAccent: string;
  introduction: string;
  imageAlt: string;
  sections: AboutStorySection[];
  nextStep: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    contact: string;
    cv: string;
    cvLabel: string;
  };
};

export const aboutMessages: Record<Locale, AboutMessages> = {
  sv: {
    metadata: {
      title: "Om mig | Lucas Hansson",
      description:
        "Min väg från montering och filmredigering till frontendutveckling. Läs om min bakgrund, utbildning och hur jag fungerar i ett team.",
    },
    backToHome: "Tillbaka till startsidan",
    eyebrow: "Min bakgrund",
    heading: "Jag vill förstå hur saker fungerar — och",
    headingAccent: "se vad jag kan skapa.",
    introduction:
      "Jag heter Lucas Hansson och är frontendutvecklare med fullstackkompetens. Min väg hit började med montering, service och teknisk dokumentation. Intresset för att skapa saker har däremot funnits länge, från film och videoredigering till de webbapplikationer jag bygger idag.",
    imageAlt: "Lucas fotograferar vid ett vattenfall.",
    sections: [
      {
        id: "career-change",
        heading: "Från montering till utveckling",
        paragraphs: [
          "Innan jag började studera arbetade jag flera år på Granberg Interior. Jag började som montör och tog mig sedan vidare till bland annat service och teknisk dokumentation. Jag trivdes med att lösa problem och lära mig nya saker, men kände efter ett tag att jag hade nått så långt jag kunde i rollen. Jag ville hitta något där jag kunde fortsätta utvecklas.",
          "När min kusin började studera till mjukvaruutvecklare väcktes mitt intresse direkt. Jag har alltid tyckt om att sitta vid datorn, och programmering blev ett nytt sätt att få utlopp för både nyfikenheten och viljan att skapa.",
        ],
      },
      {
        id: "frontend",
        heading: "Varför det blev frontend",
        paragraphs: [
          "På gymnasiet studerade jag film och arbetade med bland annat en novellfilm, intervjuer och redigering. Jag har också redigerat skatevideor och spelvideor från exempelvis Counter-Strike. Jag tycker om att arbeta med detaljer och se hur delarna växer ihop till något färdigt.",
          "Därför blev frontend ett naturligt val. Jag gillar kombinationen av problemlösning och att direkt kunna se resultatet av det jag bygger. Samtidigt vill jag förstå vad som händer bakom gränssnittet. Backend tilltalar min mer nördiga sida, och jag tycker att hela kedjan från ett knapptryck till databasen är intressant.",
        ],
      },
      {
        id: "education",
        heading: "Utbildningen och tiden på Hitract",
        paragraphs: [
          "Jag studerade frontendutveckling med fullstackkompetens på EC Utbildning mellan augusti 2024 och juni 2026. Där fick jag arbeta med allt från gränssnitt och användarupplevelse till API:er och databaser.",
          "Under min LIA på Hitract arbetade jag i ett team med en större kodbas byggd med Next.js, React, TypeScript och Material UI. Jag byggde och vidareutvecklade komponenter, tabeller och andra delar av gränssnittet. Jag fick också felsöka och sätta mig in i logik som redan fanns, vilket lärde mig mycket om att förstå och bygga vidare på andras kod.",
          "Som examensarbete byggde jag bokningssystemet Samspel, som fick högsta betyg. Sedan dess har jag fortsatt utveckla både Samspel och dartappen Pasd’Art. Egna projekt ger mig möjlighet att prova idéer, fördjupa mina kunskaper och lösa problem jag själv har mött.",
        ],
      },
      {
        id: "previous-experience",
        heading: "Det jag tar med mig från mitt tidigare jobb",
        paragraphs: [
          "På Granberg arbetade vi ibland med stora beställningar och korta deadlines. Då behövde vi samarbeta, prioritera och lösa problemen som dök upp för att hinna klart. Jag tar med mig vanan att ta ansvar för min del och hjälpas åt när det behövs.",
          "Serviceärendena gav mig också erfarenhet av kundkontakt och av att förstå ett problem utifrån någon annans beskrivning. Det är något jag har nytta av när jag försöker förstå vad en användare behöver.",
          "När jag tog fram teknisk dokumentation behövde bilder och texter följa en tydlig röd tråd, så att även någon som inte kände till produkten skulle kunna montera den. Samma tanke finns med när jag bygger gränssnitt: det som är självklart för mig som har byggt något behöver inte vara självklart för den som använder det.",
        ],
      },
      {
        id: "teamwork",
        heading: "Jag tar gärna initiativ — även mellan människor",
        paragraphs: [
          "Jag tycker om att få ihop människor och få andra att känna sig bekväma, både socialt och på jobbet. Jag är ofta den som tar första steget, får igång samtalet och ser till att alla känner sig inkluderade.",
          "Under en gruppuppgift i utbildningen var många nervösa inför arbetet. Då tog jag naturligt en ledande roll, samlade gruppen och hjälpte oss att komma igång. Vi blev klara med uppgiften och tog oss igenom kursen tillsammans.",
          "Jag får ofta höra att jag är lätt att prata med och enkel att ha att göra med. Jag är bra på att känna av hur andra har det och tycker att ett bra samarbete börjar med att man vågar fråga, dela idéer och säga när man behöver hjälp. Det är en sådan stämning jag gärna bidrar till i ett team.",
        ],
      },
      {
        id: "outside-work",
        heading: "Utanför koden",
        paragraphs: [
          "När jag inte sitter vid datorn tycker jag om att vara ute i naturen, resa och fotografera. Jag spelar också gärna dart och datorspel. Ibland möts intressena, som när dartkvällarna med kompisarna blev starten på Pasd’Art.",
        ],
      },
    ],
    nextStep: {
      eyebrow: "Nästa steg",
      heading: "Det jag söker nu",
      paragraphs: [
        "Nu söker jag min första utvecklarroll, gärna med fokus på frontend och möjlighet att fortsätta arbeta med backend. Jag vill bidra med det jag redan kan, komma med egna idéer och lära mig av kollegor med andra erfarenheter.",
        "Jag tycker om att förstå varför en lösning fungerar och kan gärna fastna i detaljer för att få grepp om något nytt. Det var viljan att fortsätta lära mig som fick mig att byta yrke, och den är fortfarande en stor del av det som driver mig.",
      ],
      contact: "Hör av dig",
      cv: "Öppna mitt CV",
      cvLabel: "Öppna mitt CV på svenska som PDF i en ny flik",
    },
  },

  en: {
    metadata: {
      title: "About me | Lucas Hansson",
      description:
        "My path from assembly work and film editing to frontend development. Learn about my background, education and how I work in a team.",
    },
    backToHome: "Back to home",
    eyebrow: "My background",
    heading: "I want to understand how things work — and",
    headingAccent: "see what I can create.",
    introduction:
      "I'm Lucas Hansson, a frontend developer with full-stack skills. My path here started with assembly work, servicing and technical documentation. But my interest in creating things goes back much further, from film and video editing to the web applications I build today.",
    imageAlt: "Lucas taking photos by a waterfall.",
    sections: [
      {
        id: "career-change",
        heading: "From assembly work to development",
        paragraphs: [
          "Before I started studying, I spent several years at Granberg Interior. I began as an assembler and later took on work in servicing and technical documentation. I enjoyed solving problems and learning new things, but eventually felt I'd gone as far as I could in the role. I wanted to find something where I could keep growing.",
          "When my cousin started studying software development, it caught my interest straight away. I've always enjoyed spending time at the computer, and programming became a new outlet for my curiosity and desire to create.",
        ],
      },
      {
        id: "frontend",
        heading: "Why I chose frontend",
        paragraphs: [
          "I studied film in upper secondary school, working on a short film, interviews and editing. I've also edited skateboarding videos and gaming videos from games like Counter-Strike. I enjoy working on the details and seeing the pieces come together into something finished.",
          "That made frontend a natural choice. I like combining problem-solving with being able to see the results of what I'm building. At the same time, I want to understand what happens behind the interface. Backend appeals to my geekier side, and I find the whole journey from a button click to the database interesting.",
        ],
      },
      {
        id: "education",
        heading: "My studies and time at Hitract",
        paragraphs: [
          "I studied frontend development with full-stack skills at EC Utbildning from August 2024 to June 2026. I worked with everything from interfaces and user experience to APIs and databases.",
          "During my internship at Hitract, I worked in a team on a larger codebase built with Next.js, React, TypeScript and Material UI. I built and improved components, tables and other parts of the interface. I also debugged issues and worked through existing logic, which taught me a lot about understanding and building on other people's code.",
          "For my graduation project, I built the booking system Samspel, which received the highest grade. Since then, I've continued developing both Samspel and the darts app Pasd’Art. Personal projects let me try out ideas, deepen my knowledge and solve problems I've experienced myself.",
        ],
      },
      {
        id: "previous-experience",
        heading: "What I bring from my previous job",
        paragraphs: [
          "At Granberg, we sometimes handled large orders with tight deadlines. We had to work together, prioritise and solve problems as they came up to finish on time. I bring that habit of taking responsibility for my part and helping out when needed.",
          "Service work also gave me experience dealing with customers and understanding a problem from someone else's description. That helps me when I'm trying to understand what a user needs.",
          "When creating technical documentation, the images and text needed to form a clear sequence so that someone unfamiliar with the product could still assemble it. I keep the same idea in mind when building interfaces: what's obvious to me as the person who built something isn't necessarily obvious to the person using it.",
        ],
      },
      {
        id: "teamwork",
        heading: "I take the initiative — with people too",
        paragraphs: [
          "I enjoy bringing people together and helping others feel comfortable, both socially and at work. I'm often the one who takes the first step, gets the conversation going and makes sure everyone feels included.",
          "During a group assignment in my studies, many of us were nervous about the work ahead. I naturally took a leading role, brought the group together and helped us get started. We finished the assignment and made it through the course together.",
          "People often tell me I'm easy to talk to and get along with. I'm good at picking up on how others are feeling, and I think good teamwork starts with feeling comfortable asking questions, sharing ideas and saying when you need help. That's the kind of atmosphere I like to contribute to a team.",
        ],
      },
      {
        id: "outside-work",
        heading: "Outside of coding",
        paragraphs: [
          "When I'm away from the computer, I enjoy spending time in nature, travelling and taking photos. I also like playing darts and video games. Sometimes my interests come together, like when darts nights with friends became the starting point for Pasd’Art.",
        ],
      },
    ],
    nextStep: {
      eyebrow: "Next steps",
      heading: "What I'm looking for now",
      paragraphs: [
        "I'm now looking for my first developer role, ideally with a focus on frontend and the chance to keep working with backend too. I want to contribute what I already know, bring my own ideas and learn from colleagues with different experiences.",
        "I like understanding why a solution works, and I'm happy to spend time on the details to get to grips with something new. Wanting to keep learning is what led me to change careers, and it's still a big part of what drives me.",
      ],
      contact: "Get in touch",
      cv: "View my CV",
      cvLabel: "Open my Swedish CV as a PDF in a new tab",
    },
  },
};

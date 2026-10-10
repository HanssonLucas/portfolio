import type { Locale } from "./config";

type HighlightMessages = {
  title: string;
  description: string;
};

type AboutSectionMessages = {
  sectionLabel: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  interests: string;
  imageAlt: string;
  gallery: {
    name: string;
    eyebrow: string;
    triggerLabel: string;
  };
  highlights: {
    structure: HighlightMessages;
    development: HighlightMessages;
    balance: HighlightMessages;
  };
};

export const aboutSectionMessages = {
  sv: {
    sectionLabel: "Om mig",
    eyebrow: "Utvecklare · Projektbyggare · Livsnjutare",
    heading: "Lite mer om mig.",
    introduction:
      "Jag heter Lucas och är frontendutvecklare med fullstackkompetens. Jag gillar att bygga webbapplikationer som är användarvänliga, genomtänkta och faktiskt löser riktiga problem. För mig är det viktigt att funktion, design och struktur hänger ihop.",
    interests:
      "Utöver att utveckla tycker jag om att vara ute i naturen, resa, fotografera och spela dart – intressen som ger mig energi och perspektiv.",
    imageAlt: "Lucas fotograferar vid ett vattenfall.",
    gallery: {
      name: "Genom min kamera",
      eyebrow: "Foto och fritid",
      triggerLabel: "Visa mina foton",
    },
    highlights: {
      structure: {
        title: "Struktur",
        description: "Jag gillar ordning och genomtänkta lösningar.",
      },
      development: {
        title: "Utveckling",
        description: "Alltid nyfiken på att lära mig mer.",
      },
      balance: {
        title: "Balans",
        description: "Teknik, natur och ett aktivt liv.",
      },
    },
  },

  en: {
    sectionLabel: "About me",
    eyebrow: "Developer · Project builder · Enjoying life",
    heading: "A little more about me.",
    introduction:
      "I'm Lucas, a frontend developer with full-stack skills. I enjoy building web applications that are easy to use, thoughtfully designed and solve real problems. To me, functionality, design and structure need to work together.",
    interests:
      "Outside of development, I enjoy spending time in nature, travelling, taking photos and playing darts — interests that give me energy and perspective.",
    imageAlt: "Lucas taking photos by a waterfall.",
    gallery: {
      name: "Through my camera",
      eyebrow: "Photography and free time",
      triggerLabel: "View my photos",
    },
    highlights: {
      structure: {
        title: "Structure",
        description: "I value clear structure and thoughtful solutions.",
      },
      development: {
        title: "Growth",
        description: "Always curious to learn more.",
      },
      balance: {
        title: "Balance",
        description: "Technology, nature and an active life.",
      },
    },
  },
} satisfies Record<Locale, AboutSectionMessages>;

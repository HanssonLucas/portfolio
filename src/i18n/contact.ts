import type { Locale } from "./config";

type ContactMessages = {
  sectionLabel: string;
  heading: string;
  description: string;
  sendEmail: string;
  linkedInLabel: string;
  githubLabel: string;
  availabilityHeading: string;
  availabilityDescription: string;
};

export const contactMessages = {
  sv: {
    sectionLabel: "Hör av dig",
    heading: "Låt oss ta nästa steg.",
    description:
      "Har du ett spännande projekt, en jobbmöjlighet eller bara vill säga hej? Tveka inte att höra av dig!",
    sendEmail: "Skicka ett mejl",
    linkedInLabel: "Lucas Hansson på LinkedIn, öppnas i en ny flik",
    githubLabel: "Lucas Hansson på GitHub, öppnas i en ny flik",
    availabilityHeading: "Öppen för nya möjligheter",
    availabilityDescription:
      "Jag gillar när kod blir något man faktiskt har nytta av, oavsett om det gör en dartkväll enklare eller hjälper en klass att boka handledning. Nu söker jag ett team där jag kan bidra med egna idéer, lära av andra och bygga vidare på den känslan.",
  },

  en: {
    sectionLabel: "Get in touch",
    heading: "Let's take the next step.",
    description:
      "Have an interesting project, a job opportunity or just want to say hello? I'd love to hear from you!",
    sendEmail: "Send me an email",
    linkedInLabel: "Lucas Hansson on LinkedIn, opens in a new tab",
    githubLabel: "Lucas Hansson on GitHub, opens in a new tab",
    availabilityHeading: "Open to new opportunities",
    availabilityDescription:
      "I like turning code into something people actually find useful, whether it makes a darts night easier or helps a class book tutoring sessions. Now I'm looking for a team where I can contribute my own ideas, learn from others and keep building things that make a difference in everyday life.",
  },
} satisfies Record<Locale, ContactMessages>;

import type { Locale } from "./config";

type PhotoId =
  | "lucas-waterfall"
  | "P1290101"
  | "P1290182"
  | "P1290183"
  | "P1290230"
  | "P1290314"
  | "P1300307";

type PhotoMessages = {
  alt: string;
  caption: string;
};

export const photoMessages = {
  sv: {
    "lucas-waterfall": {
      alt: "Lucas fotograferar vid ett vattenfall.",
      caption: "Jag",
    },
    P1290101: {
      alt: "Svartvitt gatufoto med en passerande cyklist framför tre välvda skyltfönster.",
      caption: "Gucci",
    },
    P1290182: {
      alt: "Svartvitt foto av två personer som speglas i en välvd spegel.",
      caption: "Perspektiv",
    },
    P1290183: {
      alt: "Svartvit vy genom ett fönster med människor och gatuliv utanför.",
      caption: "Kafé",
    },
    P1290230: {
      alt: "Svartvitt foto av en upplyst restaurangentré med människor framför.",
      caption: "Italien",
    },
    P1290314: {
      alt: "Svartvit utsikt genom en bilruta över en motorväg omgiven av skog och berg.",
      caption: "På väg",
    },
    P1300307: {
      alt: "Svartvitt foto av en person som badar i en sjö, inramad av träd.",
      caption: "Sommar",
    },
  },

  en: {
    "lucas-waterfall": {
      alt: "Lucas taking photographs by a waterfall.",
      caption: "Me",
    },
    P1290101: {
      alt: "A black-and-white street photograph of a cyclist passing three arched shop windows.",
      caption: "Gucci",
    },
    P1290182: {
      alt: "A black-and-white photograph of two people reflected in a curved mirror.",
      caption: "Perspective",
    },
    P1290183: {
      alt: "A black-and-white view through a window, with people and street life outside.",
      caption: "Cafe",
    },
    P1290230: {
      alt: "A black-and-white photograph of an illuminated restaurant entrance with people outside.",
      caption: "Italy",
    },
    P1290314: {
      alt: "A black-and-white view through a car windscreen of a motorway surrounded by forest and mountains.",
      caption: "On the road",
    },
    P1300307: {
      alt: "A black-and-white photograph of a person swimming in a lake, framed by trees.",
      caption: "Summer",
    },
  },
} satisfies Record<Locale, Record<PhotoId, PhotoMessages>>;

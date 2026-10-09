import type { Locale } from "./config";

type PhotoId =
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
    P1290101: {
      alt: "Svartvitt gatufoto med en passerande cyklist framför tre välvda skyltfönster.",
      caption: "I förbifarten",
    },
    P1290182: {
      alt: "Svartvitt foto av två personer som speglas i en välvd spegel.",
      caption: "Ett annat perspektiv",
    },
    P1290183: {
      alt: "Svartvit vy genom ett fönster med människor och gatuliv utanför.",
      caption: "Livet utanför",
    },
    P1290230: {
      alt: "Svartvitt foto av en upplyst restaurangentré med människor framför.",
      caption: "Ljus i mörkret",
    },
    P1290314: {
      alt: "Svartvit utsikt genom en bilruta över en motorväg omgiven av skog och berg.",
      caption: "På väg",
    },
    P1300307: {
      alt: "Svartvitt foto av en person som badar i en sjö, inramad av träd.",
      caption: "En stund vid sjön",
    },
  },

  en: {
    P1290101: {
      alt: "A black-and-white street photograph of a cyclist passing three arched shop windows.",
      caption: "In passing",
    },
    P1290182: {
      alt: "A black-and-white photograph of two people reflected in a curved mirror.",
      caption: "Another perspective",
    },
    P1290183: {
      alt: "A black-and-white view through a window, with people and street life outside.",
      caption: "Life outside",
    },
    P1290230: {
      alt: "A black-and-white photograph of an illuminated restaurant entrance with people outside.",
      caption: "Light in the dark",
    },
    P1290314: {
      alt: "A black-and-white view through a car windscreen of a motorway surrounded by forest and mountains.",
      caption: "On the road",
    },
    P1300307: {
      alt: "A black-and-white photograph of a person swimming in a lake, framed by trees.",
      caption: "A moment by the lake",
    },
  },
} satisfies Record<Locale, Record<PhotoId, PhotoMessages>>;

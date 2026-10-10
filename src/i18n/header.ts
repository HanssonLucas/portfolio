import type { Locale } from "./config";

type HeaderMessages = {
  home: string;
  projects: string;
  about: string;
  contact: string;
  menu: string;
  close: string;
  openMenu: string;
  closeMenu: string;
  homeLabel: string;
  mainNavigation: string;
  mobileNavigation: string;
  languageNavigation: string;
  cvLabel: string;
};

export const headerMessages: Record<Locale, HeaderMessages> = {
  sv: {
    home: "Hem",
    projects: "Projekt",
    about: "Om mig",
    contact: "Kontakta mig",
    menu: "Meny",
    close: "Stäng",
    openMenu: "Öppna menyn",
    closeMenu: "Stäng menyn",
    homeLabel: "Lucas Hansson – startsida",
    mainNavigation: "Huvudnavigation",
    mobileNavigation: "Mobilnavigation",
    languageNavigation: "Välj språk",
    cvLabel: "Öppna mitt CV på svenska som PDF i en ny flik",
  },
  en: {
    home: "Home",
    projects: "Projects",
    about: "About me",
    contact: "Get in touch",
    menu: "Menu",
    close: "Close",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeLabel: "Lucas Hansson – home",
    mainNavigation: "Main navigation",
    mobileNavigation: "Mobile navigation",
    languageNavigation: "Choose language",
    cvLabel: "Open my CV as a PDF in a new tab",
  },
};

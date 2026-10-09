import type { Locale } from "./config";

type GalleryMessages = {
  projectGallery: string;
  viewImages: string;
  closeGallery: string;
  previousImage: string;
  nextImage: string;
  chooseImage: string;
  image: string;
};

export const galleryMessages = {
  sv: {
    projectGallery: "Projektgalleri",
    viewImages: "Visa bilder",
    closeGallery: "Stäng bildgalleriet",
    previousImage: "Föregående bild",
    nextImage: "Nästa bild",
    chooseImage: "Välj bild",
    image: "Bild",
  },
  en: {
    projectGallery: "Project gallery",
    viewImages: "View images",
    closeGallery: "Close image gallery",
    previousImage: "Previous image",
    nextImage: "Next image",
    chooseImage: "Choose image",
    image: "Image",
  },
} satisfies Record<Locale, GalleryMessages>;

import type { GalleryImage } from "@/components/ui/ImageGallery";
import type { Locale } from "@/i18n/config";
import { photoMessages } from "@/i18n/photos";

const personalPhotos = [
  {
    id: "P1290101",
    src: "/images/about/gallery/P1290101.JPG",
  },
  {
    id: "P1290182",
    src: "/images/about/gallery/P1290182.JPG",
  },
  {
    id: "P1290183",
    src: "/images/about/gallery/P1290183.JPG",
  },
  {
    id: "P1290230",
    src: "/images/about/gallery/P1290230.JPG",
  },
  {
    id: "P1290314",
    src: "/images/about/gallery/P1290314.JPG",
  },
  {
    id: "P1300307",
    src: "/images/about/gallery/P1300307.JPG",
  },
] as const;

export function getPersonalPhotos(locale: Locale): GalleryImage[] {
  return personalPhotos.map((photo) => ({
    src: photo.src,
    ...photoMessages[locale][photo.id],
  }));
}

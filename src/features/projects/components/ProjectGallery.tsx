import type { ReactNode } from "react";
import { ImageGallery, type GalleryImage } from "@/components/ui/ImageGallery";
import type { Locale } from "@/i18n/config";

type ProjectGalleryProps = {
  name: string;
  images: GalleryImage[];
  children: ReactNode;
  locale?: Locale;
};

export function ProjectGallery({
  name,
  images,
  children,
  locale = "sv",
}: ProjectGalleryProps) {
  return (
    <ImageGallery name={name} images={images} locale={locale}>
      {children}
    </ImageGallery>
  );
}

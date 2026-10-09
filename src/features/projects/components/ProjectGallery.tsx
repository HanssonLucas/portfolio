import type { ReactNode } from "react";
import { ImageGallery, type GalleryImage } from "@/components/ui/ImageGallery";

type ProjectGalleryProps = {
  name: string;
  images: GalleryImage[];
  children: ReactNode;
};

export function ProjectGallery({
  name,
  images,
  children,
}: ProjectGalleryProps) {
  return (
    <ImageGallery name={name} images={images}>
      {children}
    </ImageGallery>
  );
}

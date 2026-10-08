"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartedOutside = useRef(false);
  const previousOverflow = useRef<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();

  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    return () => {
      if (previousOverflow.current !== null) {
        document.body.style.overflow = previousOverflow.current;
      }
    };
  }, []);

  function openGallery() {
    if (!images.length || !dialogRef.current) return;

    setActiveIndex(0);
    dialogRef.current.showModal();

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  function handleClose() {
    setActiveIndex(null);

    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  function changeImage(direction: number) {
    setActiveIndex((current) => {
      if (current === null) return current;

      return (current + direction + images.length) % images.length;
    });
  }

  return (
    <>
      <div className="relative">
        {children}

        <button
          type="button"
          onClick={openGallery}
          aria-label={`Visa bilder från ${name}`}
          aria-haspopup="dialog"
          className="group absolute inset-0 cursor-zoom-in rounded-t-2xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent"
        >
          <span className="absolute bottom-4 left-4 rounded-lg border border-accent/20 bg-background/95 px-3 py-2 text-xs font-medium text-accent transition-colors group-hover:bg-surface">
            Visa bilder ↗
          </span>
        </button>
      </div>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={handleClose}
        onPointerDown={(event) => {
          pointerStartedOutside.current = event.target === event.currentTarget;
        }}
        onClick={(event) => {
          if (
            pointerStartedOutside.current &&
            event.target === event.currentTarget
          ) {
            dialogRef.current?.close();
          }

          pointerStartedOutside.current = false;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeImage(-1);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            changeImage(1);
          }
        }}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto border-0 bg-transparent p-4 text-foreground outline-none backdrop:bg-background/90 backdrop:backdrop-blur-md open:flex open:items-center open:justify-center sm:p-8"
      >
        <div className="my-auto w-full max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Projektgalleri
              </p>

              <h2
                id={titleId}
                className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                {name}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Stäng bildgalleriet"
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                className="size-5"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </div>

          {activeImage && activeIndex !== null && (
            <>
              <figure>
                <div className="relative aspect-2/1 sm:aspect-auto sm:h-[min(62svh,44rem)] overflow-hidden rounded-xl border border-accent/20 bg-[#111111] shadow-[0_0_60px_-20px_#65efc425,0_24px_80px_#00000080] sm:rounded-2xl">
                  <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(min-width: 1216px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
                    className="object-contain"
                    loading="eager"
                    unoptimized
                  />
                </div>

                <figcaption
                  aria-live="polite"
                  aria-atomic="true"
                  className="mt-4 text-center text-sm leading-relaxed text-muted"
                >
                  <span className="font-medium text-accent">
                    {activeIndex + 1} / {images.length}
                  </span>
                  <span aria-hidden="true"> · </span>
                  {activeImage.caption}
                </figcaption>
              </figure>

              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => changeImage(-1)}
                  disabled={images.length < 2}
                  aria-label="Föregående bild"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="m14 6-6 6 6 6" />
                  </svg>
                </button>

                <div
                  role="group"
                  aria-label="Välj bild"
                  className="flex flex-wrap justify-center"
                >
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Bild ${index + 1}: ${image.caption}`}
                      aria-current={index === activeIndex ? "true" : undefined}
                      className="group flex size-11 items-center justify-center rounded-full"
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${
                          index === activeIndex
                            ? "w-6 bg-accent"
                            : "w-1.5 bg-muted/40 group-hover:bg-accent/70"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => changeImage(1)}
                  disabled={images.length < 2}
                  aria-label="Nästa bild"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                  >
                    <path d="m10 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}

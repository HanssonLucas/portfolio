"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { galleryMessages } from "@/i18n/gallery";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

type ImageGalleryProps = {
  name: string;
  images: GalleryImage[];
  children: ReactNode;
  locale?: Locale;
  eyebrow?: string;
  triggerLabel?: string;
  variant?: "project" | "photo";
  unoptimized?: boolean;
};

export function ImageGallery({
  name,
  images,
  children,
  locale = "sv",
  eyebrow,
  triggerLabel,
  variant = "project",
  unoptimized = true,
}: ImageGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pointerStartedOutside = useRef(false);
  const previousOverflow = useRef<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const titleId = useId();

  const text = galleryMessages[locale];
  const galleryEyebrow = eyebrow ?? text.projectGallery;
  const galleryTriggerLabel = triggerLabel ?? text.viewImages;
  const activeImage = activeIndex === null ? null : images[activeIndex];

  useEffect(() => {
    return () => {
      if (previousOverflow.current !== null) {
        document.body.style.overflow = previousOverflow.current;
      }
    };
  }, []);

  function openGallery() {
    const dialog = dialogRef.current;

    if (!images.length || !dialog || dialog.open) return;

    setActiveIndex(0);
    pointerStartedOutside.current = false;
    dialog.showModal();

    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }

  function handleClose() {
    setActiveIndex(null);
    pointerStartedOutside.current = false;

    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  function changeImage(direction: number) {
    if (images.length < 2) return;

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
          disabled={!images.length}
          aria-label={`${galleryTriggerLabel} – ${name}`}
          aria-haspopup="dialog"
          className={`group absolute inset-0 cursor-zoom-in focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent ${
            variant === "photo" ? "rounded-2xl" : "rounded-t-2xl"
          }`}
        >
          <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border border-accent/20 bg-background/95 px-3 py-2 text-xs font-medium text-accent transition-colors group-hover:bg-surface">
            {galleryTriggerLabel}

            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
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
        onPointerCancel={() => {
          pointerStartedOutside.current = false;
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
                {galleryEyebrow}
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
              aria-label={text.closeGallery}
              className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <svg
                aria-hidden="true"
                focusable="false"
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
                <div
                  className={`relative overflow-hidden rounded-xl border border-accent/20 bg-[#111111] shadow-[0_0_60px_-20px_#65efc425,0_24px_80px_#00000080] sm:rounded-2xl ${
                    variant === "photo"
                      ? "aspect-video max-h-[62svh] sm:aspect-auto sm:h-[min(62svh,44rem)]"
                      : "aspect-2/1 sm:aspect-auto sm:h-[min(62svh,44rem)]"
                  }`}
                >
                  <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="(min-width: 1216px) 1152px, (min-width: 640px) calc(100vw - 64px), calc(100vw - 32px)"
                    className="object-contain"
                    loading="eager"
                    unoptimized={unoptimized}
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

              <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => changeImage(-1)}
                  disabled={images.length < 2}
                  aria-label={text.previousImage}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
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
                  aria-label={text.chooseImage}
                  className="flex min-w-0 flex-wrap justify-center"
                >
                  {images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`${text.image} ${index + 1}: ${image.caption}`}
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
                  aria-label={text.nextImage}
                  className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-accent/50 hover:text-accent disabled:opacity-40"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
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

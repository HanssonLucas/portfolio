import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { getPersonalPhotos } from "@/features/about/data/photos";
import type { Locale } from "@/i18n/config";
import { aboutSectionMessages } from "@/i18n/aboutSection";
import lucasPhoto from "../../../../public/images/about/lucas-waterfall.jpg";

const highlights = [
  {
    id: "structure",
    iconPath: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
  },
  {
    id: "development",
    iconPath: "m8 7-5 5 5 5 M16 7l5 5-5 5 M14 4l-4 16",
  },
  {
    id: "balance",
    iconPath: "M12 3v18 M5 7h14 M5 7l-3 7h6L5 7Z M19 7l-3 7h6l-3-7Z M8 21h8",
  },
] as const;

type AboutSectionProps = {
  locale?: Locale;
};

export function AboutSection({ locale = "sv" }: AboutSectionProps) {
  const text = aboutSectionMessages[locale];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-glow section-glow-right scroll-mt-28 border-t border-border/50 bg-background py-16 sm:py-24"
    >
      <PageContainer>
        <div className="flex items-center gap-4">
          <span className="flex size-7 items-center justify-center rounded-lg border border-border text-xs text-accent">
            02
          </span>

          <p className="text-sm font-medium uppercase tracking-widest">
            {text.sectionLabel}
          </p>

          <span aria-hidden="true" className="h-px w-16 bg-border" />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
          <div className="relative isolate mx-auto w-full max-w-lg lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-y-2 -rotate-3 rounded-2xl border border-accent/25 bg-surface"
            />

            <ImageGallery
              name={text.gallery.name}
              images={getPersonalPhotos(locale)}
              locale={locale}
              eyebrow={text.gallery.eyebrow}
              triggerLabel={text.gallery.triggerLabel}
              variant="photo"
              unoptimized={false}
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
                <Image
                  src={lucasPhoto}
                  alt={text.imageAlt}
                  fill
                  sizes="(min-width: 1152px) 475px, (min-width: 1024px) 42vw, (min-width: 640px) 512px, 100vw"
                  className="object-cover"
                />
              </div>
            </ImageGallery>
          </div>

          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-accent"
              />
              {text.eyebrow}
            </p>

            <h2
              id="about-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              {text.heading}
            </h2>

            <p className="mt-5 leading-relaxed text-muted">
              {text.introduction}
            </p>

            <p className="mt-4 leading-relaxed text-muted">{text.interests}</p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight.id}
                  className="grid grid-cols-[2rem_minmax(0,1fr)] content-start items-start gap-x-3 gap-y-2"
                >
                  <dt className="col-span-2 grid grid-cols-subgrid items-center">
                    <span
                      aria-hidden="true"
                      className="flex size-8 items-center justify-center rounded-full border border-accent/60 text-accent"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-4"
                      >
                        <path d={highlight.iconPath} />
                      </svg>
                    </span>

                    <span className="font-medium text-foreground">
                      {text.highlights[highlight.id].title}
                    </span>
                  </dt>

                  <dd className="col-start-2 text-sm leading-relaxed text-muted">
                    {text.highlights[highlight.id].description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

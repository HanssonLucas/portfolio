import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import heroMountains from "../../../../public/images/hero/hero-mountains.png";
import { HeroProjectPreview } from "./HeroProjectPreview";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex flex-1 items-center overflow-hidden py-16 sm:py-24"
    >
      <div className={styles.landscape} aria-hidden="true">
        <Image
          src={heroMountains}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          className={styles.mountains}
          unoptimized
        />
      </div>

      <PageContainer>
        <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Frontendutvecklare · Fullstackkompetens
            </p>

            <h1
              id="hero-heading"
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl"
            >
              Jag bygger webbapplikationer med fokus på{" "}
              <span className="text-accent">funktion och upplevelse.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Jag heter Lucas och är frontendutvecklare med fullstackkompetens.
              Här visar jag projekt jag byggt, erfarenheter jag fått och hur jag
              arbetar med modern webbutveckling.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:lucas.hansson9@gmail.com"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Kontakta mig
              </a>
            </div>
          </div>

          <div className="relative isolate min-w-0">
            <div className={styles.glow} aria-hidden="true" />
            <HeroProjectPreview />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

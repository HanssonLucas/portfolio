import { PageContainer } from "@/components/layout/PageContainer";
import { HeroProjectPreview } from "./HeroProjectPreview";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex flex-1 items-center py-16 sm:py-24"
    >
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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
          </div>

          <div className="min-w-0">
            <HeroProjectPreview />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

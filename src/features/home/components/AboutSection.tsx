import { PageContainer } from "@/components/layout/PageContainer";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-8 border-t border-border/50 bg-background py-16 sm:py-24"
    >
      <PageContainer>
        <div className="flex items-center gap-4">
          <span className="flex size-7 items-center justify-center rounded-lg border border-border text-xs text-accent">
            02
          </span>

          <p className="text-sm font-medium uppercase tracking-widest">
            Om mig
          </p>

          <span aria-hidden="true" className="h-px w-16 bg-border" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2
            id="about-heading"
            className="text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Lite mer om mig.
          </h2>

          <p className="mt-5 leading-relaxed text-muted">
            Jag heter Lucas och är frontendutvecklare med fullstackkompetens.
            Jag har avslutat min tvååriga utbildning på EC Utbildning och söker
            nu mitt första jobb som utvecklare.
          </p>

          <p className="mt-4 leading-relaxed text-muted">
            Under min LIA på Hitract arbetade jag med Next.js och MUI. I mina
            egna projekt fortsätter jag att utveckla mina kunskaper inom både
            frontend och backend.
          </p>
        </div>
      </PageContainer>
    </section>
  );
}

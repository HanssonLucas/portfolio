import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { aboutSections } from "../data/about";
import lucasPhoto from "../../../../public/images/about/lucas-waterfall.jpg";

export function AboutPageContent() {
  return (
    <main className="relative isolate flex-1 overflow-clip pb-20 pt-10 sm:pb-28 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-160 bg-[radial-gradient(ellipse_at_top_right,#65efc410,transparent_65%)]"
      />

      <PageContainer>
        <Link
          href="/#about"
          className="inline-flex min-h-11 items-center gap-2 rounded text-sm text-muted transition-colors hover:text-accent"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M19 12H5m5-5-5 5 5 5" />
          </svg>
          Tillbaka till startsidan
        </Link>

        <header className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-accent">
              Min bakgrund
            </p>

            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Jag vill förstå hur saker fungerar — och{" "}
              <span className="text-accent">se vad jag kan skapa.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Jag heter Lucas Hansson och är frontendutvecklare med
              fullstackkompetens. Min väg hit började med montering, service och
              teknisk dokumentation. Intresset för att skapa saker har däremot
              funnits länge, från film och videoredigering till de
              webbapplikationer jag bygger idag.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rotate-3 rounded-2xl border border-accent/25"
            />

            <Image
              src={lucasPhoto}
              alt="Lucas fotograferar vid ett vattenfall."
              className="aspect-4/3 w-full rounded-2xl border border-border object-cover"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 448px, calc(100vw - 48px)"
              loading="eager"
            />
          </div>
        </header>

        <div className="mt-16 space-y-6 sm:mt-24">
          {aboutSections.map((section, index) => (
            <section
              key={section.id}
              aria-labelledby={`about-${section.id}`}
              className={`grid gap-6 rounded-2xl border p-6 sm:p-8 lg:grid-cols-[1fr_2fr] lg:gap-12 lg:p-10 ${
                section.id === "teamwork"
                  ? "border-accent/30 bg-[linear-gradient(135deg,#65efc40d,#0d1b16)]"
                  : "border-border/70 bg-surface/50"
              }`}
            >
              <div>
                <span
                  aria-hidden="true"
                  className="inline-flex size-9 items-center justify-center rounded-xl border border-accent/20 bg-accent/5 font-mono text-xs text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2
                  id={`about-${section.id}`}
                  className="mt-4 text-xl font-semibold leading-snug tracking-tight sm:text-2xl"
                >
                  {section.heading}
                </h2>
              </div>

              <div className="max-w-2xl space-y-4 text-base leading-7 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section
          aria-labelledby="about-next-step"
          className="mt-12 rounded-2xl border border-accent/25 bg-surface p-6 sm:mt-16 sm:p-10"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Nästa steg
          </p>

          <h2
            id="about-next-step"
            className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Det jag söker nu
          </h2>

          <div className="mt-5 max-w-2xl space-y-4 text-base leading-7 text-muted">
            <p>
              Nu söker jag min första utvecklarroll, gärna med fokus på frontend
              och möjlighet att fortsätta arbeta med backend. Jag vill bidra med
              det jag redan kan, komma med egna idéer och lära mig av kollegor
              med andra erfarenheter.
            </p>

            <p>
              Jag tycker om att förstå varför en lösning fungerar och kan gärna
              fastna i detaljer för att få grepp om något nytt. Det var viljan
              att fortsätta lära mig som fick mig att byta yrke, och den är
              fortfarande en stor del av det som driver mig.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="mailto:lucas.hansson9@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Hör av dig
            </a>

            <a
              href="/documents/lucas-hansson-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Öppna mitt CV som PDF i en ny flik"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-accent/30 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/5"
            >
              Öppna mitt CV
            </a>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

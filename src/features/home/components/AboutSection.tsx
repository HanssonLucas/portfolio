import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import lucasPhoto from "../../../../public/images/about/lucas-waterfall.jpg";

const highlights = [
  {
    title: "Struktur",
    description: "Jag gillar ordning och genomtänkta lösningar.",
  },
  {
    title: "Utveckling",
    description: "Alltid nyfiken på att lära mig mer.",
  },
  {
    title: "Balans",
    description: "Teknik, natur och ett aktivt liv.",
  },
];

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

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-12">
          <div className="relative isolate mx-auto w-full max-w-lg lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 translate-y-2 -rotate-3 rounded-2xl border border-accent/25 bg-surface"
            />

            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
              <Image
                src={lucasPhoto}
                alt="Lucas fotograferar vid ett vattenfall."
                fill
                sizes="(min-width: 1152px) 475px, (min-width: 1024px) 42vw, (min-width: 640px) 512px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-accent">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-accent"
              />
              Utvecklare · Projektbyggare · Livsnjutare
            </p>

            <h2
              id="about-heading"
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Lite mer om mig.
            </h2>

            <p className="mt-5 leading-relaxed text-muted">
              Jag heter Lucas och är frontendutvecklare med fullstackkompetens.
              Jag gillar att bygga webbapplikationer som är användarvänliga,
              genomtänkta och faktiskt löser riktiga problem. För mig är det
              viktigt att funktion, design och struktur hänger ihop.
            </p>

            <p className="mt-4 leading-relaxed text-muted">
              Utöver att utveckla tycker jag om att vara ute i naturen, resa,
              fotografera och spela dart – intressen som ger mig energi och
              perspektiv.
            </p>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title}>
                  <dt className="font-medium text-foreground">
                    {highlight.title}
                  </dt>

                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {highlight.description}
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

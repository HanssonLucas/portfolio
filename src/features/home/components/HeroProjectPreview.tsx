import Image from "next/image";
import pasdartPreview from "../../../../public/images/projects/pasdart/pasdart-hero.png";

export function HeroProjectPreview() {
  return (
    <figure className="mx-auto w-full min-w-0 max-w-xl">
      <div className="rounded-2xl border border-accent/20 bg-surface p-2 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] sm:p-3">
        <div className="overflow-hidden rounded-xl border border-border">
          <Image
            src={pasdartPreview}
            alt="Pasdarts cupvy med semifinaler, final och matchresultat."
            className="block h-auto w-full"
            sizes="(min-width: 1152px) 504px, (min-width: 1024px) 44vw, (min-width: 640px) 552px, 100vw"
            loading="eager"
            unoptimized
          />
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="font-medium text-foreground">Pasdart</span>
        <span className="text-muted">Under utveckling</span>
      </figcaption>
    </figure>
  );
}

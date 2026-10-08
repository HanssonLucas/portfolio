import Image from "next/image";
import pasdartPlayoffs from "../../../../public/images/projects/pasdart/pasdart-playoffs.png";

export function HeroProjectPreview() {
  return (
    <figure className="mx-auto w-full max-w-xl min-w-0">
      <div className="overflow-hidden rounded-xl border border-border bg-surface">
        <Image
          src={pasdartPlayoffs}
          alt="Pasdarts slutspelsvy med semifinaler, final och matchresultat."
          className="h-auto w-full"
          sizes="(min-width: 1152px) 528px, (min-width: 1024px) calc(50vw - 48px), (min-width: 640px) 576px, calc(100vw - 48px)"
          loading="eager"
        />
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="font-medium text-foreground">Pasdart</span>
        <span className="text-muted">Under utveckling</span>
      </figcaption>
    </figure>
  );
}

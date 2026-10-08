import Image from "next/image";
import pasdartLaptop from "../../../../public/images/hero/pasdart-laptop-balanced.png";

export function HeroProjectPreview() {
  return (
    <figure className="mx-auto w-full min-w-0 max-w-xl lg:max-w-125">
      <Image
        src={pasdartLaptop}
        alt="Pasdart visat på en laptop, med semifinaler, final och matchresultat."
        className="block h-auto w-full"
        sizes="(min-width: 1024px) 500px, (min-width: 640px) 576px, 100vw"
        loading="eager"
        unoptimized
      />

      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-2 text-sm">
        <span className="font-medium text-foreground">Pasdart</span>
        <span className="text-muted">Under utveckling</span>
      </figcaption>
    </figure>
  );
}

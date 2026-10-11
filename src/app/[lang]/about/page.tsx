import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutPageContent } from "@/features/about/components/AboutPageContent";
import { isLocale } from "@/i18n/config";
import { aboutMessages } from "@/i18n/about";

type AboutPageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const { title, description } = aboutMessages[lang].metadata;

  const sharingImage = {
    url: "/images/og/portfolio-og.png",
    alt: "Lucas Hansson – Frontend Developer · Full-stack skills",
  };

  return {
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Lucas Hansson",
      locale: lang === "sv" ? "sv_SE" : "en_GB",
      url: `/${lang}/about`,
      title,
      description,
      images: [sharingImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [sharingImage],
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <AboutPageContent locale={lang} />;
}

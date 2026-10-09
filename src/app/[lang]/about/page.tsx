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

  return {
    title: aboutMessages[lang].metadata.title,
    description: aboutMessages[lang].metadata.description,
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return <AboutPageContent locale={lang} />;
}

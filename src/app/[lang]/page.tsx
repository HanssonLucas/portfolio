import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { AboutSection } from "@/features/home/components/AboutSection";
import { FeaturedProjectsSection } from "@/features/home/components/FeaturedProjectsSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ExperienceSection } from "@/features/home/components/ExperienceSection";
import { HomeBackdrop } from "@/features/home/components/HomeBackdrop";
import { ContactSection } from "@/features/home/components/ContactSection";

type HomePageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col">
      <HeroSection locale={lang} />
      <FeaturedProjectsSection locale={lang} />
      <AboutSection locale={lang} />
      <HomeBackdrop>
        <ExperienceSection locale={lang} />
        <ContactSection />
      </HomeBackdrop>
    </main>
  );
}

import { AboutSection } from "@/features/home/components/AboutSection";
import { FeaturedProjectsSection } from "@/features/home/components/FeaturedProjectsSection";
import { HeroSection } from "@/features/home/components/HeroSection";
import { ExperienceSection } from "@/features/home/components/ExperienceSection";
import { HomeBackdrop } from "@/features/home/components/HomeBackdrop";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <FeaturedProjectsSection />
      <AboutSection />
      <HomeBackdrop>
        <ExperienceSection />
      </HomeBackdrop>
    </main>
  );
}

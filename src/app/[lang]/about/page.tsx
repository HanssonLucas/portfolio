import type { Metadata } from "next";
import { AboutPageContent } from "@/features/about/components/AboutPageContent";

export const metadata: Metadata = {
  title: "Om mig | Lucas Hansson",
  description:
    "Min väg från montering och filmredigering till frontendutveckling. Läs om min bakgrund, utbildning och hur jag fungerar i ett team.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}

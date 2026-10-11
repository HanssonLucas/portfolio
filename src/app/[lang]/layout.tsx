import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/layout/AppHeader";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: RootLayoutProps): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const title =
    lang === "sv"
      ? "Lucas Hansson | Frontendutvecklare"
      : "Lucas Hansson | Frontend Developer";

  const description =
    lang === "sv"
      ? "Frontendutvecklare med fullstackkompetens. Utforska mina projekt och lär känna mig."
      : "Frontend developer with full-stack skills. Explore my projects and get to know me.";

  const sharingImage = {
    url: "/images/og/portfolio-og.png",
    alt: "Lucas Hansson – Frontend Developer · Full-stack skills",
  };

  return {
    metadataBase: new URL("https://lucas-hansson.vercel.app"),
    title,
    description,
    openGraph: {
      type: "website",
      siteName: "Lucas Hansson",
      locale: lang === "sv" ? "sv_SE" : "en_GB",
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

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AppHeader locale={lang} />
        {children}
      </body>
    </html>
  );
}

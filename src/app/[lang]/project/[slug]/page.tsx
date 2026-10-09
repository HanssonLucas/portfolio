import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetails } from "@/features/projects/components/ProjectDetails";
import { projects } from "@/features/projects/data/projects";
import { isLocale } from "@/i18n/config";
import { projectDetailsMessages } from "@/i18n/projectDetails";

type ProjectPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense
      fallback={
        <Suspense fallback={null}>
          <ProjectLoading params={params} />
        </Suspense>
      }
    >
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} locale={lang} />;
}

async function ProjectLoading({ params }: ProjectPageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return null;
  }

  const text = projectDetailsMessages[lang];

  return (
    <main className="flex-1 py-16">
      <PageContainer>
        <p role="status" className="text-sm text-muted">
          {text.loading}
        </p>
      </PageContainer>
    </main>
  );
}

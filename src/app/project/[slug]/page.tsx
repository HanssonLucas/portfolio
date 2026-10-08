import { Suspense } from "react";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProjectDetails } from "@/features/projects/components/ProjectDetails";
import { projects } from "@/features/projects/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <Suspense fallback={<ProjectLoading />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

async function ProjectContent({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

function ProjectLoading() {
  return (
    <main className="flex-1 py-16">
      <PageContainer>
        <p role="status" className="text-sm text-muted">
          Laddar projektet…
        </p>
      </PageContainer>
    </main>
  );
}

import { notFound } from "next/navigation";
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((project) => project.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

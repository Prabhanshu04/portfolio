import { notFound } from "next/navigation";
import { ProjectSpread } from "@/components/project-spread";
import { SpreadDialog } from "@/components/spread-dialog";
import { getProject, projects } from "@/content/projects";
import { pad } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <SpreadDialog label={`Work / ${pad(project.number)}`} title={project.title}>
      <ProjectSpread project={project} inModal />
    </SpreadDialog>
  );
}

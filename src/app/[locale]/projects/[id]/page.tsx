import ProjectDetailContent from "@/components/projects/ProjectDetailContent";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import { PROJECT_SLUGS, getProjectBySlug } from "@/types/index";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECT_SLUGS.map((id) => ({ locale, id })),
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

  const project = getProjectBySlug(id);
  if (!project) notFound();

  return (
    <main className="flex flex-col gap-0">
      <ProjectDetailHero project={project} />
      <ProjectDetailContent project={project} />
    </main>
  );
}

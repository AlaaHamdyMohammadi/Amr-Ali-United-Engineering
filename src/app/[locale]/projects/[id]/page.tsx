import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { PROJECT_TYPE_KEYS, isProjectTypeKey } from "@/data/projects";
import ProjectDetailHero from "@/components/projects/ProjectDetailHero";
import ProjectDetailContent from "@/components/projects/ProjectDetailContent";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    PROJECT_TYPE_KEYS.map((id) => ({ locale, id })),
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

  if (!isProjectTypeKey(id)) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-0">
      <ProjectDetailHero id={id} />
      <ProjectDetailContent id={id} />
    </main>
  );
}

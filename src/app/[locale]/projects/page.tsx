import ProjectContent from "@/components/projects/ProjectContent";
import ProjectHero from "@/components/projects/ProjectHero";
import { Suspense } from "react";


export default function ProjectsPage() {
  return (
    <main className="flex flex-col gap-0">
      <ProjectHero />
      <Suspense>
        <ProjectContent />
      </Suspense>
    </main>
  );
}

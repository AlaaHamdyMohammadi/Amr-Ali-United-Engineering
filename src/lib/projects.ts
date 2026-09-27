import type { StaticImageData } from "next/image";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import apartmants from "@/assets/apartmants.png";
import villas from "@/assets/villas.png";

export const PROJECTS_IDS = ["buildings", "interiors", "apartmants", "villas"] as const;
export type ProjectId = (typeof PROJECTS_IDS)[number];

export function isProjectId(value: string): value is ProjectId {
  return (PROJECTS_IDS as readonly string[]).includes(value);
}

// Reusing the same photos as the listing page's cards for now — swap in a
// dedicated hero/detail image per project once you have one.
export const projectsImages: Record<ProjectId, StaticImageData> = {
  buildings: buildings,
  interiors: interiors,
  apartmants: apartmants,
  villas: villas,
};

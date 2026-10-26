import type { FilterKey, Locale, ProjectItem } from "./projects";

import { fishFarmFoundations } from "./project-one";
import { shrimpFishingBuilding } from "./project-two";
import { diceClothingStores } from "./project-three";
import { healthyPharmacies } from "./project-four";
import { concreteFishFarms } from "./project-five";
import { centralLabs } from "./project-six";
import { borderGuardBuildings } from "./project-seven";

export * from "./projects";

export const projects: ProjectItem[] = [
  fishFarmFoundations,
  shrimpFishingBuilding,
  diceClothingStores,
  healthyPharmacies,
  concreteFishFarms,
  centralLabs,
  borderGuardBuildings,
];

/**
 * Unique filter options for a field. `value` is always the English string
 * (stable across languages), `label` is shown in the current locale.
 */
export function getFilterOptions(key: FilterKey, locale: Locale) {
  const seen = new Map<string, string>();
  for (const p of projects) {
    const v = p[key];
    if (!seen.has(v.en)) seen.set(v.en, v[locale]);
  }
  return Array.from(seen, ([value, label]) => ({ value, label }));
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const PROJECT_SLUGS = projects.map((p) => p.slug);

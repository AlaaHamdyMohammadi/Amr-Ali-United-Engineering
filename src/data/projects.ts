export type ProjectTypeKey =
  | "buildings"
  | "interiors"
  | "apartments"
  | "villas";

export interface ProjectItem {
  id: string;
  typeKey: ProjectTypeKey;
  sector: string;
  section: string;
  location: string;
  year: string;
  status: "Completed" | "Ongoing";
}

const sectors = [
  "Residential Development",
  "Commercial & Administrative",
  "Industrial & Logistics",
];
const locations = [
  "5th Settlement - Cairo",
  "New Cairo",
  "Sheikh Zayed",
  "Alexandria",
];
const years = ["2019 - 2020", "2021 - 2022", "2023 - 2024"];
const statuses: ProjectItem["status"][] = ["Completed", "Ongoing"];
const sectionByType: Record<ProjectTypeKey, string> = {
  buildings: "Buildings",
  interiors: "Home Interiors",
  apartments: "Apartments",
  villas: "Villas",
};

const typeKeys: ProjectTypeKey[] = [
  "buildings",
  "interiors",
  "apartments",
  "villas",
];

// Deterministic mock generation — same output every render/build, so there's
// no server/client hydration mismatch from random values.
export const projects: ProjectItem[] = Array.from({ length: 32 }, (_, i) => {
  const typeKey = typeKeys[i % typeKeys.length];
  return {
    id: `project-${i + 1}`,
    typeKey,
    sector: sectors[i % sectors.length],
    section: sectionByType[typeKey],
    location: locations[i % locations.length],
    year: years[i % years.length],
    status: statuses[i % statuses.length],
  };
});

export function getUniqueValues<K extends keyof ProjectItem>(key: K) {
  return Array.from(new Set(projects.map((p) => p[key])));
}

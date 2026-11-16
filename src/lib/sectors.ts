import type { StaticImageData } from "next/image";
import sector1 from "@/assets/sector1.png";
import sector2 from "@/assets/sector2.png";
import sector3 from "@/assets/sector3.png";

export const SECTOR_IDS = ["residential", "commercial", "industrial"] as const;
export type SectorId = (typeof SECTOR_IDS)[number];

export function isSectorId(value: string): value is SectorId {
  return (SECTOR_IDS as readonly string[]).includes(value);
}

// Reusing the same photos as the listing page's cards for now — swap in a
// dedicated hero/detail image per sector once you have one.
export const sectorImages: Record<SectorId, StaticImageData> = {
  residential: sector1,
  commercial: sector2,
  industrial: sector3,
};

export const SECTOR_SECTIONS = {
  residential: [
    "residentialFinishing",
    "luxuryComplexes",
    "residentialUnits",
    "homeSystems",
  ],
  commercial: ["offices", "workspaces", "commercial", "premium"],
  industrial: ["factories", "lines", "infrastructure", "laboratories"],
} as const satisfies Record<SectorId, readonly string[]>;

export type SectionKey = (typeof SECTOR_SECTIONS)[SectorId][number];

export function isSectionKey(value: string): value is SectionKey {
  return SECTOR_IDS.some((id) =>
    (SECTOR_SECTIONS[id] as readonly string[]).includes(value),
  );
}

// Which sector a section belongs to (every section key is unique across sectors)
export function sectorIdOfSection(key: SectionKey): SectorId {
  return SECTOR_IDS.find((id) =>
    (SECTOR_SECTIONS[id] as readonly string[]).includes(key),
  )!;
}

// Widened return type so .map() works instead of failing on a union of tuples
export function sectionsOf(id: SectorId): readonly SectionKey[] {
  return SECTOR_SECTIONS[id];
}
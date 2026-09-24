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

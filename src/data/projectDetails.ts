import aboutUSSection from "@/assets/aboutUSSection.jpg";
import apartmants from "@/assets/apartmants.png";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import sector1 from "@/assets/sector1.png";
import sector2 from "@/assets/sector2.png";
import sector3 from "@/assets/sector3.png";
import villas from "@/assets/villas.png";
import type { ProjectTypeKey } from "./projects-test";

export const projectGalleries: Record<ProjectTypeKey, string[]> = {
  buildings: [
    buildings.src,
    interiors.src,
    apartmants.src,
    villas.src,
    sector1.src,
    sector2.src,
    sector3.src,
    aboutUSSection.src,
  ],
  interiors: [interiors.src, buildings.src, aboutUSSection.src, sector2.src],
  apartments: [apartmants.src, sector3.src, buildings.src, interiors.src],
  villas: [villas.src, buildings.src, sector1.src, aboutUSSection.src],
};

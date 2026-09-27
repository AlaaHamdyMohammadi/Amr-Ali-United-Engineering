import type { ProjectTypeKey } from "./projects";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import apartmants from "@/assets/apartmants.png";
import villas from "@/assets/villas.png";
import sector1 from "@/assets/sector1.png";
import sector2 from "@/assets/sector2.png";
import sector3 from "@/assets/sector3.png";
import aboutUSSection from "@/assets/aboutUSSection.jpg";

// Reusing existing assets to populate each gallery for now, since there's
// no backend/CMS yet — swap in real per-project photography later. Order
// matters: index 0-2 render as the small stacked thumbnails, index 3 is
// the large image, anything beyond index 3 only shows up in the lightbox
// once someone clicks the "+N image" overlay.
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

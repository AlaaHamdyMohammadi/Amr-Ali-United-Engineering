
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { sectorImages, type SectorId } from "@/lib/sectors";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import SectorDetailIntro from "./SectorDetailIntro";
import SectorsGrid from "./SectorsGrid";

const SECTION_KEYS = [
  "buildings",
  "homeInteriors",
  "apartments",
  "villas1",
  "villas2",
  "villas3",
] as const;

export default async function SectorDetailContent({
  sectorId,
}: {
  sectorId: SectorId;
}) {
  const t = await getTranslations("sectors");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const points = t.raw(`items.${sectorId}.points`) as string[];

  return (
    <section className="section bg-mist-50">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>
      <div className="container-page flex flex-col gap-12 pt-10 pb-20">
        <SectorDetailIntro
          body={t(`items.${sectorId}.body`)}
          body1={t(`items.${sectorId}.body1`)}
          body2={t(`items.${sectorId}.body2`)}
          points={points}
          image={sectorImages[sectorId]}
        />

        <SectorsGrid
          sectionsTitle={t("sectionsTitle")}
          sections={SECTION_KEYS.map((key) => ({
            key,
            label: t(`sections.${key}`),
          }))}
          seeProjects={t("seeProjects")}
          isRtl={isRtl}
        />
      </div>
    </section>
  );
}

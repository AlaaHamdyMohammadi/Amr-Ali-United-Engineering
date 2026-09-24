import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { sectorImages, type SectorId } from "@/lib/sectors";
import { ArrowRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";

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
  const t = await getTranslations("sectorPage");
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const points = t.raw(`items.${sectorId}.points`) as string[];

  return (
    <section className="section bg-mist-50">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>
      <div className="container-page flex flex-col gap-12 pt-10 pb-20">
        <div className="flex flex-col sm:flex-row gap-30 items-center">
          <div className="flex flex-col gap-10 max-w-255">
            <p className="text-lg text-heading font-medium">
              {t(`items.${sectorId}.body`)}
            </p>

            <ul className="flex flex-col gap-1.5">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-lg text-heading font-medium"
                >
                  <span className="size-1 shrink-0  bg-heading" />
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-lg text-heading font-medium">
              {t(`items.${sectorId}.body1`)}
            </p>
            <p className="text-lg text-heading font-medium">
              {t(`items.${sectorId}.body2`)}
            </p>

            <span className="h-0.75 w-23 rounded-full bg-clay-500" />
          </div>

          <Image
            src={sectorImages[sectorId]}
            alt=""
            className="object-cover w-[683px] h-[391px] rounded-3xl"
          />
        </div>

        <div className="flex flex-col gap-12">
          <h2 className="text-[48px] font-semibold text-navy-650">
            {t("sectionsTitle")}
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SECTION_KEYS.map((key) => (
              <div
                key={key}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-[#EBEBEB] bg-white p-6 transition-colors duration-200 hover:border-[#FEDBB2] hover:bg-[#F5F5F5] shadow-black/6"
              >
                {/* Orange accent strip — hidden at rest, slides in on hover only */}
                <span
                  aria-hidden
                  className="absolute inset-y-0 start-0 w-5 origin-top scale-y-0 bg-clay-500 transition-transform duration-200 group-hover:scale-y-100"
                />

                <span className="text-2xl font-bold text-navy-750">
                  {t(`sections.${key}`)}
                </span>
                <a
                  href="/projects"
                  className="flex shrink-0 items-center gap-1.5 font-semibold text-clay-600 self-end"
                >
                  {t("seeProjects")}
                  <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

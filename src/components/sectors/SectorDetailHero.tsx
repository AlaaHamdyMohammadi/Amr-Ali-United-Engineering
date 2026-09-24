import { sectorImages, type SectorId } from "@/lib/sectors";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function SectorDetailHero({
  sectorId,
}: {
  sectorId: SectorId;
}) {
  const t = await getTranslations("sectorPage.items");

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={sectorImages[sectorId]}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55"
      />

      <div className="container-page relative flex min-h-[320px] flex-col justify-end pb-10 pt-36 lg:min-h-[460px]">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          {t(`${sectorId}.title`)}
        </h1>
      </div>
    </section>
  );
}

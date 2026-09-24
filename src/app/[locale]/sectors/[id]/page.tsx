
import SectorDetailContent from "@/components/sectors/SectorDetailContent";
import SectorDetailHero from "@/components/sectors/SectorDetailHero";
import { routing } from "@/i18n/routing";
import { SECTOR_IDS, isSectorId } from "@/lib/sectors";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    SECTOR_IDS.map((id) => ({ locale, id })),
  );
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

  if (!isSectorId(id)) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-0">
      <SectorDetailHero sectorId={id} />
      <SectorDetailContent sectorId={id} />
    </main>
  );
}

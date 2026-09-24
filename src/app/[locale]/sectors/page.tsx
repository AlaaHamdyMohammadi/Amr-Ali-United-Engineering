import SectorContent from "@/components/sectors/SectorContent";
import SectorHero from "@/components/sectors/SectorHero";

export default function SectorPage() {
  return (
    <main className="flex flex-col gap-0">
      <SectorHero />
      <SectorContent />
    </main>
  );
}

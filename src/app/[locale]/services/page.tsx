import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-0">
      <ServicesHero />
      <ServicesGrid />
    </main>
  );
}

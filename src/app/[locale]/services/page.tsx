import ServiceHero from "@/components/services/ServiceHero";
import ServiceTabs from "@/components/services/ServiceTabs";

export default function ServicesPage() {
  return (
    <main className="flex flex-col gap-0">
      <ServiceHero />
      <ServiceTabs />
    </main>
  );
}

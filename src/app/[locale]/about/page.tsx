import AboutHero from "@/components/about/AboutHero";
import AboutTabs from "@/components/about/AboutTabs";

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-0">
      <AboutHero />
      <AboutTabs />
    </main>
  );
}

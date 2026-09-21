import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Sectors from "@/components/home/Sectors";
import Stats from "@/components/home/Stats";
import Projects from "@/components/home/Projects";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    // gap (not margin) is what separates sections — change this one value
    // to add breathing room everywhere, instead of editing each section.
    <main className="flex flex-col gap-0">
      <Hero />
      <About />
      <Sectors />
      <Stats />
      <Projects />
      <Testimonials />
    </main>
  );
}

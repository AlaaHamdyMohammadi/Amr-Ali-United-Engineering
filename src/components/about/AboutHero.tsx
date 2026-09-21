import Image from "next/image";
import Header from "@/components/layout/Header";
import aboutHeroImg from "@/assets/aboutImg.png";

export default function AboutHero() {
  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Header />

      <Image
        src={aboutHeroImg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-content"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/55"
      />

      <div className="container-page relative flex min-h-[320px] flex-col justify-end pb-10 pt-36 lg:min-h-[360px]">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          About Us
        </h1>
      </div>
    </section>
  );
}

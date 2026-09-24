import Image from "next/image";
import { useTranslations } from "next-intl";
import Header from "@/components/layout/Header";
import servicesHeroImg from "@/assets/servicesImg.png";

export default function ServicesHero() {
  const t = useTranslations("servicesPage");

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Header />

      <Image
        src={servicesHeroImg}
        alt=""
        fill
        priority
        sizes="100vw"
        // className="object-cover"
      />

      {/* Teal tint instead of the plain dark gradient used on About —
          the source photo is already teal, this just deepens it for contrast. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,60,64,0.55) 0%, rgba(6,60,64,0.15) 45%, rgba(6,20,24,0.75) 100%)",
        }}
      />

      <div className="container-page relative flex min-h-[320px] flex-col justify-end pb-10 pt-36 lg:min-h-[460px]">
        <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl">
          {t("heroTitle")}
        </h1>
      </div>
    </section>
  );
}

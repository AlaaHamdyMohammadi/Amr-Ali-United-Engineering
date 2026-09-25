import projectHeroImg from "@/assets/projectImg.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ProjectHero() {
  const t = useTranslations("projectPage");
  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={projectHeroImg}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={100}
        className="animate-hero-zoom object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-bl from-[#09050166] to-[#090500] opacity-40"
      />

      <div className="container-page relative flex min-h-[320px] flex-col justify-end pb-10 pt-36 lg:min-h-[460px]">
        <h1 className="font-display text-4xl font-medium text-white sm:text-[80px]">
          {t(`title`)}
        </h1>
      </div>
    </section>
  );
}

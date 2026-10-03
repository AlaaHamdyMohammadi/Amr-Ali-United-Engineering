"use client";

import articleHeroImg from "@/assets/articleImg.png";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import BlurText from "../TextAnimations/BlurText";

export default function ArticleHero() {
  const t = useTranslations("articles");
  const locale = useLocale();
  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Image
        src={articleHeroImg}
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
        <BlurText
          text={t("title")}
          delay={30}
          animateBy="words"
          direction="top"
          className={`title-font text-4xl font-medium text-white sm:text-[80px]`}
        />
      </div>
    </section>
  );
}

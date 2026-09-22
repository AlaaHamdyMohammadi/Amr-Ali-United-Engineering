"use client";

import heroSctionImg from "@/assets/heroSection.png";
import Header from "@/components/layout/Header";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BlurText from "../TextAnimations/BlurText";

export default function Hero() {
  const t = useTranslations("hero");
  const lines = t("headline").split("\n");

  return (
    <section className="section relative isolate overflow-hidden bg-navy-950">
      <Header />

      <Image
        src={heroSctionImg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-hero-zoom"
        // className="object-cover"
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/55"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
      >
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/25" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-white/25" />
        <div className="absolute inset-x-0 top-[37%] h-px bg-white/25" />
        <div className="absolute inset-x-0 top-[77%] h-px bg-white/25" />
      </div>

      <div className="container-page relative flex min-h-160 flex-col justify-end gap-8 pb-20  lg:min-h-180 lg:pb-42">
        <BlurText
          text={t("eyebrow")}
          delay={50}
          animateBy="words"
          direction="top"
          className="text-[32px] font-bold tracking-wide text-clay-500"
        />
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.2] text-white sm:text-5xl lg:text-[80px]">
          {lines.map((line, i) => (
            <BlurText
              key={i}
              text={line}
              delay={60}
              animateBy="words"
              direction="top"
            />
          ))}
        </h1>
        <BlurText
          text={t("sub")}
          delay={70}
          animateBy="words"
          direction="top"
          className="max-w-xl text-base text-white sm:text-2xl"
        />
      </div>
    </section>
  );
}

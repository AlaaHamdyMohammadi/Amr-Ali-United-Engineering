"use client";

import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  House,
  LayoutTemplate,
} from "lucide-react";
import { type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import BlurText from "../TextAnimations/BlurText";
import ShinyText from "../TextAnimations/ShinyText";
import ScrollReveal from "../TextAnimations/scrollRevealText";

const sectorKeys = ["residential", "commercial", "industrial"] as const;

const easeOut = [0.22, 1, 0.36, 1] as const;

const icons: Record<(typeof sectorKeys)[number], React.ElementType> = {
  residential: LayoutTemplate,
  commercial: ClipboardList,
  industrial: House,
};

export default function Sectors() {
  const t = useTranslations("home.sectors");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const fadeCardVar: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: easeOut } },
  };

  return (
    <section className="section bg-linear-to-bl from-[#041338] to-[#0B369E] py-30">
      <div className="container-page flex flex-col gap-10">
        <ShinyText
          text={t("title")}
          speed={5}
          delay={0}
          color="#ffffff"
          shineColor="#A0B8D7"
          spread={120}
          direction="left"
          className="title-font text-3xl font-bold leading-tight text-white sm:text-[48px]"
        />
        <p className="text-lg  text-gray-300">{t("sub")}</p>

        <div className="flex flex-col sm:flex-row gap-12">
          {sectorKeys.map((key) => {
            const Icon = icons[key];
            return (
              <div
                key={key}
                className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <span className="flex size-14 items-center border border-gray-300 justify-center rounded-2xl bg-white text-navy-750">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div className="flex flex-col gap-2.5">
                  <BlurText
                    text={t(`items.${key}.title`)}
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-2xl font-bold text-white"
                  />
                  <ScrollReveal
                    textClassName="text-base! text-gray-300"
                    baseOpacity={0.5}
                    enableBlur
                    baseRotation={3}
                    blurStrength={6}
                  >
                    {t(`items.${key}.body`)}
                  </ScrollReveal>
                  {/* <p className="text-gray-300">{t(`items.${key}.body`)}</p> */}
                </div>
                <ul className="flex flex-col gap-1.5">
                  {(t.raw(`items.${key}.points`) as string[]).map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-white"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-clay-550" />
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex w-fit items-center gap-2 font-bold text-white">
                  {t("cta")}
                  <Arrow size={16} className="text-white" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

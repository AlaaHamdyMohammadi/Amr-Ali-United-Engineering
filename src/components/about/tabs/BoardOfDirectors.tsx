"use client";

import building from "@/assets/building2.png";
import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function BoardOfDirectors() {
  const t = useTranslations("about.boardOfDirectors");
  const locale = useLocale();

  return (
    <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-10 py-10">
      <div className="flex flex-col gap-10 max-w-180">
        <ShinyText
          text={t("title")}
          speed={5}
          color="#303030"
          shineColor="#eef1fc"
          spread={120}
          direction="left"
          className={`${locale === "en" ? "title-font" : "title-font-ar"} text-[48px] font-semibold text-heading`}
        />
        <p className="text-lg text-heading font-medium">{t("body")}</p>
        <span className="h-0.75 w-23 rounded-full bg-clay-500" />
      </div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative aspect-3/2 size-100 sm:w-145.75 sm:h-108.5 overflow-hidden rounded-3xl group cursor-pointer shrink-0"
      >
        <Image
          src={building}
          alt="Leadership"
          fill
          className="object-cover shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
        />
      </motion.div>
    </div>
  );
}

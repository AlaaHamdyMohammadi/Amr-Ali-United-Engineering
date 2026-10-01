"use client";

import sectorbuilding from "@/assets/sectorbuilding.png";
import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const imageVariants: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function OurHistory() {
  const t = useTranslations("about.ourHistory");
  const pillars = t.raw("pillars") as string[];

  return (
    <div className="flex flex-col gap-0">
      <div className="container-page flex flex-col sm:flex-row items-center gap-10 sm:gap-20 py-10">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative aspect-3/2 size-100 sm:w-145.75 sm:h-108.5 overflow-hidden rounded-3xl group cursor-pointer shrink-0"
        >
          <Image
            src={sectorbuilding}
            alt="Company history"
            fill
            className="object-cover shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
          />
        </motion.div>

        <div className="flex flex-col gap-10 max-w-180">
          <ShinyText
            text={t("title")}
            speed={5}
            color="#303030"
            shineColor="#eef1fc"
            spread={120}
            direction="left"
            className="title-font text-[48px] font-semibold text-heading"
          />
          <p className="text-lg text-heading font-medium">{t("body1")}</p>
          <p className="text-lg text-heading font-medium">{t("body2")}</p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {pillars.map((pillar) => (
              <motion.span
                key={pillar}
                variants={itemVariants}
                className="rounded-full border border-clay-500/40 bg-clay-500/10 px-4 py-2 text-sm font-bold text-clay-600"
              >
                {pillar}
              </motion.span>
            ))}
          </motion.div>

          <span className="h-0.75 w-23 rounded-full bg-clay-500" />
        </div>
      </div>

      <motion.div
        className="bg-linear-to-l from-[#041338] to-[#0B369E] py-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <div className="container-page flex flex-col gap-6">
          <motion.h2
            variants={itemVariants}
            className="title-font text-white text-3xl sm:text-4xl font-semibold"
          >
            {t("visionTitle")}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-white/75 text-lg">
            {t("visionBody")}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

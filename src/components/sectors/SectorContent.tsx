"use client";

import Breadcrumbs from "../ui/Breadcrumbs";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, ArrowLeft } from "lucide-react";
import sector1 from "@/assets/sector1.png";
import sector2 from "@/assets/sector2.png";
import sector3 from "@/assets/sector3.png";
import Image, { type StaticImageData } from "next/image";
import MainButton from "../ui/MainButton";
import ScrollReveal from "../TextAnimations/scrollRevealText";
import { motion } from "motion/react";

const sectorKeys = ["residential", "commercial", "industrial"] as const;

const images: Record<(typeof sectorKeys)[number], StaticImageData> = {
  residential: sector1,
  commercial: sector2,
  industrial: sector3,
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function SectorContent() {
  const t = useTranslations("sectors");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section className="section">
      {/* Breadcrumb Here */}
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>
      <div className="container-page flex flex-col gap-12 pt-10 pb-20">
        <ScrollReveal
          textClassName="text-gray-200 text-base sm:text-xl font-bold"
          baseOpacity={0.5}
          enableBlur
          baseRotation={3}
          blurStrength={6}
        >
          {t(`body`)}
        </ScrollReveal>

        <motion.div
          className="flex flex-col gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectorKeys.map((key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col overflow-hidden rounded-3xl border border-[#EBEBEB] bg-white shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] sm:flex-row gap-6 items-center"
            >
              <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden rounded-3xl sm:aspect-auto sm:w-[633px] sm:h-[283px]">
                <motion.div
                  className="h-full w-full"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={images[key]}
                    alt={t(`items.${key}.title`)}
                    fill
                    sizes="(min-width: 640px) 330px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl sm:text-[32px] font-bold text-navy-750">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm sm:text-base">
                    {t(`items.${key}.body`)}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="font-bold text-black text-sm sm:text-base">
                    {t(`items.${key}.tag`)}
                  </span>
                  {/* <MainButton className="h-8! hover:bg-clay-700!" href={`/sectors/${key}`}>
                    {t("learnMore")}
                    <Arrow size={16} />
                  </MainButton> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

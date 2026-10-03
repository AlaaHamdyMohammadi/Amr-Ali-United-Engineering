"use client";

import apartmants from "@/assets/apartmants.png";
import pool from "@/assets/pool.png";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import villas from "@/assets/villas.png";
import office from "@/assets/officeimg.jpg";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import ShinyText from "../TextAnimations/ShinyText";
import MainButton from "../ui/MainButton";

const projectKeys = ["office", "pool", "interiors", "apartments", "villas", "buildings"] as const;

const images: Record<(typeof projectKeys)[number], StaticImageData> = {
  buildings,
  interiors,
  apartments: apartmants,
  villas,
  office,
  pool,
};

// Scroll-triggered entrance: parent staggers children in
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Hover state: one trigger, multiple children react via propagation
const hoverLift: Variants = {
  rest: {
    y: 0,
    boxShadow: "0px 4px 6px -1px rgba(15,23,42,0.05)",
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 30px -8px rgba(15,23,42,0.18)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Projects() {
  const t = useTranslations("home.projects");
  const locale = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;
  const dir = locale === "ar" ? -1 : 1;

  const arrowMove: Variants = {
    rest: { x: 0 },
    hover: {
      x: 6 * dir,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
  };

  function scroll(delta: number) {
    scrollerRef.current?.scrollBy({ left: delta * dir, behavior: "smooth" });
  }

  return (
    <section className="section bg-mist-50 py-20">
      <div className="container-page flex flex-col gap-12">
        <ShinyText
          text={t("title")}
          speed={5}
          delay={0}
          color="#1E1B4B"
          shineColor="#eef1fc"
          spread={120}
          direction="left"
          className={`title-font text-2xl font-bold text-navy-650 sm:text-[48px]`}
        />

        <motion.div
          ref={scrollerRef}
          className="flex flex-col gap-6 py-4 sm:flex-row sm:snap-x sm:snap-mandatory sm:overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectKeys.map((key) => (
            <motion.div
              key={key}
              variants={cardVariants}
              className="max-w-106 flex shrink-0 flex-col gap-6 border border-gray-50 rounded-3xl bg-white shadow-md shadow-navy-900/5"
              style={{ scrollSnapAlign: "start" }}
            >
              <motion.div
                className="flex flex-col gap-6"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Image
                  src={images[key]}
                  alt={key}
                  className="h-40 w-full rounded-3xl object-cover sm:h-52.25"
                />
                <div className="flex flex-col gap-8 px-6">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-navy-750 font-bold text-lg">
                      {t(`items.${key}.title`)}
                    </h1>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex flex-col gap-3">
                        <p className="text-gray-400 font-bold">{t("sector")}</p>
                        <p className="text-black font-medium text-sm">
                          {t(`items.${key}.sectorTitle`)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-gray-400 font-bold">
                          {t("section")}
                        </p>
                        <p className="text-black font-medium text-sm">
                          {t(`items.${key}.sectionTitle`)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-gray-400 font-bold">
                          {t("location")}
                        </p>
                        <p className="text-black font-medium text-sm">
                          {t(`items.${key}.locationTitle`)}
                        </p>
                      </div>
                      <div className="flex flex-col gap-3">
                        <p className="text-gray-400 font-bold">{t("year")}</p>
                        <p className="text-black font-medium text-sm">
                          {t(`items.${key}.yearTitle`)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <MainButton
                    preset="Link"
                    className="justify-start!"
                    href={`/projects`}
                  >
                    <span>See Projects</span>
                    <motion.span variants={arrowMove} className="inline-flex">
                      <Arrow size={16} />
                    </motion.span>
                  </MainButton>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center justify-between gap-4">
          <a
            href={`/${locale}/projects`}
            className="text-sm font-semibold text-navy-900 underline underline-offset-4"
          >
            {t("seeAll")}
          </a>

          <div className="hidden gap-2 sm:flex">
            {locale === "en" ? (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <MainButton
                    preset="toggle"
                    className="!bg-white !shadow-sm"
                    icon={<ChevronLeft size={16} />}
                    onClick={() => scroll(-360)}
                    aria-label="Previous"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <MainButton
                    preset="toggle"
                    className="!bg-white !shadow-sm"
                    icon={<ChevronRight size={16} />}
                    onClick={() => scroll(360)}
                    aria-label="Next"
                  />
                </motion.div>{" "}
              </>
            ) : (
              <>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <MainButton
                    preset="toggle"
                    className="!bg-white !shadow-sm"
                    icon={<ChevronRight size={16} />}
                    onClick={() => scroll(-360)}
                    aria-label="Previous"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="inline-flex"
                >
                  <MainButton
                    preset="toggle"
                    className="!bg-white !shadow-sm"
                    icon={<ChevronLeft size={16} />}
                    onClick={() => scroll(360)}
                    aria-label="Next"
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

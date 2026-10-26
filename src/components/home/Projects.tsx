"use client";

import { projects } from "@/data/projects-test"; // use the same import path as your ProjectContent
import type { Locale } from "@/types/projects";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRef } from "react";
import ShinyText from "../TextAnimations/ShinyText";
import MainButton from "../ui/MainButton";

const PLACEHOLDER = "/projects/placeholder.jpg";

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
  const locale = useLocale() as Locale;
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
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="max-w-106 flex shrink-0 flex-col border border-gray-50 rounded-3xl bg-white shadow-md shadow-navy-900/5 sm:w-106"
              style={{ scrollSnapAlign: "start" }}
            >
              <motion.div
                className="flex flex-1 flex-col gap-6 pb-6"
                initial="rest"
                animate="rest"
                whileHover="hover"
                variants={hoverLift}
              >
                <Image
                  src={item.images[0] ?? PLACEHOLDER}
                  alt={item.title[locale]}
                  width={600}
                  height={420}
                  sizes="(min-width: 640px) 424px, 100vw"
                  className="h-40 w-full rounded-3xl object-cover sm:h-52.25"
                />

                <div className="flex flex-1 flex-col gap-8 px-6">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-navy-750 min-h-14 line-clamp-2 text-lg font-bold">
                      {item.title[locale]}
                    </h3>

                    <div className="grid grid-cols-2 gap-5">
                      {(
                        [
                          ["sector", item.sector[locale]],
                          ["section", item.section[locale]],
                          ["location", item.location[locale]],
                          ["year", item.year[locale]],
                        ] as const
                      ).map(([key, value]) => (
                        <div key={key} className="flex flex-col gap-3">
                          <p className="text-gray-400 font-bold">{t(key)}</p>
                          <p
                            title={value}
                            className="text-black min-h-10 line-clamp-2 text-sm font-medium"
                          >
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <MainButton
                    preset="Link"
                    className="mt-auto justify-start!"
                    href={`/projects/${item.slug}`}
                  >
                    <span>{t("seeProjects")}</span>
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
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex"
            >
              <MainButton
                preset="toggle"
                className="!bg-white !shadow-sm"
                icon={
                  locale === "en" ? (
                    <ChevronLeft size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )
                }
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
                icon={
                  locale === "en" ? (
                    <ChevronRight size={16} />
                  ) : (
                    <ChevronLeft size={16} />
                  )
                }
                onClick={() => scroll(360)}
                aria-label="Next"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

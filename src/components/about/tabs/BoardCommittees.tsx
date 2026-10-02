"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import PeopleGrid, { type Person } from "./PeopleGrid";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

const valueKeys = [
  "quality",
  "safety",
  "commitment",
  "responsibility",
  "development",
] as const;

export default function BoardCommittees() {
  const t = useTranslations("about.board");
  const members = t.raw("members") as Person[];
  const locale = useLocale();

  return (
    <>
      {/* Intro + vision & mission */}
      <div className="container-page flex flex-col gap-16 py-10">
        <div className="flex max-w-255 flex-col gap-8">
          <ShinyText
            text={t("title")}
            speed={5}
            delay={0}
            color="#303030"
            shineColor="#eef1fc"
            spread={120}
            direction="left"
            className={`${locale === "en" ? "title-font" : "title-font-ar"} text-[48px] font-semibold text-heading`}
          />
          <p className="text-lg font-medium text-heading">{t("intro")}</p>
          <span className="h-0.75 w-23 rounded-full bg-clay-500" />
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={container}
          {...inView}
        >
          {(["vision", "mission"] as const).map((key) => (
            <motion.div
              key={key}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-4 rounded-3xl border border-gray-50 bg-white p-8 shadow-md shadow-navy-900/5"
            >
              <h2
                className={`{locale === "en" ? "title-font" : "title-font-ar"} text-2xl font-semibold text-navy-650`}
              >
                {t(`${key}.title`)}
              </h2>
              <p className="text-lg font-medium text-heading">
                {t(`${key}.body`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Values band */}
      <div className="bg-linear-to-l from-[#041338] to-[#0B369E] py-20">
        <motion.div
          className="container-page flex flex-col gap-12"
          variants={container}
          {...inView}
        >
          <motion.h2
            variants={item}
            className={`{locale === "en" ? "title-font" : "title-font-ar"} text-[48px] font-semibold text-white`}
          >
            {t("valuesTitle")}
          </motion.h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {valueKeys.map((key) => (
              <motion.div
                key={key}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-3 rounded-3xl border border-white/15 bg-white/4 p-6"
              >
                <h3 className="text-xl font-bold text-white">
                  {t(`values.${key}.title`)}
                </h3>
                <p className="text-sm font-medium text-white/80">
                  {t(`values.${key}.body`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Members */}
      {/* <div className="container-page flex flex-col gap-12 py-20">
        <h2 className="title-font text-[48px] font-semibold text-heading">
          {t("membersTitle")}
        </h2>
        <PeopleGrid people={members} />
      </div> */}
    </>
  );
}

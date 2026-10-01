"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
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

const principleKeys = [
  "quality",
  "management",
  "deadlines",
  "integrated",
  "partnerships",
] as const;

export default function ExecutiveTeam() {
  const t = useTranslations("about.executive");
  const members = t.raw("members") as Person[];

  return (
    <>
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
            className="title-font text-[48px] font-semibold text-heading"
          />
          <p className="text-lg font-medium text-heading">{t("intro")}</p>
          <span className="h-0.75 w-23 rounded-full bg-clay-500" />
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="title-font text-3xl font-semibold text-navy-650 sm:text-4xl">
            {t("principlesTitle")}
          </h2>
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {principleKeys.map((key, i) => (
              <motion.div
                key={key}
                variants={item}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-4 rounded-3xl border border-gray-50 bg-white p-8 shadow-md shadow-navy-900/5"
              >
                <span className="text-sm font-bold text-clay-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold text-navy-750">
                  {t(`principles.${key}.title`)}
                </h3>
                <p className="font-medium text-heading">
                  {t(`principles.${key}.body`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* <div className="bg-mist-50 py-20">
        <div className="container-page flex flex-col gap-12">
          <h2 className="title-font text-[48px] font-semibold text-heading">
            {t("membersTitle")}
          </h2>
          <PeopleGrid people={members} />
        </div>
      </div> */}
    </>
  );
}

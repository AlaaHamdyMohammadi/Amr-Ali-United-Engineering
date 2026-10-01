"use client";

import building from "@/assets/building2.png";
import ShinyText from "@/components/TextAnimations/ShinyText";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

export default function OurApproach() {
  const t = useTranslations("about.ourApproach");
  const steps = t.raw("steps") as {
    number: string;
    title: string;
    body: string;
  }[];

  return (
    <div className="container-page flex flex-col gap-16 py-10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
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
          <p className="text-lg text-heading font-medium">{t("intro")}</p>
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
            alt="Project planning"
            fill
            className="object-cover shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-[0_8px_32px_8px_rgba(0,0,0,0.12)] group-hover:brightness-110"
          />
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col gap-4 rounded-3xl border border-navy-900/10 bg-white p-8 shadow-[0_2px_16px_2px_rgba(0,0,0,0.04)]"
          >
            <span className="text-3xl font-extrabold text-clay-500">
              {step.number}
            </span>
            <h3 className="text-lg font-bold text-heading">{step.title}</h3>
            <p className="text-heading/70">{step.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-lg font-bold text-heading"
      >
        {t("goal")}
      </motion.p>
    </div>
  );
}

"use client";

import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import CountUp from "../TextAnimations/CountUpText";

const rows = [
  { key: "clients" as const, statisticNumber: 165.489, icon: "+" },
  { key: "rate" as const, statisticNumber: 98, icon: "%" },
  { key: "infra" as const, statisticNumber: 254, icon: "+" },
  { key: "awards" as const, statisticNumber: 560, icon: "" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Stats() {
  const t = useTranslations("home.stats");

  return (
    <section
      className="section py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(135deg, #f4c9a3 0%, #eef1fc 55%, #f4c9a3 100%)",
      }}
    >
      <motion.div
        className="container-page grid gap-x-10 gap-y-10 sm:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {rows.map(({ key, statisticNumber, icon }) => (
          <motion.div
            key={key}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex flex-col gap-5 border-b border-black pb-4"
          >
            <p className="text-[32px] font-medium uppercase tracking-wider text-black">
              {t(`${key}Label`)}
            </p>
            <div className="flex gap-0.5 text-[65px] font-bold text-black">
              <CountUp
                from={0}
                to={statisticNumber}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
                delay={1}
              />
              <span>{icon}</span>
            </div>
            <p className="text-lg text-black">{t(`${key}Sub`)}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

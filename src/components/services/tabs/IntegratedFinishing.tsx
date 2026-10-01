"use client";

import { motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import { Building2, CheckCircle2, Layers3, Settings2 } from "lucide-react";

import MainButton from "@/components/ui/MainButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: EASE,
    },
  },
};

const advantageIcons = [Layers3, Settings2, CheckCircle2, Building2];

export default function IntegratedFinishing() {
  const t = useTranslations("services.integratedFinishingTab");
  const locale = useLocale();

  const scopePoints = t.raw("scope.points") as string[];

  const projectTypes = t.raw("projectTypes.items") as {
    title: string;
    body: string;
  }[];

  const materialPoints = t.raw("materials.points") as string[];

  const advantages = t.raw("advantages.items") as {
    title: string;
    body: string;
  }[];

  return (
    <div className="flex flex-col overflow-x-clip">
      {/* Section 1: Overview & Scope */}
      <motion.div
        className="container-page flex flex-col gap-12 py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="flex flex-col gap-6">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
          >
            {t("hero.title")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium leading-8 text-heading"
          >
            {t("hero.body1")}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium leading-8 text-heading"
          >
            {t("hero.body2")}
          </motion.p>
        </div>

        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-white p-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-clay-50">
              <Layers3 className="text-clay-600" size={26} />
            </div>

            <h3 className="text-2xl font-bold text-heading">
              {t("scope.title")}
            </h3>
          </div>

          <motion.p
            variants={itemVariants}
            className="mb-6 text-lg font-medium leading-8 text-heading"
          >
            {t("scope.lead")}
          </motion.p>

          <motion.ul
            variants={containerVariants}
            className="grid gap-4 sm:grid-cols-2"
          >
            {scopePoints.map((point) => (
              <motion.li
                key={point}
                variants={itemVariants}
                className="flex items-start gap-3 rounded-2xl bg-mist-50 p-4 text-lg font-medium text-heading"
              >
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-clay-600"
                />

                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Section 2: Suitable Project Types */}
      <motion.div
        className="bg-[#061435] py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="container-page flex flex-col gap-12">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold uppercase tracking-wide text-white sm:text-[32px]"
          >
            {t("projectTypes.title")}
          </motion.h2>

          <div className="grid gap-5 lg:grid-cols-3">
            {projectTypes.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-8"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
                  <Building2 size={25} className="text-[#EDBF6C]" />
                </div>

                <h3 className="text-2xl font-bold text-white">{item.title}</h3>

                <p className="font-medium leading-7 text-white/80">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section 3: Materials & Systems */}
      <motion.div
        className="container-page flex flex-col gap-10 py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
        >
          {t("materials.title")}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-4xl text-lg font-medium leading-8 text-heading"
        >
          {t("materials.lead")}
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {materialPoints.map((point) => (
            <motion.li
              key={point}
              variants={itemVariants}
              className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_2px_16px_2px_rgba(0,0,0,0.04)]"
            >
              <CheckCircle2 size={22} className="shrink-0 text-clay-600" />

              <span className="text-lg font-medium text-heading">{point}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div variants={itemVariants}>
          <MainButton href="/contact-us" className="hover:bg-clay-700!">{t("buttons.schedule")}</MainButton>
        </motion.div>
      </motion.div>

      {/* Section 4: Advantages */}
      <motion.div
        className="bg-[#061435] py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="container-page flex flex-col gap-12">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold uppercase tracking-wide text-white sm:text-[32px]"
          >
            {t("advantages.title")}
          </motion.h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item, i) => {
              const Icon = advantageIcons[i % advantageIcons.length];

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="flex min-h-65 flex-col gap-5 rounded-3xl border border-white/15 bg-white/5 p-6"
                >
                  <Icon
                    size={42}
                    strokeWidth={1.4}
                    className="text-[#EDBF6C]"
                  />

                  <h3 className="text-xl font-bold text-[#EEAA59]">
                    {item.title}
                  </h3>

                  <div className="border border-white/10" />

                  <p className="font-medium leading-7 text-[#969696]">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className={`flex flex-wrap gap-3 ${
              locale === "ar" ? "justify-start" : "justify-end"
            }`}
          >
            <MainButton href="/contact-us">{t("buttons.cta")}</MainButton>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

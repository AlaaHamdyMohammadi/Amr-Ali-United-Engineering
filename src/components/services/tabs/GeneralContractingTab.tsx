"use client";

import generalImg from "@/assets/generalImg.png";
import systemsImg from "@/assets/systemsImg.png";
import typesImg from "@/assets/typesImg.png";
import Projects from "@/components/home/Projects";
import MainButton from "@/components/ui/MainButton";
import { Building2, ShieldCheck, Users2, Wallet } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const imageVariantsRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const imageVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE },
  },
};

const advantageIcons = [ShieldCheck, Wallet, Users2, Building2];

function ActionButtons({ t }: { t: ReturnType<typeof useTranslations> }) {
  return (
    <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
      <MainButton className="hover:bg-clay-700!">{t("buttons.schedule")}</MainButton>
      <MainButton
        type="default"
        className="!border-clay-600 !text-clay-600 hover:!bg-clay-50"
      >
        {t("buttons.prices")}
      </MainButton>
    </motion.div>
  );
}

export default function GeneralContractingtab() {
  const t = useTranslations("services.generalContractingTab");
  const scopePoints = t.raw("hero.scopePoints") as string[];
  const materialPoints = t.raw("materials.points") as string[];
  const projectTypes = t.raw("projectTypes.items") as {
    title: string;
    body: string;
  }[];
  const advantages = t.raw("advantages.items") as {
    title: string;
    body: string;
  }[];

  return (
    <div className="flex flex-col">
      {/* Section 1: General Contracting overview */}
      <motion.div
        className="container-page grid gap-10 pt-10 pb-20 lg:grid-cols-2 lg:items-center justify-between"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
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
            className="text-lg font-medium text-heading"
          >
            {t("hero.body1")}
            {t("hero.body2")}
          </motion.p>

          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-heading"
          >
            {t("hero.scopeTitle")}
          </motion.h3>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium text-heading"
          >
            {t.rich("hero.scopeLead", {
              b: (chunks) => (
                <span className="text-lg font-bold text-heading">{chunks}</span>
              ),
            })}
          </motion.p>

          <motion.ul
            variants={containerVariants}
            className="flex flex-col gap-2"
          >
            {scopePoints.map((point) => (
              <motion.li
                key={point}
                variants={itemVariants}
                className="flex items-center gap-2 text-lg font-medium text-heading"
              >
                <span className="size-1 shrink-0 rounded-full bg-heading" />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <ActionButtons t={t} />
        </div>

        <motion.div
          variants={imageVariantsRight}
          className="group justify-self-end"
        >
          <Image
            src={generalImg}
            alt={t("hero.title")}
            className=" w-[683px] h-[666px] rounded-3xl object-cover shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        </motion.div>       
      </motion.div>

      {/* Section 2: Suitable Project Types — full-bleed photo background */}
      <div className="relative isolate overflow-hidden">
        <Image
          src={typesImg}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 to-black/60"
        />

        <motion.div
          className="container-page flex flex-col gap-14 py-16 lg:py-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold uppercase tracking-wide text-white sm:text-[32px]"
          >
            {t("projectTypes.title")}
          </motion.h2>

          <div className="grid gap-5 sm:grid-cols-3">
            {projectTypes.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col gap-6 rounded-3xl border border-white/40 bg-black/30 p-8 backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="font-medium text-white">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 3: Materials & Systems */}
      <motion.div
        className="container-page w-full flex flex-col sm:flex-row items-center gap-30 py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div
          variants={imageVariantsLeft}
          className="group justify-self-start"
        >
          <Image
            src={systemsImg}
            alt={t("materials.title")}
            className=" w-[1000px] h-[400px] sm:h-[566px] rounded-3xl object-cover shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110"
          />
        </motion.div>

        <div className="flex flex-col gap-6 lg:order-2">
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
          >
            {t("materials.title")}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium text-heading"
          >
            {t("materials.lead")}
          </motion.p>

          <motion.ul
            variants={containerVariants}
            className="flex flex-col gap-2"
          >
            {materialPoints.map((point) => (
              <motion.li
                key={point}
                variants={itemVariants}
                className="flex items-center gap-2 text-lg font-medium text-heading"
              >
                <span className="size-1 shrink-0 rounded-full bg-heading" />
                {point}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={itemVariants}
            className="text-lg font-medium text-heading"
          >
            {t("materials.note")}
          </motion.p>

          <ActionButtons t={t} />
        </div>
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

          <div className="flex flex-col sm:flex-row gap-6">
            {advantages.map((item, i) => {
              const Icon = advantageIcons[i % advantageIcons.length];
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col justify-between gap-4 rounded-3xl border border-white/15 bg-white/4 px-6 pt-6"
                >
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-[#EEAA59]">
                      {item.title}
                    </h3>
                    <div className="border border-white/15" />
                  </div>
                  <p className="font-medium text-[#969696]">{item.body}</p>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="relative h-30 w-30 self-end"
                  >
                    {/* Soft glow behind the icon — matches Figma's "Ellipse 1":
              190x190, #EDBF6C at 40% opacity, heavily blurred */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-1/2 w-[155px] h-[155px] -translate-x-1/2 -translate-y-[60%] rounded-full bg-[#EDBF6C]/40 blur-[88px]"
                    />
                    <Icon
                      size={64}
                      strokeWidth={1.25}
                      className="absolute left-[80%] top-[77%] -translate-x-1/2 -translate-y-1/2 text-[#EDBF6C] opacity-70"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-end gap-3"
          >
            <MainButton>{t("buttons.schedule")}</MainButton>
            <MainButton
              type="default"
              className="!border-clay-600 !text-clay-600 hover:!bg-clay-50"
            >
              {t("buttons.prices")}
            </MainButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Section 5: Projects */}
      <Projects/>
    </div>
  );
}

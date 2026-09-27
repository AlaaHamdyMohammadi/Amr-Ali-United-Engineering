"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MainButton from "@/components/ui/MainButton";
import { projectGalleries } from "@/data/projectDetails";
import type { ProjectTypeKey } from "@/data/projects";
import { Share2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ProjectGallery from "./ProjectGallery";

const TAB_IDS = ["challengesSolutions", "phases", "services"] as const;
type TabId = (typeof TAB_IDS)[number];

interface ProjectDetail {
  title: string;
  description: string;
  sector: string;
  section: string;
  location: string;
  year: string;
  area: string;
  duration: string;
  status: string;
  challenges: { title: string; body: string }[];
  solutions: { title: string; body: string }[];
  phases: { title: string; body: string }[];
  services: string[];
}

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const galleryVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.97 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

const listContainerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: EASE } },
};

export default function ProjectDetailContent({ id }: { id: ProjectTypeKey }) {
  const t = useTranslations("projects");
  const [activeTab, setActiveTab] = useState<TabId>("challengesSolutions");

  const detail = t.raw(`details.${id}`) as ProjectDetail;
  const gallery = projectGalleries[id];

  return (
    <section className="section container-page bg-mist-50 ">
      <div className="px-4 py-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col gap-10 pt-10 pb-20">
        <motion.div
          className="grid gap-14 lg:grid-cols-2 lg:items-start"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={galleryVariants}>
            <ProjectGallery images={gallery} alt={detail.title} />
          </motion.div>

          <motion.div
            className="flex flex-col gap-10"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-start justify-between gap-4"
            >
              <ShinyText
                text={detail.title}
                speed={5}
                delay={0}
                color="#072469"
                shineColor="#eef1fc"
                spread={120}
                direction="left"
                className="text-[48px] font-extrabold"
              />
              <motion.button
                aria-label={t("share")}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-900/10 text-navy-900/60 hover:text-navy-900"
              >
                <Share2 size={16} />
              </motion.button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg font-semibold text-heading"
            >
              {detail.description}
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-x-22 gap-y-4 sm:grid-cols-4"
              variants={listContainerVariants}
            >
              {(
                [
                  ["sector", detail.sector],
                  ["section", detail.section],
                  ["location", detail.location],
                  ["year", detail.year],
                  ["area", detail.area],
                  ["duration", detail.duration],
                  ["status", detail.status],
                ] as const
              ).map(([labelKey, value]) => (
                <motion.div
                  key={labelKey}
                  variants={listItemVariants}
                  className="flex flex-col gap-6"
                >
                  <span className="text-xl font-bold text-gray-400">
                    {t(labelKey)}
                  </span>
                  <span className="text-xl font-medium text-black">
                    {value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <MainButton className="!bg-navy-900 hover:!bg-navy-800 h-14! text-base! font-bold! w-full">
                  {t("requestSimilar")}
                </MainButton>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <MainButton className="hover:bg-clay-700! h-14! text-base! font-bold! w-full">
                  {t("scheduleMeeting")}
                </MainButton>
              </motion.div>
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <MainButton
                  type="default"
                  className="!border-clay-600 !text-clay-700 hover:!bg-clay-50 h-14! text-base! font-bold! w-full"
                >
                  {t("requestPrices")}
                </MainButton>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="rounded-3xl border border-[#CDCDCD] p-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex gap-6 border-b border-[#CDCDCD]">
            {TAB_IDS.map((tabId) => (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className="relative pb-3 text-sm sm:text-lg font-bold transition-colors duration-300"
                style={{
                  color: activeTab === tabId ? "#041338" : "rgba(11,23,48,0.4)",
                }}
              >
                {t(`tabs.${tabId}`)}
                {activeTab === tabId && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-navy-900"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait">
              {activeTab === "challengesSolutions" && (
                <motion.div
                  key="challengesSolutions"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="grid gap-10 sm:grid-cols-2"
                >
                  <motion.div
                    className="flex flex-col gap-6"
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <h3 className="text-2xl font-extrabold text-black">
                      {t("challenges")}
                    </h3>
                    {detail.challenges.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={listItemVariants}
                        className="flex gap-4 rounded-2xl bg-[#F6E7D5] border border-[#EAB97E] p-4"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#E8BE99] border border-[#D5984F] text-sm font-bold text-[#653A06]">
                          {i + 1}
                        </span>
                        <div className="flex flex-col gap-4">
                          <h4 className="font-bold text-navy-750">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#474747]">{item.body}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-6"
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    <h3 className="text-2xl font-extrabold text-black">
                      {t("solutions")}
                    </h3>
                    {detail.solutions.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={listItemVariants}
                        className="flex gap-4 rounded-2xl bg-[#DEE8FF] border border-[#8EA4DA] p-4"
                      >
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#CCDBFE] border border-[#5F81D2] text-sm font-bold text-navy-800">
                          {i + 1}
                        </span>
                        <div className="flex flex-col gap-4">
                          <h4 className="font-bold text-navy-750">
                            {item.title}
                          </h4>
                          <p className="text-sm text-[#474747]">{item.body}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "phases" && (
                <motion.div
                  key="phases"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col gap-4"
                >
                  <motion.div
                    className="flex flex-col gap-4"
                    variants={listContainerVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {detail.phases.map((item, i) => (
                      <motion.div
                        key={i}
                        variants={listItemVariants}
                        className="flex gap-4 rounded-2xl border border-[#EBEBEB] bg-white p-4"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <div className="flex flex-col gap-1">
                          <h4 className="text-sm font-bold text-navy-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-navy-900/60">
                            {item.body}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {activeTab === "services" && (
                <motion.div
                  key="services"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-wrap gap-3"
                >
                  {detail.services.map((service, i) => (
                    <motion.span
                      key={service}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.04,
                        ease: EASE,
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-full border border-[#EBEBEB] bg-white px-4 py-2 text-sm font-medium text-navy-900"
                    >
                      {service}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

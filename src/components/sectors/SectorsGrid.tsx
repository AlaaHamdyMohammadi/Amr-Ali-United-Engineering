"use client";

import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import { useLocale } from "next-intl";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SectorsGrid({
  sectionsTitle,
  sections,
  seeProjects,
  isRtl,
}: {
  sectionsTitle: string;
  sections: { key: string; label: string }[];
  seeProjects: string;
  isRtl: boolean;
}) {
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-12">
      <motion.h2
        className={`title-font text-[48px] font-semibold text-navy-650`}
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {sectionsTitle}
      </motion.h2>

      <motion.div
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {sections.map(({ key, label }) => (
          <motion.div
            key={key}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-[#EBEBEB] bg-white p-6 transition-colors duration-200 hover:border-[#FEDBB2] hover:bg-[#F5F5F5] shadow-black/6"
          >
            {/* Orange accent strip — hidden at rest, slides in on hover only */}
            <span
              aria-hidden
              className="absolute inset-y-0 start-0 w-5 origin-top scale-y-0 bg-clay-500 transition-transform duration-200 group-hover:scale-y-100"
            />

            <span className="text-2xl font-bold text-navy-750">{label}</span>
            <a
              href="/projects"
              className="flex shrink-0 items-center gap-1.5 font-semibold text-clay-600 self-end"
            >
              {seeProjects}
              <ArrowRight size={16} className={isRtl ? "rotate-180" : ""} />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
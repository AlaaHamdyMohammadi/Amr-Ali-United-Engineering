"use client";

import { motion, type Variants } from "motion/react";
import { useTranslations } from "next-intl";

import {
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Layers3,
  Lightbulb,
  PenTool,
  Settings2,
  Workflow,
} from "lucide-react";

import MainButton from "@/components/ui/MainButton";

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

const disciplineIcons = [PenTool, Building2, Lightbulb, Settings2];

const deliverableIcons = [
  FileText,
  FileText,
  Layers3,
  Building2,
  ClipboardCheck,
];

const projectIcons = [Building2, Building2, Settings2, Workflow];

export default function EngineeringDesigns() {
  const t = useTranslations("services.engineeringDesignsTab");

  const drawings2D = t.raw("design2D.items") as string[];
  const design3D = t.raw("design3D.items") as string[];
  const architecturalDesign = t.raw("architecturalDesign.items") as string[];
  const structuralDesign = t.raw("structuralDesign.items") as string[];
  const electrical = t.raw("electrical.items") as string[];
  const mechanical = t.raw("mechanical.items") as string[];
  const coordination = t.raw("coordination.items") as string[];
  const shopDrawings = t.raw("shopDrawings.items") as string[];

  const deliverables = t.raw("deliverables.items") as {
    title: string;
    body: string;
  }[];

  const process = t.raw("process.items") as {
    number: string;
    title: string;
    body: string;
  }[];

  const projects = t.raw("projects.items") as {
    title: string;
    body: string;
  }[];

  return (
    <div className="flex flex-col overflow-x-clip">
      {/* Hero */}
      <motion.section
        className="container-page flex flex-col gap-6 py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
        >
          {t("hero.title")}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl font-semibold leading-9 text-heading"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-5xl text-lg font-medium leading-8 text-heading"
        >
          {t("hero.body1")}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="max-w-5xl text-lg font-medium leading-8 text-heading"
        >
          {t("hero.body2")}
        </motion.p>
      </motion.section>

      {/* 2D + 3D */}
      <section className="bg-[#061435] py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          {/* 2D */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <motion.div
              variants={itemVariants}
              className="mb-7 flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <FileText size={26} className="text-[#EDBF6C]" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                {t("design2D.title")}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mb-7 leading-7 text-white/80"
            >
              {t("design2D.body")}
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="mb-5 text-lg font-bold text-[#EEAA59]"
            >
              {t("common.includes")}
            </motion.h3>

            <motion.ul variants={containerVariants} className="grid gap-3">
              {drawings2D.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-white/80"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#EDBF6C]"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* 3D */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <motion.div
              variants={itemVariants}
              className="mb-7 flex items-center gap-4"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                <Layers3 size={26} className="text-[#EDBF6C]" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                {t("design3D.title")}
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mb-7 leading-7 text-white/80"
            >
              {t("design3D.body")}
            </motion.p>

            <motion.h3
              variants={itemVariants}
              className="mb-5 text-lg font-bold text-[#EEAA59]"
            >
              {t("common.includes")}
            </motion.h3>

            <motion.ul variants={containerVariants} className="grid gap-3">
              {design3D.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="flex items-start gap-3 text-white/80"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-1 shrink-0 text-[#EDBF6C]"
                  />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 3D Benefit */}
      <motion.section
        className="container-page py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="rounded-3xl bg-white p-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-clay-50">
              <Lightbulb size={26} className="text-clay-600" />
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-heading">
                {t("design3D.benefitTitle")}
              </h2>

              <p className="text-lg font-medium leading-8 text-heading">
                {t("design3D.benefit")}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Architectural + Structural */}
      <section className="bg-mist-50 py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <DesignCard
            title={t("architecturalDesign.title")}
            body={t("architecturalDesign.body")}
            items={architecturalDesign}
            icon={PenTool}
          />

          <DesignCard
            title={t("structuralDesign.title")}
            body={t("structuralDesign.body")}
            items={structuralDesign}
            icon={Building2}
          />
        </div>
      </section>

      {/* Electrical + Mechanical */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="mb-10"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
            >
              {t("mep.title")}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-5xl text-lg font-medium leading-8 text-heading"
            >
              {t("mep.body")}
            </motion.p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            <DesignCard
              title={t("electrical.title")}
              items={electrical}
              icon={Lightbulb}
            />

            <DesignCard
              title={t("mechanical.title")}
              items={mechanical}
              icon={Settings2}
            />
          </div>
        </div>
      </section>

      {/* Coordination */}
      <motion.section
        className="bg-[#061435] py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="container-page">
          <motion.div
            variants={itemVariants}
            className="mb-10 flex items-center gap-4"
          >
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Workflow size={26} className="text-[#EDBF6C]" />
            </div>

            <h2 className="text-2xl font-bold text-white sm:text-[32px]">
              {t("coordination.title")}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-8 max-w-5xl text-lg font-medium leading-8 text-white/80"
          >
            {t("coordination.body")}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {coordination.map((item, index) => (
              <motion.div
                key={item}
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-bold text-white"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-5xl text-lg font-medium leading-8 text-white/70"
          >
            {t("coordination.benefit")}
          </motion.p>
        </div>
      </motion.section>

      {/* Shop Drawings */}
      <motion.section
        className="container-page py-16 lg:py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]">
            {t("shopDrawings.title")}
          </h2>

          <p className="mt-5 max-w-5xl text-lg font-medium leading-8 text-heading">
            {t("shopDrawings.body")}
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {shopDrawings.map((item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="flex items-start gap-3 rounded-2xl bg-mist-50 p-5 text-lg font-medium text-heading"
            >
              <CheckCircle2 size={22} className="mt-1 shrink-0 text-clay-600" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Deliverables */}
      <section className="bg-mist-50 py-16 lg:py-20">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
            >
              {t("deliverables.title")}
            </motion.h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {deliverables.map((item, index) => {
                const Icon = deliverableIcons[index % deliverableIcons.length];

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
                    className="flex min-h-55 flex-col gap-5 rounded-3xl bg-white p-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.05)]"
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.5}
                      className="text-clay-600"
                    />

                    <h3 className="text-xl font-bold text-heading">
                      {item.title}
                    </h3>

                    <div className="border border-black/5" />

                    <p className="font-medium leading-7 text-heading/70">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-[#061435] py-16 lg:py-20">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-2xl font-semibold uppercase tracking-wide text-white sm:text-[32px]"
            >
              {t("process.title")}
            </motion.h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {process.map((item) => (
                <motion.div
                  key={item.number}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-5 text-3xl font-bold text-[#EDBF6C]">
                    {item.number}
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-white/70">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="mb-10 text-2xl font-semibold uppercase tracking-wide text-navy-600 sm:text-[32px]"
            >
              {t("projects.title")}
            </motion.h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((item, index) => {
                const Icon = projectIcons[index % projectIcons.length];

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
                    className="flex flex-col gap-5 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.05)]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-clay-50">
                      <Icon size={25} className="text-clay-600" />
                    </div>

                    <h3 className="text-xl font-bold text-heading">
                      {item.title}
                    </h3>

                    <p className="font-medium leading-7 text-heading/70">
                      {item.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex justify-end"
            >
              <MainButton href="/contact-us">{t("buttons.cta")}</MainButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function DesignCard({
  title,
  body,
  items,
  icon: Icon,
}: {
  title: string;
  body?: string;
  items: string[];
  icon: React.ElementType;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className="rounded-3xl bg-white p-6 shadow-[0_2px_16px_2px_rgba(0,0,0,0.06)] sm:p-8"
    >
      <motion.div
        variants={itemVariants}
        className="mb-6 flex items-center gap-4"
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-clay-50">
          <Icon size={26} className="text-clay-600" />
        </div>

        <h3 className="text-2xl font-bold text-heading">{title}</h3>
      </motion.div>

      {body && (
        <motion.p
          variants={itemVariants}
          className="mb-6 text-lg font-medium leading-8 text-heading"
        >
          {body}
        </motion.p>
      )}

      <motion.ul variants={containerVariants} className="grid gap-3">
        {items.map((item) => (
          <motion.li
            key={item}
            variants={itemVariants}
            className="flex items-start gap-3 text-lg font-medium text-heading"
          >
            <CheckCircle2 size={21} className="mt-1 shrink-0 text-clay-600" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}

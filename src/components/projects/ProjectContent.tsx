"use client";

import apartmants from "@/assets/apartmants.png";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import villas from "@/assets/villas.png";
import {
  getUniqueValues,
  projects,
  type ProjectTypeKey,
} from "@/data/projects";
import { Pagination, Select } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import MainButton from "../ui/MainButton";

const images: Record<ProjectTypeKey, StaticImageData> = {
  buildings,
  interiors,
  apartments: apartmants,
  villas,
};

const PAGE_SIZE = 12;

interface Filters {
  sector?: string;
  section?: string;
  location?: string;
  year?: string;
  status?: string;
}

const filtersBarVariants: Variants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

// Odd-index cards slide from left, even-index cards slide from right
const cardVariantsLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const cardVariantsRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: 40,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function ProjectContent() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const [filters, setFilters] = useState<Filters>({});
  const [page, setPage] = useState(1);

  const sectorOptions = useMemo(() => getUniqueValues("sector"), []);
  const sectionOptions = useMemo(() => getUniqueValues("section"), []);
  const locationOptions = useMemo(() => getUniqueValues("location"), []);
  const yearOptions = useMemo(() => getUniqueValues("year"), []);
  const statusOptions = useMemo(() => getUniqueValues("status"), []);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.sector && p.sector !== filters.sector) return false;
      if (filters.section && p.section !== filters.section) return false;
      if (filters.location && p.location !== filters.location) return false;
      if (filters.year && p.year !== filters.year) return false;
      if (filters.status && p.status !== filters.status) return false;
      return true;
    });
  }, [filters]);

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  console.log("paged = ", paged);

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  }

  function resetFilters() {
    setFilters({});
    setPage(1);
  }

  const selectClassName =
    "min-w-[140px] [&_.ant-select-selector]:!rounded-full [&_.ant-select-selector]:!border-[#EBEBEB] [&_.ant-select-selector]:!h-11 [&_.ant-select-selector]:!items-center";

  return (
    <section className="section">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>
      <div className="container-page flex flex-col gap-16 pt-10 pb-20">
        {/* Filters */}
        <motion.div
          className="flex flex-wrap items-center gap-3"
          variants={filtersBarVariants}
          initial="hidden"
          animate="show"
        >
          <Select
            placeholder={t("filters.sector")}
            allowClear
            className={selectClassName}
            value={filters.sector}
            onChange={(v) => updateFilter("sector", v)}
            options={sectorOptions.map((v) => ({ label: v, value: v }))}
          />
          <Select
            placeholder={t("filters.section")}
            allowClear
            className={selectClassName}
            value={filters.section}
            onChange={(v) => updateFilter("section", v)}
            options={sectionOptions.map((v) => ({ label: v, value: v }))}
          />
          <Select
            placeholder={t("filters.location")}
            allowClear
            className={selectClassName}
            value={filters.location}
            onChange={(v) => updateFilter("location", v)}
            options={locationOptions.map((v) => ({ label: v, value: v }))}
          />
          <Select
            placeholder={t("filters.year")}
            allowClear
            className={selectClassName}
            value={filters.year}
            onChange={(v) => updateFilter("year", v)}
            options={yearOptions.map((v) => ({ label: v, value: v }))}
          />
          <Select
            placeholder={t("filters.status")}
            allowClear
            className={selectClassName}
            value={filters.status}
            onChange={(v) => updateFilter("status", v)}
            options={statusOptions.map((v) => ({ label: v, value: v }))}
          />

          <MainButton
            className="ms-auto hover:bg-clay-700!"
            onClick={resetFilters}
          >
            {t("filters.reset")}
          </MainButton>
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {paged.length === 0 ? (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-16 text-center text-navy-900/50"
            >
              {t("filters.noResults")}
            </motion.p>
          ) : (
            <motion.div
              key={`page-${page}-${JSON.stringify(filters)}`}
              className="grid grid-cols-1 gap-4 sm:grid-cols-4"
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {paged.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={
                    index % 2 === 0 ? cardVariantsLeft : cardVariantsRight
                  }
                  exit="exit"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="flex shrink-0 flex-col gap-6 rounded-3xl border border-gray-50 bg-white shadow-md shadow-navy-900/5"
                >
                  <Image
                    src={images[item.typeKey]}
                    alt={item.typeKey}
                    className="h-40 w-full rounded-3xl object-cover sm:h-52.25"
                  />
                  <div className="flex flex-col gap-8 px-6 pb-6">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-lg font-bold text-navy-750">
                        {t(`items.${item.typeKey}.title`)}
                      </h1>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex flex-col gap-3">
                          <p className="font-bold text-gray-400">
                            {t("sector")}
                          </p>
                          <p className="text-sm font-medium text-black">
                            {item.sector}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="font-bold text-gray-400">
                            {t("section")}
                          </p>
                          <p className="text-sm font-medium text-black">
                            {item.section}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="font-bold text-gray-400">
                            {t("location")}
                          </p>
                          <p className="text-sm font-medium text-black">
                            {item.location}
                          </p>
                        </div>
                        <div className="flex flex-col gap-3">
                          <p className="font-bold text-gray-400">{t("year")}</p>
                          <p className="text-sm font-medium text-black">
                            {item.year}
                          </p>
                        </div>
                      </div>
                    </div>
                    <MainButton preset="navLink" className="justify-start!" href={`/projects/${item.typeKey}`}>
                      <span>{t("seeProjects")}</span>
                      <Arrow size={16} />
                    </MainButton>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {filtered.length > PAGE_SIZE && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Pagination
              current={page}
              pageSize={PAGE_SIZE}
              total={filtered.length}
              onChange={setPage}
              align="center"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}

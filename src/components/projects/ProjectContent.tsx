"use client";

import {
  getFilterOptions,
  projects,
  type FilterKey,
  type Locale,
} from "@/data/projects-test";
import { Select } from "antd";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useMemo, useState } from "react";
import Breadcrumbs from "../ui/Breadcrumbs";
import MainButton from "../ui/MainButton";
import projectOne from "../../public/projects/fish-farm-foundations-port-said/1.jpg"


const PAGE_SIZE = 7;

// Filter values are the English strings (stable across languages)
type Filters = Partial<Record<FilterKey, string>>;

const FILTER_KEYS: FilterKey[] = [
  "sector",
  "section",
  "location",
  "year",
  "status",
];

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

// Even-index cards slide from left, odd-index cards slide from right
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
  const locale = useLocale() as Locale;
  const Arrow = locale === "ar" ? ArrowLeft : ArrowRight;

  const [filters, setFilters] = useState<Filters>({});
  const [page, setPage] = useState(1);

  const options = useMemo(
    () =>
      Object.fromEntries(
        FILTER_KEYS.map((k) => [k, getFilterOptions(k, locale)]),
      ) as Record<FilterKey, { value: string; label: string }[]>,
    [locale],
  );

  const filtered = useMemo(
    () =>
      projects.filter((p) =>
        FILTER_KEYS.every((k) => !filters[k] || p[k].en === filters[k]),
      ),
    [filters],
  );

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function updateFilter(key: FilterKey, value?: string) {
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
          {FILTER_KEYS.map((key) => (
            <Select
              key={key}
              placeholder={t(`filters.${key}`)}
              allowClear
              className={selectClassName}
              value={filters[key]}
              onChange={(v) => updateFilter(key, v)}
              options={options[key]}
            />
          ))}

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
                    src={item.images[0]}
                    alt={item.title[locale]}
                    width={600}
                    height={420}
                    sizes="(min-width: 640px) 25vw, 100vw"
                    className="h-40 w-full rounded-3xl object-cover sm:h-52.25"
                  />
                  <div className="flex flex-col gap-8 px-6 pb-6">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-lg font-bold text-navy-750">
                        {item.title[locale]}
                      </h2>
                      <div className="grid grid-cols-2 gap-5">
                        <Field
                          label={t("sector")}
                          value={item.sector[locale]}
                        />
                        <Field
                          label={t("section")}
                          value={item.section[locale]}
                        />
                        <Field
                          label={t("location")}
                          value={item.location[locale]}
                        />
                        <Field label={t("year")} value={item.year[locale]} />
                      </div>
                    </div>
                    <MainButton
                      preset="navLink"
                      className="justify-start!"
                      href={`/projects/${item.slug}`}
                    >
                      <span>{t("seeProjects")}</span>
                      <Arrow size={16} />
                    </MainButton>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-bold text-gray-400">{label}</p>
      <p className="text-sm font-medium text-black">{value}</p>
    </div>
  );
}

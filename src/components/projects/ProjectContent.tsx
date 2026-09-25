"use client";

import apartmants from "@/assets/apartmants.png";
import buildings from "@/assets/buildings.png";
import interiors from "@/assets/home-interiors.png";
import villas from "@/assets/villas.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import { useMemo, useState } from "react";
import { Select, Pagination } from "antd";
import Breadcrumbs from "../ui/Breadcrumbs";
import MainButton from "../ui/MainButton";
import {
  projects,
  getUniqueValues,
  type ProjectTypeKey,
} from "@/data/projects";

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

export default function ProjectContent() {
  const t = useTranslations("projectPage");
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

  function updateFilter<K extends keyof Filters>(key: K, value: Filters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1); // any filter change invalidates the current page
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
        <div className="flex flex-wrap items-center gap-3">
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

          <MainButton className="ms-auto" onClick={resetFilters}>
            {t("filters.reset")}
          </MainButton>
        </div>

        {/* Results */}
        {paged.length === 0 ? (
          <p className="py-16 text-center text-navy-900/50">
            {t("filters.noResults")}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            {paged.map((item) => (
              <div
                key={item.id}
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
                        <p className="font-bold text-gray-400">{t("sector")}</p>
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
                  <MainButton preset="navLink" className="justify-start!">
                    <span>{t("seeProjects")}</span>
                    <Arrow size={16} />
                  </MainButton>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filtered.length > PAGE_SIZE && (
          <Pagination
            current={page}
            pageSize={PAGE_SIZE}
            total={filtered.length}
            onChange={setPage}
            align="center"
          />
        )}
      </div>
    </section>
  );
}

"use client";

import ShinyText from "@/components/TextAnimations/ShinyText";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MainButton from "@/components/ui/MainButton";
import { projectGalleries } from "@/data/projectDetails";
import type { ProjectTypeKey } from "@/data/projects";
import { Share2 } from "lucide-react";
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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <ProjectGallery images={gallery} alt={detail.title} />

          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-between gap-4">
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
              <button
                aria-label={t("share")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-900/10 text-navy-900/60 hover:text-navy-900"
              >
                <Share2 size={16} />
              </button>
            </div>

            <p className="text-lg font-semibold text-heading">
              {detail.description}
            </p>

            <div className="grid grid-cols-2 gap-x-22 gap-y-4 sm:grid-cols-4">
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
                <div key={labelKey} className="flex flex-col gap-6">
                  <span className="text-xl font-bold text-gray-400">
                    {t(labelKey)}
                  </span>
                  <span className="text-xl font-medium text-black">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <MainButton className="!bg-navy-900 hover:!bg-navy-800 h-14! text-base! font-bold!">
                {t("requestSimilar")}
              </MainButton>
              <MainButton className="hover:bg-clay-700! h-14! text-base! font-bold!">
                {t("scheduleMeeting")}
              </MainButton>
              <MainButton
                type="default"
                className="!border-clay-600 !text-clay-700 hover:!bg-clay-50 h-14! text-base! font-bold!"
              >
                {t("requestPrices")}
              </MainButton>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-3xl border border-[#CDCDCD] p-6">
          <div className="flex gap-6 border-b border-[#CDCDCD]">
            {TAB_IDS.map((tabId) => (
              <button
                key={tabId}
                onClick={() => setActiveTab(tabId)}
                className="relative pb-3 text-sm sm:text-lg font-bold transition-colors"
                style={{
                  color: activeTab === tabId ? "#041338" : "rgba(11,23,48,0.4)",
                }}
              >
                {t(`tabs.${tabId}`)}
                {activeTab === tabId && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-navy-900" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-6">
            {activeTab === "challengesSolutions" && (
              <div className="grid gap-10 sm:grid-cols-2">
                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-extrabold text-black">
                    {t("challenges")}
                  </h3>
                  {detail.challenges.map((item, i) => (
                    <div
                      key={i}
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
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="text-2xl font-extrabold text-black">
                    {t("solutions")}
                  </h3>
                  {detail.solutions.map((item, i) => (
                    <div
                      key={i}
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
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "phases" && (
              <div className="flex flex-col gap-4">
                {detail.phases.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-2xl border border-[#EBEBEB] bg-white p-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-sm font-bold text-navy-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-navy-900/60">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "services" && (
              <div className="flex flex-wrap gap-3">
                {detail.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#EBEBEB] bg-white px-4 py-2 text-sm font-medium text-navy-900"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

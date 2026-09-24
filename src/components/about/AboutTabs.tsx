"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CompanyProfile from "./tabs/CompanyProfile";
import PlaceholderTab from "./tabs/PlaceholderTab";
import Breadcrumbs from "../ui/Breadcrumbs";


const TAB_IDS = [
  "companyProfile",
  "ourApproach",
  "ourHistory",
  "boardOfDirectors",
  "boardCommittees",
  "executiveTeam",
  "ourPartners",
] as const;

type TabId = (typeof TAB_IDS)[number];

// Only "companyProfile" has real content so far — everything else falls
// back to PlaceholderTab until you build the real one. To add a tab's
// content, write its component under ./tabs and drop it in here.
const TAB_CONTENT: Record<TabId, React.ComponentType> = {
  companyProfile: CompanyProfile,
  ourApproach: PlaceholderTab,
  ourHistory: PlaceholderTab,
  boardOfDirectors: PlaceholderTab,
  boardCommittees: PlaceholderTab,
  executiveTeam: PlaceholderTab,
  ourPartners: PlaceholderTab,
};

export default function AboutTabs() {
  const t = useTranslations("aboutPage.tabs");
  const [active, setActive] = useState<TabId>("companyProfile");

  const ActiveContent = TAB_CONTENT[active];

  return (
    <section className="section">
      {/* Tab bar */}
      <div className="flex bg-linear-to-l from-[#E0851A] to-[#885417]">
        {/* <span className="hidden w-1.5 shrink-0 bg-clay-500 sm:block" /> */}
        <div className="flex gap-6 overflow-x-auto px-0 sm:px-12">
          {TAB_IDS.map((id) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="shrink-0 p-5 text-lg font-bold transition-colors"
              style={{
                background: active === id ? "#E9EFFF" : "transparent",
                color: active === id ? "#303030" : "#ffffff",
              }}
            >
              {t(id)}
            </button>
          ))}
        </div>
      </div>
      {/* Breadcrumb Here */}
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      {/* Active tab's content */}
      <div className="bg-mist-50">
          <ActiveContent />
      </div>
    </section>
  );
}

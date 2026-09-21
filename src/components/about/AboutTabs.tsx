"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import CompanyProfile from "./tabs/CompanyProfile";
import PlaceholderTab from "./tabs/PlaceholderTab";


const TAB_IDS = [
  "companyProfile",
  "ourApproach",
  "ourHistory",
  "boardOfDirectors",
  "boardCommittees",
  "executiveTeam",
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
};

export default function AboutTabs() {
  const t = useTranslations("aboutPage.tabs");
  const [active, setActive] = useState<TabId>("companyProfile");

  const ActiveContent = TAB_CONTENT[active];

  return (
    <section className="section">
      {/* Tab bar */}
      <div className="flex bg-navy-900">
        {/* <span className="hidden w-1.5 shrink-0 bg-clay-500 sm:block" /> */}
        <div className="flex gap-1 overflow-x-auto px-0 sm:px-12">
          {TAB_IDS.map((id) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className="shrink-0 px-5 py-4 text-sm font-semibold transition-colors"
              style={{
                background: active === id ? "#eef1fc" : "transparent",
                color: active === id ? "#0b1730" : "rgba(255,255,255,0.65)",
              }}
            >
              {t(id)}
            </button>
          ))}
        </div>
      </div>

      {/* Active tab's content */}
      <div className="bg-mist-50 py-16 lg:py-20">
        <div className="container-page">
          <ActiveContent />
        </div>
      </div>
    </section>
  );
}

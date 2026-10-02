"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

import PlaceholderTab from "./tabs/PlaceholderTab";
import Breadcrumbs from "../ui/Breadcrumbs";
import GeneralContractingtab from "./tabs/GeneralContractingTab";
import GeneralSupplies from "./tabs/GeneralSupplies";
import IntegratedFinishing from "./tabs/IntegratedFinishing";
import ResidentialFinishingTab from "./tabs/ResidentialFinishingTab";

const TAB_IDS = [
  "generalContracting",
  "generalSupplies",
  "integratedFinishing",
  "residentialFinishing",
  "commercialAdministrativeFinishing",
  "industrialFinishing",
  "claddingFacades",
  "curtainWallsGlassFacades",
] as const;

type TabId = (typeof TAB_IDS)[number];

const TAB_CONTENT: Record<TabId, React.ComponentType> = {
  generalContracting: GeneralContractingtab,
  generalSupplies: GeneralSupplies,
  integratedFinishing: IntegratedFinishing,
  residentialFinishing: ResidentialFinishingTab,
  commercialAdministrativeFinishing: PlaceholderTab,
  industrialFinishing: PlaceholderTab,
  claddingFacades: PlaceholderTab,
  curtainWallsGlassFacades: PlaceholderTab,
};

export default function ServiceTabs() {
  const t = useTranslations("services");

  const [active, setActive] = useState<TabId>("generalContracting");

  const ActiveContent = TAB_CONTENT[active];

  const scrollerRef = useRef<HTMLDivElement>(null);

  // Drag state
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);

  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const [isDragging, setIsDragging] = useState(false);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;

    if (!el) return;

    isPointerDownRef.current = true;
    hasMovedRef.current = false;

    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = scrollerRef.current;

    if (!el || !isPointerDownRef.current) return;

    const delta = e.clientX - startXRef.current;

    // Ignore tiny mouse movements
    if (Math.abs(delta) < 5) {
      return;
    }

    // Now we know that this is a drag
    hasMovedRef.current = true;
    setIsDragging(true);

    el.scrollLeft = startScrollLeftRef.current - delta;
  }

  function onPointerUp() {
    isPointerDownRef.current = false;
    setIsDragging(false);

    // Reset after the click event has been processed
    setTimeout(() => {
      hasMovedRef.current = false;
    }, 0);
  }

  function onPointerCancel() {
    isPointerDownRef.current = false;
    hasMovedRef.current = false;
    setIsDragging(false);
  }

  function handleTabClick(id: TabId) {
    // If the user dragged the container,
    // don't treat the interaction as a click.
    if (hasMovedRef.current) {
      return;
    }

    setActive(id);
  }

  return (
    <section className="section">
      {/* Tab bar */}
      <div className="flex bg-linear-to-l from-[#E0851A] to-[#885417]">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          className={`flex gap-6 overflow-x-auto px-0 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-12 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {TAB_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => handleTabClick(id)}
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

      {/* Breadcrumbs */}
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      {/* Active tab content */}
      <div className="bg-mist-50">
        <ActiveContent />
      </div>
    </section>
  );
}

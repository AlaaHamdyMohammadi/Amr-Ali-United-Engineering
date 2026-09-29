"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import PlaceholderTab from "./tabs/PlaceholderTab";
import Breadcrumbs from "../ui/Breadcrumbs";
import GeneralContractingtab from "./tabs/GeneralContractingTab";

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
  generalSupplies: PlaceholderTab,
  integratedFinishing: PlaceholderTab,
  residentialFinishing: PlaceholderTab,
  commercialAdministrativeFinishing: PlaceholderTab,
  industrialFinishing: PlaceholderTab,
  claddingFacades: PlaceholderTab,
  curtainWallsGlassFacades: PlaceholderTab,
};

export default function ServiceTabs() {
  const t = useTranslations("services");
  const [active, setActive] = useState<TabId>("generalContracting");
  const ActiveContent = TAB_CONTENT[active];

  // Click-and-drag scrolling — native overflow-x-auto only responds to
  // touch/trackpad by default, not a mouse click-drag.
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  function onPointerDown(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    startScrollLeftRef.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (!el || !isDraggingRef.current) return;
    const delta = e.clientX - startXRef.current;
    el.scrollLeft = startScrollLeftRef.current - delta;
  }

  function endDrag(e: React.PointerEvent) {
    const el = scrollerRef.current;
    if (isDraggingRef.current) el?.releasePointerCapture(e.pointerId);
    isDraggingRef.current = false;
    setIsDragging(false);
  }

  return (
    <section className="section">
      {/* Tab bar */}
      <div className="flex bg-linear-to-l from-[#E0851A] to-[#885417]">
        <div
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className={`flex gap-6 overflow-x-auto px-0 select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-12 ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
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

      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      <div className="bg-mist-50">
        <ActiveContent />
      </div>
    </section>
  );
}

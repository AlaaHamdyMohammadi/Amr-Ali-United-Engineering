"use client";

import { useTranslations } from "next-intl";
import Breadcrumbs from "../ui/Breadcrumbs";
import ShinyText from "@/components/TextAnimations/ShinyText";

interface TermsSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

export default function TermsContent() {
  const t = useTranslations("terms");
  const sections = t.raw("sections") as TermsSection[];

  return (
    <section className="section">
      <div className="px-4 py-6 sm:px-12">
        <Breadcrumbs />
      </div>

      <div className="container-page pt-10 pb-20">
        <div className="flex flex-col gap-10 rounded-3xl border border-[#CDCDCD] bg-white p-6">
          <ShinyText
            text={t("heading")}
            speed={5}
            delay={0}
            color="#072469"
            shineColor="#A0B8D7"
            spread={120}
            direction="left"
            className="text-2xl font-bold text-heading"
          />

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h2 className="text-lg font-bold text-[#292929]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-[#707070]">
                  {paragraph}
                </p>
              ))}
              {section.points && (
                <ul className="flex flex-col gap-2">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-[#707070]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-900/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

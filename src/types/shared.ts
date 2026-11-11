import type { Localized } from "./projects";

export const SECTORS = {
  industrial: { en: "Industrial & Logistics", ar: "صناعي ولوجستي" },
  commercial: {
    en: "Commercial & Administrative",
    ar: "إنشاءات تجارية وإدارية",
  },
  residential: { en: "Residential Development", ar: "إنشاءات سكنية" },
} satisfies Record<string, Localized>;

export const LOCATIONS = {
  portSaid: { en: "Port Said", ar: "بورسعيد" },
  alexandria: { en: "Alexandria", ar: "الإسكندرية" },
  cairo: { en: "Cairo", ar: "القاهرة" },
  northSinai: { en: "North Sinai", ar: "شمال سيناء" },
  newCairo: { en: "New Cairo", ar: "القاهرة الجديدة" },
  alAshgar: { en: "Al Ashgar - 6th of October", ar: "حي الأشجار - 6 أكتوبر" },
  fifthSettlement: {
    en: "5th Settlement - New Cairo",
    ar: "التجمع الخامس - القاهرة الجديدة",
  },
  maadi: { en: "Maadi", ar: "المعادي" },
  sheikhZayed: { en: "Sheikh Zayed", ar: "الشيخ زايد" },
  heliopolis: { en: "Heliopolis, Cairo", ar: "مصر الجديدة، القاهرة" },
  nasrCity: { en: "Nasr City - Cairo", ar: "مدينة نصر - القاهرة" },
  shorouk: { en: "Al Shorouk - Cairo", ar: "حي الشروق - القاهرة" },
} satisfies Record<string, Localized>;

export const STATUS = {
  completed: { en: "Completed", ar: "منتهي" },
  ongoing: { en: "Ongoing", ar: "قيد التنفيذ" },
} satisfies Record<string, Localized>;

/** Same text in both languages (years, numbers...) */
export const both = (v: string): Localized => ({ en: v, ar: v });

/**
 * Builds the image paths for a project from the public folder:
 *   public/projects/<slug>/1.jpg, 2.jpg ... <count>.jpg
 */
export function galleryOf(slug: string, count: number, ext = "jpg"): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/projects/${slug}/${i + 1}.${ext}`,
  );
}

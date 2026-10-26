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

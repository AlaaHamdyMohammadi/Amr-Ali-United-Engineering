export type Locale = "en" | "ar";
export type Localized = Record<Locale, string>;

/** Which of the existing images/categories a project card uses */
export type ProjectTypeKey =
  | "buildings"
  | "interiors"
  | "apartments"
  | "villas";

export interface ProjectItem {
  id: string;
  /** used in the URL: /projects/[slug] */
  slug: string;
  /** only used to pick the card image */
  typeKey: ProjectTypeKey;
  title: Localized;
  sector: Localized;
  section: Localized;
  location: Localized;
  year: Localized;
  status: Localized;
  // extra main info (handy for the details page)
  client: Localized;
  area: number; // m²
  duration: Localized;
  /** Gallery images. images[0] is the cover (card, hero, main gallery image). */
  images: string[];
}

const both = (v: string): Localized => ({ en: v, ar: v });

/**
 * Builds image paths from the public folder:
 *   public/projects/<slug>/1.jpg, 2.jpg … <count>.jpg
 */
function galleryOf(slug: string, count: number, ext = "jpg"): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/projects/${slug}/${i + 1}.${ext}`,
  );
}

const SECTORS = {
  industrial: { en: "Industrial & Logistics", ar: "صناعي ولوجستي" },
  commercial: {
    en: "Commercial & Administrative",
    ar: "إنشاءات تجارية وإدارية",
  },
  residential: { en: "Residential Development", ar: "إنشاءات سكنية" },
} satisfies Record<string, Localized>;

const LOCATIONS = {
  portSaid: { en: "Port Said", ar: "بورسعيد" },
  alexandria: { en: "Alexandria", ar: "الإسكندرية" },
  cairo: { en: "Cairo", ar: "القاهرة" },
  northSinai: { en: "North Sinai", ar: "شمال سيناء" },
  newCairo: { en: "New Cairo", ar: "القاهرة الجديدة" },
} satisfies Record<string, Localized>;

const STATUS = {
  completed: { en: "Completed", ar: "منتهي" },
  ongoing: { en: "Ongoing", ar: "قيد التنفيذ" },
} satisfies Record<string, Localized>;

export const projects: ProjectItem[] = [
  {
    id: "project-1",
    slug: "fish-farm-foundations-port-said",
    typeKey: "buildings",
    title: {
      en: "Fish Farm Foundations",
      ar: "أساسات مزارع سمكية",
    },
    sector: SECTORS.industrial,
    section: {
      en: "Production Lines / Fish Farming",
      ar: "خطوط إنتاج / استزراع سمكي",
    },
    location: LOCATIONS.portSaid,
    year: both("2024"),
    status: STATUS.completed,
    client: { en: "Ministry of Agriculture", ar: "وزارة الزراعة" },
    area: 2000,
    duration: { en: "8 months", ar: "8 أشهر" },
    images: galleryOf("fish-farm-foundations-port-said", 13),
  },
  {
    id: "project-2",
    slug: "shrimp-fishing-building-port-said",
    typeKey: "buildings",
    title: {
      en: "Shrimp Fishing Building Finishing",
      ar: "تشطيب مبنى لصيد جمبري / صيد البحر",
    },
    sector: SECTORS.commercial,
    section: {
      en: "Shared Workspaces / Service & Admin Buildings",
      ar: "مساحات وبيئات عمل مشتركة / مبانٍ خدمية وإدارية",
    },
    location: LOCATIONS.portSaid,
    year: both("2020"),
    status: STATUS.completed,
    client: { en: "Sayad El Bahr", ar: "صياد البحر" },
    area: 630,
    duration: { en: "4 months", ar: "4 أشهر" },
    images: galleryOf("shrimp-fishing-building-port-said", 19),
  },
  {
    id: "project-3",
    slug: "dice-clothing-stores-alexandria",
    typeKey: "interiors",
    title: {
      en: "Dice Ready-to-Wear Stores",
      ar: "متاجر شركة دايس للملابس الجاهزة",
    },
    sector: SECTORS.commercial,
    section: {
      en: "Retail Fit-Out",
      ar: "تجهيزات تجارية متكاملة / محلات تجارية",
    },
    location: LOCATIONS.alexandria,
    year: both("2020"),
    status: STATUS.completed,
    client: { en: "Dice Ready-to-Wear", ar: "شركة دايس للملابس الجاهزة" },
    area: 470,
    duration: { en: "60 days", ar: "60 يوم" },
    images: galleryOf("dice-clothing-stores-alexandria", 7),
  },
  {
    id: "project-4",
    slug: "healthy-pharmacies-cairo",
    typeKey: "interiors",
    title: {
      en: "Healthy Pharmacies",
      ar: "إنشاء صيدليات هيلثي",
    },
    sector: SECTORS.commercial,
    section: {
      en: "Premium Commercial Finishing / Healthcare",
      ar: "تشطيبات إدارية وتجارية مميزة / قطاع الرعاية الصحية والطبية",
    },
    location: LOCATIONS.cairo,
    year: both("2022"),
    status: STATUS.completed,
    client: { en: "Healthy Pharmacies", ar: "صيدليات هيلثي" },
    area: 250,
    duration: { en: "30 days", ar: "30 يوم" },
    images: galleryOf("healthy-pharmacies-cairo", 7),
  },
  {
    id: "project-5",
    slug: "concrete-fish-farms-north-sinai",
    typeKey: "buildings",
    title: {
      en: "Concrete Fish Farms",
      ar: "إنشاء مزارع سمكية (أحواض خرسانية)",
    },
    sector: SECTORS.industrial,
    section: {
      en: "Production Lines / Intensive Fish Farming",
      ar: "خطوط إنتاج / استزراع سمكي مكثف",
    },
    location: LOCATIONS.northSinai,
    year: both("2025"),
    status: STATUS.ongoing,
    client: { en: "Italian Company", ar: "الشركة الإيطالية" },
    area: 2150,
    duration: { en: "24 months", ar: "سنتان (24 شهراً)" },
    images: galleryOf("concrete-fish-farms-north-sinai", 11),
  },
  {
    id: "project-6",
    slug: "central-labs-new-cairo",
    typeKey: "interiors",
    title: {
      en: "Central Labs Finishing",
      ar: "تشطيبات المعامل المركزية لجهاز حماية وتنمية البحيرات والثروة السمكية",
    },
    sector: SECTORS.industrial,
    section: {
      en: "Workshops, Labs & Specialized Laboratories",
      ar: "ورش ومعامل ومختبرات تخصصية",
    },
    location: LOCATIONS.newCairo,
    year: both("2020"),
    status: STATUS.completed,
    client: {
      en: "Fish Wealth Authority (Cabinet)",
      ar: "جهاز الثروة السمكية التابع لمجلس الوزراء",
    },
    area: 400,
    duration: { en: "2 months", ar: "شهرين" },
    images: galleryOf("central-labs-new-cairo", 4),
  },
  {
    id: "project-7",
    slug: "border-guard-buildings-port-said",
    typeKey: "apartments",
    title: {
      en: "Border Guard Buildings",
      ar: "إنشاءات وتجهيزات مباني حرس الحدود",
    },
    sector: SECTORS.residential,
    section: {
      en: "Integrated Residential Finishing / Service Buildings",
      ar: "تشطيبات وتجهيزات سكنية متكاملة / مبانٍ خدمية",
    },
    location: LOCATIONS.portSaid,
    year: both("2020"),
    status: STATUS.completed,
    client: { en: "Border Guard", ar: "حرس الحدود" },
    area: 720,
    duration: { en: "14 months", ar: "14 شهراً" },
    images: galleryOf("border-guard-buildings-port-said", 13),
  },
];

export type FilterKey = "sector" | "section" | "location" | "year" | "status";

/**
 * Unique filter options for a field. `value` is always the English string
 * (stable across languages), `label` is shown in the current locale.
 */
export function getFilterOptions(key: FilterKey, locale: Locale) {
  const seen = new Map<string, string>();
  for (const p of projects) {
    const v = p[key];
    if (!seen.has(v.en)) seen.set(v.en, v[locale]);
  }
  return Array.from(seen, ([value, label]) => ({ value, label }));
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const PROJECT_SLUGS = projects.map((p) => p.slug);

export function isProjectSlug(value: string) {
  return PROJECT_SLUGS.includes(value);
}

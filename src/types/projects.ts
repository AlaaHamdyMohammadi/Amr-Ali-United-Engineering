export type Locale = "en" | "ar";
export type Localized<T = string> = Record<Locale, T>;

export type FilterKey = "sector" | "section" | "location" | "year" | "status";

/** One challenge and the solution that was applied to it */
export interface ChallengeItem {
  title: string;
  challenge: string;
  solution: string;
}

export interface PhaseItem {
  title: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  /** URL: /projects/[slug]  —  also the folder name: public/projects/[slug]/ */
  slug: string;

  // ── main info (cards, filters, details header) ──
  title: Localized;
  sector: Localized;
  section: Localized;
  location: Localized;
  year: Localized;
  status: Localized;
  client: Localized;
  area: number; // m²
  duration: Localized;

  // ── details page ──
  description: Localized;
  materials: Localized<string[]>;
  challenges: Localized<ChallengeItem[]>;
  phases: Localized<PhaseItem[]>;

  /** Full gallery. images[0] is the cover (cards, hero, main gallery image). */
  images: string[];
}


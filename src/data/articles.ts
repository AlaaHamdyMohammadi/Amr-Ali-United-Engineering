export type ArticleTypeKey =
  | "constructions"
  | "architecture"
  | "metals"
  | "altitude";

export interface Article {
  id: number;
  typeKey: ArticleTypeKey;
}

const keys: ArticleTypeKey[] = [
  "constructions",
  "architecture",
  "metals",
  "altitude",
];

// Mock data: replace with real API/data later
export const articles: Article[] = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  typeKey: keys[i % keys.length],
}));

export const ARTICLE_TYPE_KEYS: ArticleTypeKey[] = [
  "constructions",
  "architecture",
  "metals",
  "altitude",
];

export function isArticleTypeKey(value: string): value is ArticleTypeKey {
  return (ARTICLE_TYPE_KEYS as string[]).includes(value);
}

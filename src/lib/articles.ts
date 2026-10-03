import type { StaticImageData } from "next/image";
import altitude from "@/assets/altitude.jpeg";
import architecture from "@/assets/architecture2.jpeg";
import constructions from "@/assets/constructions2.jpeg";
import metals from "@/assets/metals.jpeg";
import type { ArticleTypeKey } from "@/data/articles";

export const articlesImages: Record<ArticleTypeKey, StaticImageData> = {
  constructions,
  architecture,
  metals,
  altitude,
};

// Optional: add a video URL per article. If set, the play button plays it.
export const articlesVideos: Partial<Record<ArticleTypeKey, string>> = {
  // constructions: "/videos/constructions.mp4",
};
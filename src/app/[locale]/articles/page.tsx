import ArticleContent from "@/components/articles/ArticleContent";
import ArticleHero from "@/components/articles/ArticleHero";

export default function ArticlesPage() {
  return (
    <main className="flex flex-col gap-0">
      <ArticleHero />
      <ArticleContent />
    </main>
  );
}

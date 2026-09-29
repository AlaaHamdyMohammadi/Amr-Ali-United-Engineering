import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ARTICLE_TYPE_KEYS, isArticleTypeKey } from "@/data/articles";
import ArticleDetailHero from "@/components/articles/ArticleDetailHero";
import ArticleDetailContent from "@/components/articles/ArticleDetailContent";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    ARTICLE_TYPE_KEYS.map((id) => ({ locale, id })),
  );
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id } = await params;

  if (!isArticleTypeKey(id)) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-0">
      <ArticleDetailHero id={id} />
      <ArticleDetailContent id={id} />
    </main>
  );
}

import Link from "next/link";
import { helpArticles, findArticleBySlug } from "../../../../data/helpArticles";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return helpArticles.map(a => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = findArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold">Article not found</h1>
          <p className="mt-4 text-gray-500">We couldn't find the article you're looking for.</p>
          <div className="mt-6">
            <Link href="/help" className="text-indigo-400">Back to Help</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">{article.title}</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">{article.excerpt}</p>
        </div>

        <article className="prose prose-invert max-w-none text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/><br/>') }} />

        <div className="mt-12">
          <Link href="/help" className="inline-flex items-center px-6 py-3 bg-gray-800/60 border border-white/10 rounded-xl text-white font-semibold">Back to Help</Link>
        </div>
      </div>
    </div>
  );
}

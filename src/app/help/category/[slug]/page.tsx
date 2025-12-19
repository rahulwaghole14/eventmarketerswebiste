import Link from "next/link";
import { categories, articlesByCategory } from "../../../../data/helpArticles";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return categories.map(c => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find(c => c.slug === slug);
  const articles = articlesByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold">Category not found</h1>
          <p className="mt-4 text-gray-500">We couldn't find the category you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white">{category.title}</h1>
        </div>

        <div className="space-y-6">
          {articles.map(article => (
            <div key={article.slug} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{article.title}</h2>
                  <p className="text-gray-400 mt-2">{article.excerpt}</p>
                </div>
                <div>
                  <Link href={`/help/article/${article.slug}`} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white font-semibold">
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {articles.length === 0 && (
            <div className="text-center text-gray-400">No articles in this category yet.</div>
          )}
        </div>

        <div className="mt-12 text-center max-w-3xl mx-auto text-lg text-gray-300">
          {category.description}
        </div>
      </div>
    </div>
  );
}

import { newsData } from "@/data/newsData";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return newsData.map((item) => ({
    category: item.category.toLowerCase().replace(/\s+/g, "-"),
    slug: item.slug,
  }));
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  const article = newsData.find(
    (item) =>
      item.slug === slug &&
      item.category.toLowerCase() === category.toLowerCase()
  );

  if (!article) {
    return (
      <section className="w-11/12 mx-auto py-20 text-center">
        <p className="mb-6">Article not found!</p>
        <p className="text-sm text-gray-500">
          Looking for: {category}/{slug}
        </p>
        <Link
          href="/news"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          &larr; Back to News
        </Link>
      </section>
    );
  }

  return (
    <section className="w-11/12 mx-auto py-20">
      <Link
        href="/news"
        className="inline-block mb-6 text-blue-600 hover:underline"
      >
        &larr; Back to News
      </Link>

      <h1 className="text-4xl font-bold mb-5">{article.title}</h1>
      <p className="text-gray-500 mb-5">{article.date}</p>
      <div className="relative h-80 w-full mb-5">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <p className="text-gray-700">{article.content}</p>
    </section>
  );
}

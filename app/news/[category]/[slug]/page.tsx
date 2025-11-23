import { newsData } from "@/data/newsData";
import Image from "next/image";

export async function generateStaticParams() {
  return newsData.map((item) => ({
    category: item.category.toLowerCase().replace(/\s+/g, "-"),
    slug: item.slug,
  }));
}

export default function NewsArticle({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const { category, slug } = params;

  const article = newsData.find(
    (item) =>
      item.slug === slug &&
      item.category.toLowerCase().replace(/\s+/g, "-") ===
        category.toLowerCase()
  );

  if (!article) return <p className="text-center py-20">Article not found!</p>;

  return (
    <section className="w-11/12 mx-auto py-20">
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

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { newsData } from "@/data/newsData";

export default function NewsPage() {
  return (
    <section className="w-11/12 mx-auto py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">Latest News</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Stay updated with industry insights, tech innovations, and company
          stories.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsData.map((item) => (
          <Link
            href={`/news/${item.category.toLowerCase().replace(/\s+/g, "-")}/${
              item.slug
            }`}
            key={item.id}
            className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all"
          >
            <div className="relative h-52 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <span className="text-xs text-blue-600 font-semibold tracking-wide uppercase">
                {item.category}
              </span>
              <h3 className="text-lg font-semibold mt-2 mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

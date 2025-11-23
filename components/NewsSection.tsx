"use client";
import { useEffect, useState } from "react";
import { newsData } from "@/data/newsData";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsSection() {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const totalItems = newsData.length;
  const maxIndex = totalItems - itemsPerView;

  const next = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      className="w-[95%] md:w-[90%] mx-auto py-16"
      aria-labelledby="news-heading"
    >
      <h2 id="news-heading" className="text-3xl md:text-4xl font-bold mb-8">
        Latest News
      </h2>

      <div className="relative group">
        <div
          className="hidden md:block overflow-hidden"
          role="region"
          aria-label="News carousel"
          aria-live="polite"
        >
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
          >
            {newsData.map((item, idx) => (
              <article
                key={item.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / itemsPerView}%` }}
                aria-label={`News article ${idx + 1} of ${totalItems}`}
              >
                <div className="bg-white overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={`${item.title} featured image`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span
                        className="uppercase font-semibold"
                        aria-label={`Category: ${item.category}`}
                      >
                        {item.category}
                      </span>
                      <span
                        className="w-6 h-0.5 bg-blue-600"
                        aria-hidden="true"
                      ></span>
                      <time dateTime={new Date(item.date).toISOString()}>
                        {item.date}
                      </time>
                    </div>
                    <h3 className="text-lg font-semibold uppercase mb-4">
                      {item.title}
                    </h3>
                    <Link
                      href={`/news/${item.category.toLowerCase()}/${item.slug}`}
                      className="text-blue-700 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>

        <div
          className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          role="region"
          aria-label="Scrollable news articles"
          tabIndex={0}
        >
          <div className="flex gap-4">
            {newsData.map((item, idx) => (
              <article
                key={item.id}
                className="shrink-0 w-[85%] snap-center"
                aria-label={`News article ${idx + 1} of ${totalItems}`}
              >
                <div className="bg-white overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={`${item.title} featured image`}
                    className="w-full h-60 object-cover"
                    loading="lazy"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span
                        className="uppercase font-semibold"
                        aria-label={`Category: ${item.category}`}
                      >
                        {item.category}
                      </span>
                      <span
                        className="w-6 h-0.5 bg-blue-600"
                        aria-hidden="true"
                      ></span>
                      <time dateTime={new Date(item.date).toISOString()}>
                        {item.date}
                      </time>
                    </div>
                    <h3 className="text-lg font-semibold uppercase mb-4">
                      {item.title}
                    </h3>
                    <Link
                      href={`/news/${item.category.toLowerCase()}/${item.slug}`}
                      className="text-blue-700 font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          onClick={prev}
          className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-[#0055a4] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Show previous news articles"
          disabled={index === 0}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          onClick={next}
          className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-[#0055a4] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Show next news articles"
          disabled={index >= maxIndex}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing articles {index + 1} to{" "}
        {Math.min(index + itemsPerView, totalItems)} of {totalItems}
      </div>
    </section>
  );
}

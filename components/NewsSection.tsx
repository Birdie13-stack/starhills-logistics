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
    <section className="w-[90%] md:w-[90%] mx-auto pb-7 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Latest News</h2>

      <div className="relative group">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 18 }}
          >
            {newsData.map((item) => (
              <div
                key={item.id}
                className="shrink-0 px-2 md:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white overflow-hidden h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="uppercase font-semibold">
                        {item.category}
                      </span>
                      <span className="w-6 h-0.5 bg-[#0055a4]"></span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold uppercase mb-4 transition-all duration-300 hover:text-[#0a84ff]">
                      {item.title}
                    </h3>
                    <Link
                      href={`/news/${item.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}/${item.slug}`}
                      className="text-[#0a84ff] font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={prev}
          className="absolute -left-3.5 md:-left-8 top-1/3 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-[#0055a4] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute -right-3.5 md:-right-8  top-1/3 -translate-y-1/2 bg-black text-white p-2 rounded-full shadow hover:bg-[#0055a4] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

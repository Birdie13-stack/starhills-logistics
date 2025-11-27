"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { newsData } from "@/data/newsData";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentNews = newsData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <section className="relative h-[50vh] bg-linear-to-br from-[#0055A4] to-[#0A84FF] flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Latest News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Stay updated with industry insights, tech innovations, and company
            stories
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 bg-linear-to-b from-white to-[#f4f7fa]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentNews.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={`/news/${item.category
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${item.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#0055A4] text-white text-xs font-bold uppercase tracking-wide rounded-full">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <time dateTime={new Date(item.date).toISOString()}>
                        {item.date}
                      </time>
                    </div>

                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-3 line-clamp-2 group-hover:text-[#0055A4] transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-[#0055A4] font-semibold group-hover:gap-2 transition-all">
                      <span>Read more</span>
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <nav
              aria-label="News pagination"
              className="flex justify-center items-center gap-2"
            >
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                        currentPage === page
                          ? "bg-[#0055A4] text-white shadow-lg"
                          : "border border-gray-300 hover:bg-gray-100"
                      }`}
                      aria-label={`Go to page ${page}`}
                      aria-current={currentPage === page ? "page" : undefined}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          )}

          <p className="text-center text-gray-600 mt-6">
            Showing {startIndex + 1}-{Math.min(endIndex, newsData.length)} of{" "}
            {newsData.length} articles
          </p>
        </div>
      </section>
    </div>
  );
}

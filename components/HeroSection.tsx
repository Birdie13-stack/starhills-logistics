"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/images/hero1.jpg",
      title: "Logistics Without Limits",
      subtitle: "Fast, reliable shipping across Nigeria and beyond",
    },
    {
      url: "/images/hero2.jpg",
      title: "Your World, Delivered",
      subtitle: "International freight solutions built for speed and security",
    },
    {
      url: "/images/hero3.jpg",
      title: "Store Smart, Ship Faster",
      subtitle: "Flexible warehousing that scales with your business",
    },
  ];

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <motion.h1
                className="text-white font-bold text-5xl md:text-7xl mb-4 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slides[currentIndex].title}
              </motion.h1>

              <motion.p
                className="text-white/90 text-xl md:text-2xl font-light"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 flex gap-4"
              >
                <button className="bg-[#0a84ff] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0070dd] transition-colors">
                  Get a Quote
                </button>
                <Link
                  href="/services"
                  className="bg-white/10 backdrop-blur-sm cursor-pointer text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors border border-white/30"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/30"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all border border-white/30"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

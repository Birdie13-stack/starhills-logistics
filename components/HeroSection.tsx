"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/images/hero1.jpg",
      caption: "We provide seamless shipping solutions tailored to your needs.",
    },
    { url: "/images/hero2.jpg", caption: "International Shipping Made Easy" },
    { url: "/images/hero3.jpg", caption: "Smart Warehousing Solutions" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? slides.length - 1 : prev - 1));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: "0%", opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentIndex}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: "tween", duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6">
            <motion.h1
              key={slides[currentIndex].caption}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-white font-bold text-4xl md:text-7xl max-w-3xl ml-10 text-left drop-shadow-lg"
            >
              {slides[currentIndex].caption}
            </motion.h1>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/60 text-2xl font-bold"
      >
        &#8249;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/60 text-2xl font-bold"
      >
        &#8250;
      </button>
    </section>
  );
}

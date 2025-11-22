"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      url: "/images/hero1.jpg",
      caption: "We provide seamless shipping slutions tailored to your needs.",
    },
    { url: "/images/hero2.jpg", caption: "International Shipping Made Easy" },
    { url: "/images/hero3.jpg", caption: "Smart Warehousing Solutions" },
  ];

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % slides.length);
  //     }, 3000);

  //     return () => clearInterval(timer);
  //   }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
              STARHILLS LOGISTICS LTD
            </h1>
            <p className="text-white text-md md:text-xl font-medium text-center drop-shadow-lg">
              {" "}
              {slide.caption}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/60 text-2xl font-bold"
      >
        &#8249;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/40 text-white w-10  h-10 flex items-center justify-center rounded-full hover:bg-black/60 text-2xl font-bold"
      >
        &#8250;
      </button>
    </section>
  );
}

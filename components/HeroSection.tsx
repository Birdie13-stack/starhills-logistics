"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const slides = useMemo(
    () => [
      {
        title: "Logistics Without Limits",
        subtitle: "Fast, reliable shipping across Nigeria and beyond",
      },
      {
        title: "Your World, Delivered",
        subtitle: "International freight handled with urgency and care",
      },
      {
        title: "Store Smart, Ship Faster",
        subtitle: "Warehousing and delivery built for growth",
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden group"
      aria-label="Hero section with video background"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 w-full h-full" onClick={togglePlayPause}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover cursor-pointer"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-festive.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <AnimatePresence>
        {(isHovering || !isPlaying) && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={togglePlayPause}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white p-8 rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-4 focus:ring-white"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-13 h-13" />
            ) : (
              <Play className="w-13 h-13 ml-1" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center px-6 md:px-12 max-w-7xl mx-auto pb-20 pointer-events-none">
        <div className="max-w-3xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">
                {slides[currentIndex].title}
              </h1>
              <p className="text-white/90 text-xl md:text-2xl font-light mb-8 drop-shadow-lg">
                {slides[currentIndex].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-[#0a84ff] hover:bg-[#006cd1] text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="border border-white/40 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={toggleMute}
        className="absolute top-15 md:top-6 right-6 z-30 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all focus:outline-none focus:ring-2 focus:ring-white"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>

      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </section>
  );
}

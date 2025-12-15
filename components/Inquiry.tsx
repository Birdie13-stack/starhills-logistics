"use client";

import React, { useState, useRef } from "react";
import { Mail, Pause, Play, Volume2, VolumeX } from "lucide-react";

export default function Inquiry() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };
  return (
    <section
      className="relative w-11/12 mb-6 mx-auto h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center"
      role="region"
      aria-labelledby="inquiry-heading"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/videos/hero-festive.mp4" type="video/mp4" />
        <track
          kind="captions"
          src="/captions/hero-captions.vtt"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>

      <div className="relative z-10 max-w-2xl px-6 md:px-12 ">
        <h2
          id="inquiry-heading"
          className="text-white text-3xl md:text-5xl font-extrabold mb-4"
        >
          FAST & RELIABLE
        </h2>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6">
          Have a request? Reach out and we&apos;ll respond with clarity and
          speed. Your satisfaction starts with us.
        </p>

        <div className="btn-wrapper">
          <a
            href="mailto:Starhillslogistics@gmail.com"
            className="cp-btn inline-flex items-center gap-2 px-8 py-3 text-white font-semibold uppercase border-2 border-white relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all"
            aria-label="Send inquiry via email to Starhillslogistics@gmail.com"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span>Send Request</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-3 z-3">
        <button
          onClick={togglePlay}
          className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={22} /> : <Play size={22} />}
        </button>

        <button
          onClick={toggleMute}
          className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
        </button>
      </div>
    </section>
  );
}

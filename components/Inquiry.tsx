"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Inquiry() {
  return (
    <section
      className="relative w-11/12 mx-auto h-[50vh] md:h-[60vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('images/hero1.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-2xl px-6 md:px-12">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 animate-slideUp">
          FAST & RELIABLE
        </h2>

        <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 animate-slideUp delay-200">
          Send us your inquiry and we’ll prepare a tailored, obligation-free
          quote. Every request is handled with speed, clarity, and
          professionalism.
        </p>

        {/* <a
          href="mailto:info@starhillslogistics.com"
          className="cp-btn inline-flex items-center gap-2 px-8 py-3 text-white font-semibold uppercase border-2 border-[#0091ea] relative overflow-hidden"
        >
          Send Request
        </a> */}

        {/* <div className=" relative inline-block">
          <a
            href="#"
            className="cp-btn inline-block py-2 px-8 text-white font-semibold uppercase text-sm bg-transparent border border-gray-700"
          >
            Send Request
          </a>
        </div> */}

        <div className="btn-wrapper">
          <a href="mailto:info@starhillslogistics.com" className="cp-btn">
            <Mail className="w-5 h-5" />
            Send Request
          </a>
        </div>
      </div>
    </section>
  );
}

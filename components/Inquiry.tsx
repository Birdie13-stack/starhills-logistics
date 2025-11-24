"use client";

import React from "react";
import { Mail } from "lucide-react";

export default function Inquiry() {
  return (
    <section
      className="relative w-11/12 mb-6 mx-auto h-[50vh] md:h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: "url('images/request.png')",
      }}
      role="region"
      aria-labelledby="inquiry-heading"
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      <div className="relative z-10 max-w-2xl px-6 md:px-12">
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
            href="mailto:info@starhillslogistics.com"
            className="cp-btn inline-flex items-center gap-2 px-8 py-3 text-white font-semibold uppercase border-2 border-white relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black transition-all"
            aria-label="Send inquiry via email to info@starhillslogistics.com"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span>Send Request</span>
          </a>
        </div>
      </div>
    </section>
  );
}

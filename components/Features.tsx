"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="py-5 md:pt-10 md:px-30 px-5 bg-white"
      aria-labelledby="features-about-section"
    >
      <h2 id="features-about-section" className="sr-only">
        Key Features and About Us
      </h2>

      <div className="grid md:grid-cols-2 md:gap-12 mb-5 md:mb-0">
        <div>
          <h3
            id="key-features-heading"
            className="text-primary font-bold text-md mb-2 tracking-wide"
          >
            KEY FEATURES
          </h3>

          <div role="list" aria-labelledby="key-features-heading">
            <FeatureItem
              title="100% Secure Handling"
              text="Your shipments stay protected from pickup to delivery. Our strict processes, trained staff, and real-time monitoring ensure everything arrives safely and exactly as expected."
            />

            <FeatureItem
              title="Speed You Can Trust"
              text="Delays can be costly, so we don't allow them. Our operations are built for efficiency, supported by technology and a dedicated team that delivers on time, every time."
            />
          </div>
        </div>

        <div ref={ref}>
          <h3
            id="about-us-heading"
            className="text-primary font-bold text-md mb-2 tracking-wide"
          >
            ABOUT US
          </h3>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
            aria-labelledby="about-us-heading"
          >
            Between pickup and delivery—there&apos;s{" "}
            <span className="text-[#0a84ff]">STARHILLS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-gray-700 text-lg leading-relaxed"
          >
            We provide end-to-end logistics solutions for individuals and
            businesses across Nigeria and internationally.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-gray-700 text-lg leading-relaxed mt-3"
          >
            With multiple operational hubs and a growing network, Starhills
            Logistics is quickly becoming one of the most dependable logistics
            partners in the country.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, text }: { title: string; text: string }) {
  return (
    <article className="mb-8 flex items-start gap-4 group" role="listitem">
      <CheckCircle
        className="w-15 h-15  text-primary text-[#0a84ff] transition-all duration-300 group-hover:text-black shrink-0"
        aria-hidden="true"
      />
      <div>
        <h4 className="text-xl font-semibold mb-1">{title}</h4>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
    </article>
  );
}

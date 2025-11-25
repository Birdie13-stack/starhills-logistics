"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaNetworkWired,
  FaTruck,
  FaGlobe,
  FaBoxes,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Image from "next/image";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const whyChooseUs = [
    {
      icon: <FaShieldAlt size={40} />,
      title: "100% Secure",
      description:
        "Your shipments are protected with strict processes and real-time monitoring",
    },
    {
      icon: <FaClock size={40} />,
      title: "Always On Time",
      description:
        "We deliver on schedule, every time. Delays cost you, so we don't allow them",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      description:
        "Our team is always available to answer questions and solve problems",
    },
    {
      icon: <FaNetworkWired size={40} />,
      title: "Wide Network",
      description:
        "Operating from multiple hubs across Nigeria with global partnerships",
    },
  ];

  const stats = [
    {
      icon: <FaGlobe size={40} />,
      number: "220+",
      label: "Countries Worldwide",
    },
    {
      icon: <FaBoxes size={40} />,
      number: "1,000+",
      label: "Deliveries Completed",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      number: "10+",
      label: "Nigerian Cities",
    },
    { icon: <FaTruck size={40} />, number: "5+", label: "Years of Excellence" },
  ];

  return (
    <div className="w-full">
      <section
        className="relative h-[60vh] w-full"
        aria-label="About us hero image"
      >
        <Image
          src="/images/hero2.jpg"
          alt="Starhills Logistics operations and delivery services"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center"
          aria-hidden="true"
        >
          <div className="container mx-auto px-6 md:px-12">
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
              About Us
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl">
              Moving goods, building trust, delivering excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-[#0055A4] mb-8"
          >
            Who We Are
          </h2>
          <p className="text-xl text-neutral/80 leading-relaxed mb-6">
            Starhills is a provider of end-to-end logistics solutions to
            businesses and institutions across Nigeria. We are currently among
            the top logistics providers in the country, operating from multiple
            hubs across Nigeria.
          </p>
          <p className="text-lg text-neutral/70 leading-relaxed">
            We offer a wide array of express, courier and logistic support
            solutions aimed at helping customers re-engineer and re-invent their
            businesses to compete successfully in an ever-changing marketplace,
            with the final objective of safely and promptly delivering all our
            customers&apos; consignments as expected.
          </p>
        </div>
      </section>

      <section
        className="py-16 bg-[#0055A4] text-white"
        aria-labelledby="stats-heading"
      >
        <h2 id="stats-heading" className="sr-only">
          Our Achievements
        </h2>
        <div className="container mx-auto px-6">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            role="list"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                role="listitem"
              >
                <div className="mb-4 text-[#0A84FF]" aria-hidden="true">
                  {stat.icon}
                </div>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-[#f4f7fa]"
        aria-labelledby="why-choose-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <h2
            id="why-choose-heading"
            className="text-4xl md:text-5xl font-bold text-center text-[#0055A4] mb-16"
          >
            Why Choose Us
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
          >
            {whyChooseUs.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
                role="listitem"
                tabIndex={0}
              >
                <div
                  className="inline-flex items-center justify-center w-20 h-20 bg-[#0055A4] text-white rounded-full mb-4"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-white"
        aria-labelledby="mission-vision-heading"
      >
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and Vision
        </h2>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative bg-[#0055A4] text-white p-10 rounded-xl overflow-hidden group hover:scale-105 transition-transform"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                aria-hidden="true"
              ></div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed relative z-10">
                To provide fast, secure and reliable logistic services through
                technology-driven solutions that ensure every delivery is
                smooth, trackable, and stress-free for both businesses and
                individuals.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-[#0A84FF] text-white p-10 rounded-xl overflow-hidden group hover:scale-105 transition-transform"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"
                aria-hidden="true"
              ></div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed relative z-10">
                To become Africa&apos;s most trusted and efficient delivery
                partner, redefining logistics with innovation, transparency, and
                customer-first excellence.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

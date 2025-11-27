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
import Link from "next/link";

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
      number: "10,000+",
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
      {/* Hero Section */}
      <section
        className="relative h-[70vh] w-full"
        aria-label="About us hero image"
      >
        <Image
          src="/images/hero2.jpg"
          alt="Starhills Logistics operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-6 md:px-12 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
                About Us
              </h1>
              <p className="text-white/90 text-2xl md:text-3xl max-w-2xl font-light drop-shadow-lg">
                Moving goods, building trust, delivering excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-12 items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <video
                src="/videos/about-us.mp4"
                controls
                playsInline
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            <div>
              <h2
                id="about-heading"
                className="text-5xl mt-20 md:text-6xl font-bold text-[#0055A4] mb-6"
              >
                Who We Are
              </h2>
              <p className="text-xl md:text-2xl text-neutral/80 leading-relaxed mb-10">
                Starhills provides end-to-end logistics solutions to businesses
                and institutions across Nigeria. We are among the top providers,
                operating from multiple hubs nationwide.
              </p>
              <p className="text-lg md:text-xl text-neutral/70 leading-relaxed mb-10">
                We offer comprehensive express, courier, and logistics services
                that empower businesses to evolve, optimize operations, and
                remain competitive. Above all, we are committed to ensuring
                every consignment arrives safely and on schedule.
              </p>

              <ul className="mb-10 space-y-2 text-neutral/70 text-lg">
                <li>✔ Fast, reliable delivery across Nigeria</li>
                <li>✔ Nationwide coverage with multiple hubs</li>
                <li>✔ Customer-first logistics experience</li>
                <li>✔ Real-time tracking and support</li>
              </ul>

              <Link
                href="/contact"
                className="inline-block bg-[#0055A4] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#004080] transition-shadow shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section
        className="py-20 bg-linear-to-br from-[#0055A4] to-[#0A84FF] text-white relative overflow-hidden"
        aria-labelledby="stats-heading"
      >
        <div
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full"
          aria-hidden="true"
        />

        <h2 id="stats-heading" className="sr-only">
          Our Achievements
        </h2>

        <div className="container mx-auto px-6 relative z-10">
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
            role="list"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
                role="listitem"
              >
                <div
                  className="mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-sm"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>

                <div
                  className="text-5xl md:text-6xl font-extrabold mb-3"
                  aria-label={`${stat.number} ${stat.label}`}
                >
                  {stat.number}
                </div>

                <div className="text-white/90 text-base md:text-lg font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#f4f7fa]">
        <div className="container mx-auto max-w-7xl text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0055A4] mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
            We combine reliability, speed, and care in every delivery.
          </p>
        </div>

        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition"
            >
              <div className="w-24 h-24 mx-auto bg-[#0055A4] text-white rounded-2xl mb-6 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-neutral/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="py-24 px-6 bg-white"
        aria-labelledby="mission-vision-heading"
      >
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and Vision
        </h2>

        <div className="container mx-auto max-w-7xl">
          <motion.div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative bg-linear-to-br from-[#0055A4] to-[#003d7a] text-white p-12 rounded-3xl overflow-hidden group hover:scale-105 transition-transform shadow-2xl"
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"
                aria-hidden="true"
              />

              <h3 className="text-4xl font-bold mb-6 relative z-10">
                Our Mission
              </h3>
              <p className="text-white/95 leading-relaxed text-lg relative z-10">
                To provide fast, secure, and reliable logistics services through
                technology-driven solutions that ensure every delivery is
                smooth, trackable, and stress-free for both businesses and
                individuals.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-linear-to-br from-[#0A84FF] to-[#006cd1] text-white p-12 rounded-3xl overflow-hidden group hover:scale-105 transition-transform shadow-2xl"
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"
                aria-hidden="true"
              />

              <h3 className="text-4xl font-bold mb-6 relative z-10">
                Our Vision
              </h3>
              <p className="text-white/95 leading-relaxed text-lg relative z-10">
                To become Africa&apos;s most trusted and efficient delivery
                partner, redefining logistics with innovation, transparency, and
                customer-first excellence.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-linear-to-r from-[#0055A4] to-[#0A84FF] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Work with Us?
        </h2>
        <p className="text-xl text-white/85 mb-8">
          Let’s discuss how we can support your logistics needs.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#0055A4] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;

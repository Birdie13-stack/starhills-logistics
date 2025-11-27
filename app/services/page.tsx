"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaGlobe, FaWarehouse, FaShippingFast } from "react-icons/fa";
import Link from "next/link";

const servicesGrid = [
  {
    title: "Express Delivery",
    icon: <FaShippingFast size={40} aria-hidden="true" />,
    description:
      "Same-day and next-day delivery services for urgent shipments across all major cities.",
  },
  {
    title: "Freight Services",
    icon: <FaTruck size={40} aria-hidden="true" />,
    description:
      "Heavy cargo and bulk shipping solutions with dedicated fleet and tracking.",
  },
  {
    title: "International Shipping",
    icon: <FaGlobe size={40} aria-hidden="true" />,
    description:
      "Seamless cross-border logistics with customs clearance and door-to-door delivery.",
  },
  {
    title: "Warehousing",
    icon: <FaWarehouse size={40} aria-hidden="true" />,
    description:
      "Secure storage facilities with inventory management and distribution services.",
  },
];

const highlightedServices = [
  {
    title: "Specialized Handling",
    description:
      "We provide specialized handling for sensitive cargo ensuring safety and security.",
  },
  {
    title: "Inventory Management",
    description:
      "Secure inventory management with detailed reporting and tracking.",
  },
  {
    title: "Packaging & Labelling",
    description: "Professional packaging and labelling to protect your goods.",
  },
  {
    title: "Pick & Pack",
    description: "Efficient pick-and-pack services for all shipment sizes.",
  },
];

const ServicesPage = () => {
  const specialServicesRef = useRef(null);
  const isSpecialServicesInView = useInView(specialServicesRef, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="w-full">
      <section
        className="relative h-[70vh] w-full"
        aria-label="Services hero image"
      >
        <Image
          src="/images/serviceshero.jpg"
          alt="Starhills Logistics services and delivery operations"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent"
          aria-hidden="true"
        ></div>

        <div className="relative h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
              Our Services
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light mb-8 drop-shadow-lg">
              Comprehensive logistics solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white" aria-labelledby="services-intro">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg md:text-xl text-neutral/70 leading-relaxed">
            From express delivery to international freight, we handle every
            shipment with precision and care. Our end-to-end solutions keep your
            business moving.
          </p>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-linear-to-b from-white to-[#f4f7fa]"
        aria-labelledby="main-services-heading"
      >
        <div className="container mx-auto max-w-7xl">
          <h2 id="main-services-heading" className="sr-only">
            Main Services
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
          >
            {servicesGrid.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-8 text-[#0055A4] transition-all duration-300 hover:bg-[#0055A4] hover:text-white flex flex-col items-center text-center hover:-translate-y-2 shadow-lg hover:shadow-2xl focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 overflow-hidden"
                role="listitem"
                tabIndex={0}
                aria-label={`${service.title}: ${service.description}`}
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 bg-[#0A84FF]/10 group-hover:bg-white/10 rounded-full transition-all"
                  aria-hidden="true"
                />

                <div className="mb-6 relative z-10" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-bold text-2xl mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0055A4] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Ship with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get a custom quote tailored to your logistics needs
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0055A4] px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <section
        className="py-20 px-6 bg-[#f4f7fa]"
        aria-labelledby="special-services-heading"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              id="special-services-heading"
              className="text-4xl md:text-5xl font-bold text-[#0055A4] mb-4"
            >
              Specialized Solutions
            </h2>
            <p className="text-lg text-neutral/70 max-w-2xl mx-auto">
              Custom services designed to meet your unique business requirements
            </p>
          </motion.div>

          <motion.div
            ref={specialServicesRef}
            variants={containerVariants}
            initial="hidden"
            animate={isSpecialServicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            role="list"
          >
            {highlightedServices.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#0055A4] hover:text-white hover:shadow-2xl focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 overflow-hidden"
                role="listitem"
                tabIndex={0}
                aria-label={`${service.title}: ${service.description}`}
              >
                <div
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#0A84FF]/10 group-hover:bg-white/10 rounded-full transition-all"
                  aria-hidden="true"
                />

                <h3 className="font-bold text-2xl mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

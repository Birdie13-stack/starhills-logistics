"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaGlobe, FaWarehouse, FaShippingFast } from "react-icons/fa";

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
        className="relative h-64 md:h-96 w-full"
        aria-label="Services hero image"
      >
        <Image
          src="/images/serviceshero.jpg"
          alt="Starhills Logistics services and delivery operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true"></div>
      </section>
      <section
        className="py-12 text-neutral px-6 md:px-20"
        aria-labelledby="services-heading"
      >
        <h1
          id="services-heading"
          className="text-4xl font-bold text-center mb-6"
        >
          Our Services
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg">
          Comprehensive logistics solutions tailored to your needs — from
          express delivery to international freight, we handle every shipment
          with precision and care.
        </p>
      </section>
      <section
        className="py-12 px-6 md:px-20"
        aria-labelledby="main-services-heading"
      >
        <h2 id="main-services-heading" className="sr-only">
          Main Services
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="list"
        >
          {servicesGrid.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-lg p-6 text-[#0055A4] transition-all duration-300 hover:bg-[#0055A4] hover:text-white cursor-pointer flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
              aria-label={`${service.title}: ${service.description}`}
            >
              <div className="mb-4" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        className="py-12 bg-[#f4f7fa] text-neutral px-6 md:px-20"
        aria-labelledby="special-services-heading"
      >
        <h2
          id="special-services-heading"
          className="text-3xl font-bold text-center mb-8"
        >
          Special Services
        </h2>

        <motion.div
          ref={specialServicesRef}
          variants={containerVariants}
          initial="hidden"
          animate={isSpecialServicesInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          role="list"
        >
          {highlightedServices.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#0055A4] hover:text-white hover:shadow-xl focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
              role="listitem"
              tabIndex={0}
              aria-label={`${service.title}: ${service.description}`}
            >
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;

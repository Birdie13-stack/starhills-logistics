"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaBoxOpen,
  FaGlobe,
  FaWarehouse,
  FaShippingFast,
} from "react-icons/fa";

const servicesGrid = [
  {
    title: "Express Delivery",
    icon: <FaShippingFast size={40} />,
    description:
      "Same-day and next-day delivery services for urgent shipments across all major cities.",
  },
  {
    title: "Freight Services",
    icon: <FaTruck size={40} />,
    description:
      "Heavy cargo and bulk shipping solutions with dedicated fleet and tracking.",
  },
  {
    title: "International Shipping",
    icon: <FaGlobe size={40} />,
    description:
      "Seamless cross-border logistics with customs clearance and door-to-door delivery.",
  },
  {
    title: "Warehousing",
    icon: <FaWarehouse size={40} />,
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
  return (
    <div className="w-full">
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src="/images/services-hero.jpg"
          alt="Services Hero"
          fill
          className="object-cover"
        />
      </div>

      <section className="py-12 bg-[#f4f7fa] text-neutral px-6 md:px-20">
        <h1 className="text-4xl font-bold text-center mb-6 fade-slide-up">
          Our Services
        </h1>
        <p className="text-center max-w-3xl mx-auto text-lg fade-slide-up">
          Comprehensive logistics solutions tailored to your needs — from
          express delivery to international freight, we handle every shipment
          with precision and care.
        </p>
      </section>

      <section className="py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {servicesGrid.map((service, index) => (
            <div
              key={index}
              className="fade-slide-up bg-white rounded-lg p-6 text-[#0055A4] transition-all duration-300 hover:bg-[#0055A4] hover:text-white cursor-pointer flex flex-col items-center text-center hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-[#f4f7fa] text-neutral px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8 fade-slide-up">
          Special Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlightedServices.map((service, i) => (
            <div
              key={i}
              className="fade-slide-up bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-[#0055A4] hover:text-white"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

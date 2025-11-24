"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const contacts = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={40} />,
    href: `https://wa.me/2348160120876?text=${encodeURIComponent(
      "Hi, I'd like to get in touch regarding your services."
    )}`,
    description: "Chat directly with us on WhatsApp.",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={40} />,
    href: `mailto:client@example.com?subject=${encodeURIComponent(
      "Inquiry from Starhills Logistics Website"
    )}&body=${encodeURIComponent(
      "Hi, I'd like to get in touch regarding your services."
    )}`,
    description: "Send us an email directly.",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={40} />,
    href: "https://instagram.com/starhillslogistics",
    description: "Follow and DM us on Instagram.",
    color: "bg-pink-500 hover:bg-pink-600",
  },
];

export default function ContactLinksPage() {
  return (
    <section className="py-20 px-6 bg-[#f4f7fa] text-neutral">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#0055A4]">
            Get in Touch
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Choose your preferred way to contact us — WhatsApp, Email, or
            Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, idx) => (
            <motion.a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className={`flex flex-col items-center justify-center p-8 rounded-xl shadow-md text-white ${contact.color} cursor-pointer`}
            >
              {contact.icon}
              <h3 className="mt-4 text-xl font-semibold">{contact.name}</h3>
              <p className="mt-2 text-center text-white/90">
                {contact.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

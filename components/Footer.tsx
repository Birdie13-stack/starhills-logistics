"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import logo from "../public/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Track", href: "/track" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/starhillslogistics/?hl=en",
  },
  { icon: <FaLinkedinIn />, href: "#" },
];

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <footer className="bg-[#0055A4] text-white pt-16 pb-6">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src={logo} alt="Starhills Logo" className="w-32 mb-4" />
          <p className="text-white/80">
            Your trusted partner for fast, reliable, and secure delivery
            services across Nigeria and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="inline-block transition-all duration-300 transform hover:translate-x-2 hover:text-[#0A84FF]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-semibold text-lg mb-4">Branches</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Lagos: 08160120876</li>
            <li>Port Harcourt: 081-234-5678</li>
            <li>Asaba: 08057719294</li>
            <li>Ibadan: 08079013662</li>
            <li>Abuja: 08058479185</li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-all duration-300 transform hover:translate-x-1 hover:text-[#0A84FF]"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="mt-10 border-t border-white/30 pt-6 text-center text-white/60 text-sm"
      >
        &copy; {new Date().getFullYear()} Starhills Logistics. All rights
        reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

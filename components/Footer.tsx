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
  {
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/people/Starhills-Logistics-Ltd/61583387831330/",
  },
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
    <footer
      className="bg-[#0055A4] text-white pt-16 pb-6"
      role="contentinfo"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

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
          <Link
            href="/"
            className="inline-block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded mb-4"
            aria-label="Starhills Logistics home"
          >
            <Image src={logo} alt="Starhills Logistics logo" className="w-32" />
          </Link>
          <p className="text-white/80">
            Your trusted partner for fast, reliable, and secure delivery
            services across Nigeria and beyond.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 id="quick-links-heading" className="font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <nav aria-labelledby="quick-links-heading">
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-block transition-all duration-300 transform hover:translate-x-2 hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 id="branches-heading" className="font-semibold text-lg mb-4">
            Branches
          </h3>
          <ul
            className="space-y-2 text-white/80 text-sm"
            aria-labelledby="branches-heading"
            role="list"
          >
            <li>
              <span className="font-medium">Lagos:</span>{" "}
              <a
                href="tel:08160120876"
                className="hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1 transition-colors"
                aria-label="Call Lagos branch"
              >
                08160120876
              </a>
            </li>
            <li>
              <span className="font-medium">Port Harcourt:</span>{" "}
              <a
                href="tel:0812345678"
                className="hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1 transition-colors"
                aria-label="Call Port Harcourt branch"
              >
                08160577628
              </a>
            </li>
            <li>
              <span className="font-medium">Asaba:</span>{" "}
              <a
                href="tel:08057719294"
                className="hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1 transition-colors"
                aria-label="Call Asaba branch"
              >
                08057719294
              </a>
            </li>
            <li>
              <span className="font-medium">Ibadan:</span>{" "}
              <a
                href="tel:08079013662"
                className="hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1 transition-colors"
                aria-label="Call Ibadan branch"
              >
                08079013662
              </a>
            </li>
            <li>
              <span className="font-medium">Abuja:</span>{" "}
              <a
                href="tel:08058479185"
                className="hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded px-1 transition-colors"
                aria-label="Call Abuja branch"
              >
                08058479185
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 id="social-heading" className="font-semibold text-lg mb-4">
            Follow Us
          </h3>
          <nav aria-labelledby="social-heading">
            <ul className="flex gap-4" role="list">
              {socialLinks.map((social, i) => (
                <li key={i}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-all duration-300 transform hover:scale-110 hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0055A4] rounded p-1"
                    aria-label={`Follow us on ${
                      social.href.includes("instagram")
                        ? "Instagram"
                        : social.href.includes("facebook")
                        ? "Facebook"
                        : social.href.includes("twitter")
                        ? "Twitter"
                        : "LinkedIn"
                    }`}
                  >
                    <span aria-hidden="true">{social.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        className="mt-10 border-t border-white/30 pt-6 text-center text-white/60 text-sm"
        role="contentinfo"
      >
        <p>
          &copy; {new Date().getFullYear()} Starhills Logistics. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;

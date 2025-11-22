"use client";
import React from "react";
import Image from "next/image";
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
  return (
    <footer className="bg-[#0055A4] text-white pt-16 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image src={logo} alt="Starhills Logo" className="w-32 mb-4" />
          <p className="text-white/80">
            Your trusted partner for fast, reliable, and secure delivery
            services across Nigeria and beyond.
          </p>
        </div>

        <div>
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
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Branches</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>Lagos: 08160120876</li>
            <li>Port Harcourt: 081-234-5678</li>
            <li>Asaba: 08057719294</li>
            <li>Ibadan: 08079013662</li>
            <li>Abuja: 08058479185</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
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
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-6 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} Starhills Logistics. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Track", href: "/track" },
    { name: "News", href: "/news" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header
      className={`fixed bg-white w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 shadow-xl" : "py-3 shadow-md"
      }`}
      role="banner"
    >
      <nav
        className="container mx-auto px-6 flex justify-between items-center"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded transition-transform hover:scale-105"
          aria-label="Starhills Logistics home"
        >
          <Image
            src={logo}
            alt="Starhills Logistics logo"
            className={`transition-all duration-300 ${
              scrolled ? "w-20" : "w-28"
            }`}
            priority
          />
        </Link>

        <ul
          className="hidden lg:flex items-center gap-8 text-[#0055a4] font-semibold"
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-3 py-2 transition-all ${
                  pathname === item.href ? "text-[#0A84FF]" : ""
                } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#0A84FF] after:transition-all hover:after:w-full ${
                  pathname === item.href ? "after:w-full" : ""
                }`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden lg:block bg-linear-to-r from-[#0055A4] to-[#0A84FF] text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
        >
          Contact Us
        </Link>

        <button
          className="lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X size={28} aria-hidden="true" />
          ) : (
            <Menu size={28} aria-hidden="true" />
          )}
        </button>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl lg:hidden z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-200">
          <Image src={logo} alt="Starhills Logistics logo" className="w-24" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={28} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="p-6">
          <ul
            className="flex flex-col gap-2 font-semibold text-[#0055a4]"
            role="list"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block hover:bg-blue-50 hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-lg px-4 py-3 transition-all ${
                    pathname === item.href
                      ? "bg-blue-50 text-[#0A84FF] font-bold"
                      : ""
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block bg-linear-to-r from-[#0055A4] to-[#0A84FF] text-white px-6 py-3 rounded-lg w-full mt-6 text-center font-semibold hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

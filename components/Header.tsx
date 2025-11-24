"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Track", href: "/track" },
    { name: "News", href: "/news" },
  ];

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
      className="fixed bg-white py-3 px-5 shadow-md w-full z-50"
      role="banner"
    >
      <nav
        className="flex justify-between items-center w-full"
        role="navigation"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
          aria-label="Starhills Logistics home"
        >
          <Image
            src={logo}
            alt="Starhills Logistics logo"
            className="w-24"
            priority
          />
        </Link>

        <ul
          className="hidden md:flex justify-between w-1/3 text-[#0055a4] font-bold text-md"
          role="list"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                  pathname === item.href ? "text-[#0A84FF]" : ""
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
          className="hidden md:block bg-[#0055A4] text-white px-4 py-2 rounded-md hover:bg-[#004080] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
        >
          Contact
        </Link>

        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <X size={30} aria-hidden="true" />
          ) : (
            <Menu size={30} aria-hidden="true" />
          )}
        </button>
      </nav>
      {open && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-sm md:hidden z-40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-menu"
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg md:hidden z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="p-5 flex justify-between items-center border-b">
          <Image src={logo} alt="Starhills Logistics logo" className="w-20" />
          <button
            onClick={() => setOpen(false)}
            className="p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
            aria-label="Close navigation menu"
          >
            <X size={30} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul
            className="flex flex-col gap-6 p-5 font-bold text-[#0055a4] text-lg"
            role="list"
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block hover:text-[#0A84FF] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded px-2 py-1 transition-colors ${
                    pathname === item.href ? "text-[#0A84FF]" : ""
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block bg-[#0055A4] text-white px-4 py-2 rounded-md w-full mt-4 text-center hover:bg-[#004080] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

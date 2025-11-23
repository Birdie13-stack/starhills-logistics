"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../public/images/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Track", href: "/track" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white py-3 px-5 shadow-md relative z-50">
      <div className="flex justify-between items-center w-full">
        <Image src={logo} alt="Starhills Logo" className="w-24" />

        <ul className="hidden md:flex justify-between w-1/3 text-[#0055a4] font-bold text-md">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${pathname === item.href ? "text-[#0A84FF]" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-[#0055A4] text-white px-4 py-2 rounded-md">
          Contact
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/5 backdrop-blur-sm md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg md:hidden z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="p-5 flex justify-between items-center">
          <Image src={logo} alt="Starhills Logo" className="w-20" />
          <button onClick={() => setOpen(false)}>
            <X size={30} />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-5 font-bold text-[#0055a4] text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block ${
                  pathname === item.href ? "text-[#0A84FF]" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <button className="bg-[#0055A4] text-white px-4 py-2 rounded-md w-full mt-4">
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

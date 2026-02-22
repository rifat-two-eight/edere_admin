"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { href: "about", label: "About" },
    { href: "how-it-works", label: "How it Works" },
    { href: "why-us", label: "Why Us" },
    { href: "for-restaurants", label: "For Restaurants" },
  ];

  const offset = 80; // navbar height

  // Scroll to section smoothly
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  // Highlight active link on scroll
  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + offset + 10; // small buffer
      let current = "home";

      navLinks.forEach(link => {
        const section = document.getElementById(link.href);
        if (section && section.offsetTop <= scrollPos) {
          current = link.href;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F7F3EF]">
      <div className="container mx-auto px-4 h-25 flex items-center justify-between relative">

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-black z-50 relative"
          onClick={() => setIsOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className={`transition-colors cursor-pointer hover:opacity-70 ${active === link.href ? "text-[#055E2C] font-bold" : "text-black"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div className="absolute cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={() => handleScroll("home")}
            className="block"
          >
            <Link href="/" className="text-2xl font-bold text-[#055E2C]">
              <Image src="/logo.png" alt="Edere Logo" width={100} height={40} className="object-contain cursor-pointer" />
            </Link>
          </button>
        </div>

        {/* Desktop Download */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleScroll("download")}
            className="px-6 py-3 bg-[#055E2C] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Download app
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <div className="fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white z-50 shadow-xl p-6 flex flex-col md:hidden">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-black hover:bg-black/5 rounded-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map(link => (
                  <button
                    key={link.href}
                    onClick={() => handleScroll(link.href)}
                    className={`transition-colors hover:opacity-70 ${active === link.href ? "text-[#055E2C] font-bold" : "text-black"
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto pb-8">
                <button
                  onClick={() => handleScroll("download")}
                  className="block w-full text-center px-6 py-3 bg-[#055E2C] text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
                >
                  Download app
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

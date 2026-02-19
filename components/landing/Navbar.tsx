"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#f6f2ee]">
      <div className="container mx-auto px-4 h-25 flex items-center justify-between relative">

        {/* Mobile: Hamburger Button */}
        <button
          className="md:hidden p-2 text-black z-50 relative"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Desktop Left: Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-black font-medium">
          <Link href="#about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="#how-it-works" className="hover:opacity-70 transition-opacity">How it Works</Link>
          <Link href="#why-us" className="hover:opacity-70 transition-opacity">Why Us</Link>
          <Link href="#for-restaurants" className="hover:opacity-70 transition-opacity">For Restaurants</Link>
        </div>

        {/* Center: Logo (Visible on both Desktop and Mobile - Centered absolutely) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.png"
              alt="Edere Logo"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Right: Download App Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#download"
            className="px-6 py-3 bg-[#055E2C] text-white rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Download app
          </Link>
        </div>

        {/* Mobile Menu Overlay & Drawer */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div className="fixed top-0 left-0 h-full w-[75%] max-w-sm bg-[#f6f2ee] z-50 shadow-xl p-6 flex flex-col md:hidden">
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

              <nav className="flex flex-col gap-6 text-lg text-black font-medium">
                <Link href="#about" onClick={() => setIsOpen(false)} className="hover:opacity-70">About</Link>
                <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="hover:opacity-70">How it Works</Link>
                <Link href="#why-us" onClick={() => setIsOpen(false)} className="hover:opacity-70">Why Us</Link>
                <Link href="#for-restaurants" onClick={() => setIsOpen(false)} className="hover:opacity-70">For Restaurants</Link>
              </nav>

              <div className="mt-auto pb-8">
                <Link
                  href="#download"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-[#055E2C] text-white rounded-full font-medium text-lg hover:opacity-90 transition-opacity"
                >
                  Download app
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

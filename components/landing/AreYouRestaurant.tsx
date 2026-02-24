"use client";

import { Rocket, FileCode } from "lucide-react";
import Image from "next/image";

export default function AreYouRestaurant() {
  return (
    <section className="py-20 bg-white" id="for-restaurants">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2D2A26]" style={{ fontFamily: 'athletics' }}>
          Are you a restaurant?
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          <StatCard
            value="200M+"
            desc="Americans have food allergies, dietary restrictions, or preferences"
          />
          <StatCard
            value="92%"
            desc="of diners with dietary restrictions return to restaurants that accommodate their needs"
          />
          <StatCard
            value="37%"
            desc="of diners with dietary restrictions report having few safe dining options"
          />
          <StatCard
            value="$50B+"
            desc="in untapped annual restaurant spending from this market"
          />
        </div>
        <hr className="mb-8 -mt-8" />
        {/* Middle CTA */}
        <div className="text-center mb-20">
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-[#2D2A26]" style={{ fontFamily: 'athletics' }}>
            We want to get your menu{" "}
            <span className="text-[#055E2C] font-bold">chef-verified</span> on
            Edere!
          </h3>
          <a href="mailto:hello@edere.com">
            <button className="px-8 py-3 bg-[#2D2A26] text-white rounded-full font-bold hover:bg-black transition-colors">
              Say hello to us!
            </button>
          </a>
        </div>

        {/* Enterprise Banner */}
        <div className="relative w-full rounded-[32px] overflow-hidden">

          {/* ── MOBILE/TABLET layout (< lg) ── */}
          <div className="lg:hidden relative w-full min-h-[600px] flex flex-col p-6 sm:p-10">
            {/* Background Image */}
            <Image
              src="/need.png"
              alt="Restaurant Service"
              fill
              className="object-cover z-0"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content Container */}
            <div className="relative z-10 flex flex-col gap-6 h-full">
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'athletics' }}>
                Need more for
                <br />
                your business?
              </h3>

              <p className="text-white/90 text-base sm:text-lg max-w-md">
                We offer turnkey solutions to bring the Edere experience to you.
                Let's partner together!
              </p>

              <a href="mailto:hello@edere.com" className="w-fit">
                <button className="px-8 py-3 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors">
                  Contact us
                </button>
              </a>

              <hr className="border-white/30 my-4 w-full" />

              <div className="flex flex-col gap-8">
                {/* Feature 1 */}
                <div className="text-white flex flex-col gap-2">
                  <Rocket className="w-7 h-7" />
                  <h4 className="font-bold text-lg" style={{ fontFamily: 'athletics' }}>Edere-Powered Menu</h4>
                  <p className="text-sm opacity-80">
                    Dynamic hosted menu page for customers to filter dishes by allergens and preferences
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="text-white flex flex-col gap-2">
                  <FileCode className="w-7 h-7" />
                  <h4 className="font-bold text-lg" style={{ fontFamily: 'athletics' }}>Edere API Integration</h4>
                  <p className="text-sm opacity-80">
                    Leverage our API within your website for a seamless, frictionless menu-filtering experience
                  </p>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center mt-4">
                  <div className="border border-white/50 rounded-full w-28 h-28 flex flex-col items-center justify-center text-white text-center p-4">
                    <span className="text-lg font-bold leading-none">edere</span>
                    <span className="text-[9px] tracking-widest uppercase mt-1">Enterprise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── DESKTOP layout (lg+) — 100% ORIGINAL ── */}
          <div className="hidden lg:block relative w-full h-[650px]">
            {/* Background Image */}
            <Image
              src="/need.png"
              alt="Restaurant Service"
              fill
              className="object-cover"
            />

            {/* Content — centered vertically, split left/right */}
            <div className="absolute inset-0 z-10 flex items-center px-12">
              <div className="flex-1 flex flex-col justify-center gap-6">
                {/* Heading */}
                <h3 className="text-5xl font-bold text-white leading-tight" style={{ fontFamily: 'athletics' }}>
                  Need more for
                  <br />
                  your business?
                </h3>

                {/* Description */}
                <p className="text-white/90 text-lg max-w-md">
                  We offer turnkey solutions to bring the Edere experience to you.
                  Let's partner together!
                </p>

                {/* Contact Button */}
                <a href="mailto:hello@edere.com">
                  <button className="px-8 py-3 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors">
                    Contact us
                  </button>
                </a>

                {/* Full-width HR */}
                <hr className="border-white/30 my-6 w-full" />

                {/* Features + Logo: 3 blocks evenly spaced */}
                <div className="flex flex-row justify-between items-center gap-8">
                  {/* Feature 1 */}
                  <div className="text-white flex-1 flex flex-col gap-2 ">
                    <Rocket className="w-8 h-8" />
                    <h4 className="font-bold text-lg" style={{ fontFamily: 'athletics' }}>Edere-Powered Menu</h4>
                    <p className="text-sm opacity-80">
                      Dynamic hosted menu page for customers to <br /> filter dishes by allergens and preferences
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="text-white flex-1 flex flex-col gap-2">
                    <FileCode className="w-8 h-8" />
                    <h4 className="font-bold text-lg" style={{ fontFamily: 'athletics' }}>Edere API Integration</h4>
                    <p className="text-sm opacity-80">
                      Leverage our API within your website for a <br /> seamless, frictionless menu-filtering experience
                    </p>
                  </div>

                  {/* Logo */}
                  <div className="flex-1 flex items-center justify-center">
                    <div className="border border-white/50 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white text-center p-4">
                      <span className="text-xl font-bold leading-none">edere</span>
                      <span className="text-[10px] tracking-widest uppercase mt-1">Enterprise</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function StatCard({ value, desc }: { value: string; desc: string }) {
  return (
    <div className="bg-[#F9F7F5] rounded-[12px] pt-2 px-2 overflow-hidden flex flex-col">
      <div className="bg-[#055E2C] py-5 flex items-center justify-center rounded-[12px]">
        <span className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'athletics' }}>
          {value}
        </span>
      </div>
      <div className="p-5 flex-1 flex items-center justify-center text-center">
        <p className="text-[#2D2A26] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
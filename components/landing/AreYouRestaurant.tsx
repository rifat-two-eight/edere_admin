"use client";

import { Rocket, FileCode } from "lucide-react";
import Image from "next/image";

export default function AreYouRestaurant() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2D2A26]">
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
          <h3 className="text-2xl md:text-3xl font-medium mb-8 text-[#2D2A26]">
            We want to get your menu{" "}
            <span className="text-[#055E2C] font-bold">chef-verified</span> on
            Edere!
          </h3>
          <button className="px-8 py-3 bg-[#2D2A26] text-white rounded-full font-bold hover:bg-black transition-colors">
            Say hello to us!
          </button>
        </div>

        {/* Enterprise Banner */}
        <div className="relative w-full h-[550px] rounded-[32px] overflow-hidden flex items-end">
          {/* Background Image */}
          <Image
            src="/edere2.jpg"
            alt="Restaurant Service"
            fill
            className="object-cover"
          />
          {/* Dark Overlay with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="relative z-10 w-full p-8 md:p-12 flex flex-col md:flex-row justify-between items-end">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need more for
                <br />
                your business?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md">
                We offer turnkey solutions to bring the Edere experience to you.
                Let's partner together!
              </p>
              <button className="px-6 py-2 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors mb-12">
                Contact us
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="text-white">
                  <Rocket className="w-8 h-8 mb-2" />
                  <h4 className="font-bold mb-1">Edere-Powered Menu</h4>
                  <p className="text-sm opacity-80 max-w-[200px]">
                    Dynamic hosted menu page for customers to filter dishes by
                    allergens and preferences
                  </p>
                </div>
                <div className="text-white">
                  <FileCode className="w-8 h-8 mb-2" />
                  <h4 className="font-bold mb-1">Edere API Integration</h4>
                  <p className="text-sm opacity-80 max-w-[200px]">
                    Leverage our API within your website for a seamless,
                    frictionless menu-filtering experience
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Logo / Text */}
            <div className="mt-8 md:mt-0">
              <div className="border border-white/50 rounded-full w-32 h-32 flex flex-col items-center justify-center text-white text-center p-4">
                <span className="text-xl font-bold leading-none">edere</span>
                <span className="text-[10px] tracking-widest uppercase mt-1">Enterprise</span>
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
    <div className="bg-[#F9F7F5] rounded-[16px] overflow-hidden flex flex-col h-full">
      <div className="bg-[#055E2C] py-6 flex items-center justify-center">
        <span className="text-4xl md:text-5xl font-bold text-white">
          {value}
        </span>
      </div>
      <div className="p-6 flex-1 flex items-center justify-center text-center">
        <p className="text-[#2D2A26] font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

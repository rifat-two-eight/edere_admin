"use client";

import Image from "next/image";

export default function Signup({ transparent = false }: { transparent?: boolean }) {
  return (
    <section
      id="signup"
      className={`py-20 ${transparent ? "bg-transparent" : "bg-[#F5F2EE]"} relative`}
    >
      <div className="container mx-auto px-4 max-w-4xl text-center">

        {/* ── MOBILE/TABLET layout (< lg) ── */}
        <div className="lg:hidden flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#2D2A26] leading-tight flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3" style={{ fontFamily: 'athletics' }}>
            <span>Sign up for</span>
            <span className="inline-block relative">
              <Image src="/mail.svg" alt="Mail" width={48} height={48} className="sm:w-[60px] sm:h-[60px]" />
            </span>
            <span>the </span>
            <span className="w-full">latest news and verified restaurants!</span>
          </h2>

          <div className="w-full max-w-md mx-auto">
            <form className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full pl-6 sm:pl-8 pr-6 sm:pr-32 py-4 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#055E2C] outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto sm:absolute sm:right-2 sm:top-2 sm:bottom-2 px-8 py-4 sm:py-0 bg-[#2D2A26] text-white rounded-full font-medium hover:bg-black transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* ── DESKTOP layout (lg+) — 100% ORIGINAL ── */}
        <div className="hidden lg:block">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2D2A26] leading-tight flex flex-wrap justify-center items-center gap-x-3" style={{ fontFamily: 'athletics' }}>
            <span>Sign up for</span>
            <span className="inline-block relative">
              <Image src="/mail.svg" alt="Mail" width={60} height={60} />
            </span>
            <span>the latest news</span>
            <span className="w-full"> and verified restaurants!</span>
          </h2>

          <div className="max-w-xl mx-auto">
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full pl-8 pr-32 py-4 rounded-full bg-white border-none shadow-sm focus:ring-2 focus:ring-[#055E2C] outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-[#2D2A26] text-white rounded-full font-medium hover:bg-black transition-colors"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
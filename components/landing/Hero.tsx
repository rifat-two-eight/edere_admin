"use client"
import Image from "next/image";

function BenefitBadge({ label, icon }: { label: string; icon: "check" | "filter" | "shield" }) {
  return (
    <div className="bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-lg whitespace-nowrap z-50">
      <span className="bg-[#055E2C] rounded-full p-0.5 md:p-1 flex items-center justify-center">
        {icon === "check" && (
          <svg className="w-2.5 h-2.5 md:w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
        {icon === "filter" && (
          <svg className="w-2.5 h-2.5 md:w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
          </svg>
        )}
        {icon === "shield" && (
          <svg className="w-2.5 h-2.5 md:w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
      </span>
      <span className="text-[10px] sm:text-xs font-bold text-gray-800 dm-sans">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center pt-32 md:pt-48 overflow-hidden h-auto md:h-auto lg:h-[1100px]">
      {/* Text + Buttons */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight text-black" style={{ fontFamily: 'athletics' }}>
          Find restaurants you can <br /> actually eat at{" "}
          <Image
            className="inline-block w-12 sm:w-16 md:w-20"
            src="/spoon.svg"
            alt="Spoon"
            width={80}
            height={100}
          />
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-zinc-800 mb-8 max-w-3xl mx-auto dm-sans font-semibold px-4">
          The ultimate restaurant discovery app for food allergies, dietary
          restrictions &amp; preferences... all before you step through the
          doors.
        </p>
        <button className="px-6 py-3 mr-4 bg-[#055E2C] dm-sans text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Download App
        </button>
        <button id="signup" className="px-6 py-3 bg-[#2D2A26] dm-sans text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Join Us
        </button>
      </div>

      {/* ── MOBILE layout (< md) ── */}
      <div className="flex md:hidden flex-col items-center mt-12 w-full px-4">
        {/* Phone mockup with overlapping badges */}
        <div className="relative w-[260px]">
          <Image
            src="/herophone.svg"
            alt="App Phone"
            width={260}
            height={486}
            className="object-contain w-full"
          />

          {/* Chef Verified badge - top left */}
          <div className="absolute top-12 -left-6 transform rotate-[-5deg]">
            <BenefitBadge label="Chef Verified" icon="check" />
          </div>

          {/* Personalized Filtering - middle right */}
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 transform rotate-[3deg]">
            <BenefitBadge label="Personalized Filtering" icon="filter" />
          </div>

          {/* Dine Assured - bottom left */}
          <div className="absolute bottom-12 -left-4 transform rotate-[2deg]">
            <BenefitBadge label="Dine Assured" icon="shield" />
          </div>
        </div>

        {/* Two food images side by side with slight offset */}
        <div className="flex gap-4 w-full justify-center mt-12 mb-8">
          <div className="rounded-2xl overflow-hidden w-[150px] h-[150px] shadow-lg transform rotate-[-3deg]">
            <Image src="/hero2.png" alt="Food 2" width={150} height={150} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[150px] h-[150px] shadow-lg transform rotate-[3deg] mt-4">
            <Image src="/hero3.png" alt="Food 3" width={150} height={150} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── TABLET layout (md to lg) ── */}
      <div className="hidden md:flex lg:hidden flex-col items-center mt-16 w-full px-6">
        {/* Phone with more space for badges */}
        <div className="relative w-[320px]">
          <Image
            src="/herophone.svg"
            alt="App Phone"
            width={320}
            height={600}
            className="object-contain w-full"
          />

          {/* Chef Verified - top left */}
          <div className="absolute top-16 -left-12 transform rotate-[-4deg]">
            <BenefitBadge label="Chef Verified" icon="check" />
          </div>

          {/* Personalized Filtering - middle right */}
          <div className="absolute top-1/3 -right-16 transform rotate-2">
            <BenefitBadge label="Personalized Filtering" icon="filter" />
          </div>

          {/* Dine Assured - bottom left */}
          <div className="absolute bottom-20 -left-10 transform rotate-[3deg]">
            <BenefitBadge label="Dine Assured" icon="shield" />
          </div>
        </div>

        {/* Four food images in a curated row */}
        <div className="flex gap-6 justify-center w-full mt-16 mb-12">
          <div className="rounded-2xl overflow-hidden w-[140px] h-[140px] shadow-md transform -translate-y-4">
            <Image src="/hero1.png" alt="Food 1" width={140} height={140} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[180px] h-[180px] shadow-lg">
            <Image src="/hero2.png" alt="Food 2" width={180} height={180} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[180px] h-[180px] shadow-lg">
            <Image src="/hero3.png" alt="Food 3" width={180} height={180} className="w-full h-full object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden w-[140px] h-[140px] shadow-md transform -translate-y-4">
            <Image src="/hero4.png" alt="Food 4" width={140} height={140} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* ── DESKTOP layout (lg+) — your original code, untouched ── */}
      <div className="hidden lg:flex justify-between items-center w-full mt-auto relative">

        {/* Far Left image - hero1 */}
        <Image
          src="/hero1.png"
          alt="Food 1"
          width={121}
          height={200}
          className="w-[120px] h-[200px]"
        />

        {/* Second Left image - hero2 */}
        <Image
          src="/hero2.png"
          alt="Food 2"
          width={300}
          height={350}
          className="w-[300px] h-[350px]"
        />

        {/* Phone - Center */}
        <div className="relative shrink-0 overflow-hidden" style={{ width: 398, height: 500 }}>
          <Image
            src="/herophone.svg"
            alt="App Phone"
            width={398}
            height={746}
            className=" w-[400px] h-[746px]"
          />
        </div>

        {/* Second Right image - hero3 */}
        <Image
          src="/hero3.png"
          alt="Food 3"
          width={300}
          height={350}
          className="w-[300px] h-[350px]"
        />

        {/* Far Right image - hero4 */}
        <Image
          src="/hero4.png"
          alt="Food 4"
          width={191}
          height={220}
          className="w-[130px]"
        />

        {/* Desktop Badges */}

        {/* Personalized Filtering */}
        <div className="absolute top-[15%] right-[29%] bg-white rounded-full p-2 flex items-center gap-2 shadow-xl z-50">
          <Image src="/personalized.svg" alt="Personalized Filtering" width={40} height={40} className="w-7 h-7 bg-[#055E2C] p-1 rounded-full" />
          <span className="text-[#2D2A26] text-sm font-semibold dm-sans whitespace-nowrap">Personalized Filtering</span>
        </div>


        {/* Chef Verified */}
        <div className="absolute top-[50%] left-[30%] bg-white rounded-full p-2 flex items-center gap-2 shadow-xl z-50">
          <Image src="/verified.svg" alt="Chef Verified" width={20} height={20} className="w-7 h-7 p-1 bg-[#055E2C] rounded-full" />
          <span className="text-[#2D2A26] text-sm font-semibold dm-sans whitespace-nowrap">Chef Verified</span>
        </div>



        {/* Dine Assured */}
        <div className="absolute bottom-[10%] left-[57%] bg-white rounded-full p-2 flex items-center gap-2 shadow-xl z-50">
          <Image src="/dine.svg" alt="Dine Assured" width={20} height={20} className="w-7 h-7 p-1 bg-[#055E2C] rounded-full" />
          <span className="text-[#2D2A26] text-sm font-semibold dm-sans whitespace-nowrap">Dine Assured</span>
        </div>

      </div>
    </section >
  );
}
import Image from "next/image";

export default function Hero() {
  return (
    <section className="h-[950px] w-full flex flex-col mt-20 items-center pt-24 overflow-hidden">
      {/* Text + Buttons */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-black">
          Find restaurants you can <br /> actually eat at{" "}
          <Image
            className="inline-block"
            src="/spoon.svg"
            alt="Spoon"
            width={100}
            height={100}
          />
        </h1>
        <p className="text-xl text-zinc-800 mb-8 max-w-2xl mx-auto">
          The ultimate restaurant discovery app for food allergies, dietary
          restrictions &amp; preferences... all before you step through the
          doors.
        </p>
        <button className="px-8 py-3 mr-4 bg-[#055E2C] text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Download App
        </button>
        <button className="px-8 py-3 bg-[#2D2A26] text-white rounded-full text-md font-semibold hover:opacity-90 transition-opacity">
          Join Us
        </button>
      </div>

      {/* Hero Image Row - relative so badges can float freely */}
      <div className="relative w-full flex items-end justify-between mt-16">

        {/* Far Left image - hero1 */}
        <div className="flex-shrink-0 overflow-hidden mb-36" style={{ width: 191, height: 220 }}>
          <Image src="/hero1.png" alt="Food 1" width={191} height={220} className="w-full h-full" />
        </div>

        {/* Second Left image - hero2 */}
        <div className="flex-shrink-0 overflow-hidden mb-16" style={{ width: 360, height: 380 }}>
          <Image src="/hero2.png" alt="Food 2" width={360} height={380} className="w-full h-full" />
        </div>

        {/* Phone - Center */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 398, height: 500 }}>
          <Image
            src="/herophone.svg"
            alt="App Phone"
            width={398}
            height={746}
            className="object-contain object-top w-full"
            style={{ height: 746 }}
          />
        </div>

        {/* Second Right image - hero3 */}
        <div className="flex-shrink-0 overflow-hidden rounded-2xl mb-16" style={{ width: 360, height: 380 }}>
          <Image src="/hero3.png" alt="Food 3" width={360} height={380} className="w-full h-full" />
        </div>

        {/* Far Right image - hero4 */}
        <div className="flex-shrink-0 overflow-hidden mb-36" style={{ width: 191, height: 220 }}>
          <Image src="/hero4.png" alt="Food 4" width={191} height={220} className="w-full h-full" />
        </div>

        {/* Chef Verified badge - floats over hero2 */}
        <div className="absolute bottom-52 left-175 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md whitespace-nowrap z-50">
          <span className="bg-[#055E2C] rounded-full p-0.5">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-gray-800">Chef Verified</span>
        </div>

        {/* Personalized Filtering badge - floats over hero3 */}
        <div className="absolute top-16 right-170 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md whitespace-nowrap z-50">
          <span className="bg-[#055E2C] rounded-full p-1">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-gray-800">Personalized Filtering</span>
        </div>

        {/* Dine Assured badge - floats over phone, bottom */}
        <div className="absolute bottom-30 left-1/2 translate-x-24 bg-white rounded-full px-3 py-1.5 flex items-center gap-2 shadow-md whitespace-nowrap z-50">
          <span className="bg-[#055E2C] rounded-full p-1">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
          <span className="text-xs font-semibold text-gray-800">Dine Assured</span>
        </div>

      </div>


      {/* Far Left image - hero1 */}
    </section>
  );
}

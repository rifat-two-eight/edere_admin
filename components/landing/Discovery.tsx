import Image from "next/image";

export default function Discovery() {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#f9f7f5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-60">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-[64px] font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'athletics' }}>
              Restaurant discovery <span className="text-[#055E2C]">simplified</span>
            </h2>
            <p className="text-xl sm:text-2xl md:text-[32px] text-gray-600 mb-8 font-semibold" style={{ fontFamily: 'athletics' }}>
              Discover restaurants that work for you
            </p>

            <ul className="space-y-6 mb-10 text-left max-w-lg mx-auto lg:mx-0">
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded bg-[#055E2C] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900  text-2xl font-medium dm-sans">Browse menus at the dish level</p>
                  <p className="text-gray-500 text-xl dm-sans">– see exactly what’s safe for you</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded bg-[#055E2C] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 text-2xl font-medium dm-sans">Get personalized modifications</p>
                  <p className="text-gray-500 text-xl dm-sans">– tailored recommendations for your needs</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded bg-[#055E2C] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 text-2xl font-medium dm-sans">Find inclusive restaurants</p>
                  <p className="text-gray-500 text-xl dm-sans">– find places that welcome your dietary restrictions</p>
                </div>
              </li>
            </ul>

            <button className="bg-[#055E2C] text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors dm-sans">
              Download app
            </button>
          </div>

          {/* Right Images Collage */}
          <div className="flex-1 w-full max-w-[320px] md:max-w-[450px] lg:max-w-none mx-auto mt-16 lg:mt-0">

            {/* ── MOBILE/TABLET layout (< lg) ── */}
            <div className="lg:hidden relative">
              {/* Main Image Base */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/discovery.png"
                  alt="Food discovery"
                  width={639}
                  height={627}
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Overlay: Location (Top Left) */}
              <div className="absolute -top-6 -left-4 md:-top-6 md:-left-12 w-32 sm:w-40 md:w-48 shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-100 z-10">
                <Image
                  src="/location.png"
                  alt="Nearby restaurants"
                  width={222}
                  height={193}
                  className="w-full h-auto"
                />
              </div>

              {/* Overlay: Safe (Right Side) */}
              <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 w-32 sm:w-40 md:w-48 shadow-2xl rounded-xl overflow-hidden bg-white border border-gray-100 z-10">
                <Image
                  src="/safe.png"
                  alt="Safe options"
                  width={222}
                  height={193}
                  className="w-full h-auto"
                />
              </div>

              {/* Overlay: Modification (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-12 bg-white p-2 sm:p-3 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-3 pr-4 max-w-[200px] sm:max-w-xs border border-gray-100 z-20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src="/modification.png"
                    alt="Modification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] sm:text-sm font-bold text-gray-900 leading-tight" style={{ fontFamily: 'athletics' }}>Modification Options</p>
                  <p className="text-[8px] sm:text-xs text-orange-500 font-medium">Remove cheese to make dairy-free</p>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="absolute bottom-12 -right-2 md:bottom-12 md:-right-4 w-24 sm:w-32 z-20">
                <Image src="/verified.png" alt="Verified" width={140} height={50} className="w-full h-auto drop-shadow-2xl" />
              </div>
            </div>

            {/* ── DESKTOP layout (lg+) — 100% Original ── */}
            <div className="hidden lg:block relative">
              {/* Main Image Base */}
              <div className="">
                <Image
                  src="/discovery.png"
                  alt="Food discovery"
                  width={639}
                  height={627}
                  className="object-cover"
                />
              </div>

              {/* Overlay: Location (Top Left) */}
              <div className="absolute -top-6 -left-6 md:top-8 md:-left-12 w-48 shadow-lg rounded-xl overflow-hidden bg-white border border-gray-100 hidden md:block">
                <Image
                  src="/location.png"
                  alt="Nearby restaurants"
                  width={222}
                  height={193}
                  className="w-full h-auto"
                />
              </div>

              {/* Overlay: Safe (Right Side) */}
              <div className="absolute top-60 -right-4 transform -translate-y-1/2 w-48 shadow-lg rounded-xl overflow-hidden bg-white border border-gray-100 hidden md:block">
                <Image
                  src="/safe.png"
                  alt="Safe options"
                  width={222}
                  height={193}
                  className="w-full h-auto"
                />
              </div>

              {/* Overlay: Modification (Bottom Left) */}
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-16 bg-white p-2 rounded-xl shadow-lg flex items-center gap-3 pr-4 max-w-xs border border-gray-100">
                <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src="/modification.png"
                    alt="Modification"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900" style={{ fontFamily: 'athletics' }}>Modification Options</p>
                  <p className="text-xs text-orange-500 font-medium">Remove cheese to make dairy-free</p>
                </div>
              </div>
              {/* Retrying Verified as Image to be safe with user request */}
              <div className="absolute bottom-20 -right-2 md:bottom-12 w-32 hidden md:block">
                <Image src="/verified.png" alt="Verified" width={140} height={50} className="w-full h-auto drop-shadow-lg" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

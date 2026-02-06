import Image from "next/image";

export default function Discovery() {
  return (
    <section id="discovery" className="py-20 bg-[#f9f7f5]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-60">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Restaurant
              <br />
              discovery <span className="text-green-700">simplified</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover restaurants that work for you
            </p>

            <ul className="space-y-6 mb-10">
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-green-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Browse menus at the dish level</p>
                  <p className="text-gray-500 text-sm">– see exactly what’s safe for you</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-green-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Get personalized modifications</p>
                  <p className="text-gray-500 text-sm">– tailored recommendations for your needs</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-6 h-6 rounded bg-green-700 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Find inclusive restaurants</p>
                  <p className="text-gray-500 text-sm">– find places that welcome your dietary restrictions</p>
                </div>
              </li>
            </ul>

            <button className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Download app
            </button>
          </div>

          {/* Right Images Collage */}
          <div className="flex-1 relative">
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
            <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-40 shadow-lg rounded-xl overflow-hidden bg-white border border-gray-100 hidden md:block">
               <Image 
                src="/safe.png" 
                alt="Safe options" 
                width={228} 
                height={193} 
                className="w-full h-auto"
              />
            </div>

            {/* Overlay: Modification (Bottom Left) */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-white p-2 rounded-xl shadow-lg flex items-center gap-3 pr-4 max-w-xs border border-gray-100">
               <div className="w-12 h-12 relative flex-shrink-0 rounded-lg overflow-hidden">
                <Image 
                  src="/modification.png" 
                  alt="Modification" 
                  fill
                  className="object-cover"
                />
               </div>
               <div>
                  <p className="text-sm font-bold text-gray-900">Modification Options</p>
                  <p className="text-xs text-orange-500 font-medium">Remove cheese to make dairy-free</p>
               </div>
            </div>
             {/* Retrying Verified as Image to be safe with user request */}
             <div className="absolute bottom-20 -right-2 md:bottom-12 md:-right-6 w-32 hidden md:block">
               <Image src="/verified.png" alt="Verified" width={140} height={50} className="w-full h-auto drop-shadow-lg" />
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Skip the endless menu
            <br />
            homework before going to a restaurant.
          </h2>
          <h2 className="text-3xl font-bold text-[#055E2C]">
            No more guessing games.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src="/menu1.png"
                alt="Zero research"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Zero research</h3>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src="/menu2.png"
                alt="Zero phone calls"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Zero phone calls</h3>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative w-32 h-32 mb-6">
              <Image
                src="/menu3.png"
                alt="Zero stress"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Zero stress</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

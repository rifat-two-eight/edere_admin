"use client";

import { Lightbulb } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1, 0.95]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0.96]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1, 0.97]);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black text-start">
          How it <span className="text-[#055E2C]">works</span>
        </h2>

        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <motion.div
            style={{ scale: scale1 }}
            className="sticky top-[100px] relative overflow-hidden rounded-[40px] bg-[#EFE5D6] h-[450px] flex flex-col md:flex-row"
          >
            {/* Background Curve */}
            <div className="absolute top-0 right-0 h-full w-full md:w-3/5 z-0 pointer-events-none">
              <Image
                src="/how1.svg"
                alt="Background"
                fill
                className="object-left md:object-center"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16 md:w-1/2 flex flex-col justify-center text-left items-start md:h-[500px]">
              <div className="mb-6">
                <Image src="/user1.svg" alt="User" width={64} height={64} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-[#2D2A26]">
                Set your profile
              </h3>
              <p className="text-[#2D2A26]/80 text-lg mb-8 max-w-md">
                Customize your profile to match your dietary needs.
                Set your allergies, restrictions, and preferences –
                including gluten sensitivity – in seconds.
              </p>
              <div className="bg-white rounded-full py-3 px-6 inline-flex items-center gap-3 w-fit shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#055E2C] flex items-center justify-center">
                  <Lightbulb size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Always inform staff about your allergies! We help you discover your options.
                </span>
              </div>
            </div>

            {/* Phone Image */}
            <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end items-end h-[400px] md:h-auto mr-12 self-end">
              <div className="relative w-[300px] h-[450px] md:h-[500px] md:translate-y-10">
                <Image
                  src="/phone.svg"
                  alt="App Screenshot"
                  fill
                  className="object-bottom"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{ scale: scale2 }}
            className="sticky top-[100px] relative overflow-hidden rounded-[40px] bg-[#2D2A26] h-[450px] flex flex-col md:flex-row"
          >
            <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
              <Image
                src="/how2.svg"
                alt="Background shape"
                fill
                className="object-right ml-[550px]"
              />
            </div>

            <div className="relative z-10 p-8 md:p-16 md:w-1/2 flex flex-col justify-center text-left items-start md:h-[500px]">
              <div className="mb-6">
                <Image src="/home.svg" alt="Store" width={64} height={64} />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Explore restaurants
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Browse restaurants near you and see how many dishes
                you can have. Green indicates dishes that are completely
                safe as prepared. Copper orange shows dishes you can
                modify to fit your needs.
              </p>
              <div className="bg-white rounded-full py-3 px-6 inline-flex items-center gap-3 w-fit shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#BD6E00] flex items-center justify-center">
                  <Lightbulb size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Green checkmarks indicate chef-verified restaurants!
                </span>
              </div>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end items-end h-[400px] md:h-auto mr-12 self-end">
              <div className="relative w-[300px] h-[450px] md:h-[500px] md:translate-y-10">
                <Image
                  src="/phone.svg"
                  alt="App Screenshot"
                  fill
                  className="object-bottom"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            style={{ scale: scale3 }}
            className="sticky top-[100px] relative overflow-hidden rounded-[40px] bg-[#055E2C] h-[450px] flex flex-col md:flex-row"
          >
            <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-0 pointer-events-none">
              <Image
                src="/how3.svg"
                alt="Background"
                fill
                className="object-left md:object-center ml-[220px]"
              />
            </div>

            <div className="relative z-10 p-8 md:p-16 md:w-1/2 flex flex-col justify-center text-left items-start md:h-[500px]">
              <div className="mb-6 w-16 h-16 relative">
                <Image
                  src="/dish.svg"
                  alt="Dish"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Dish-level recommendations
              </h3>
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Browse menus at the dish level. See safe options
                and get specific modification recommendations for
                dishes that can be adapted to your needs.
              </p>
              <div className="bg-white rounded-full py-3 px-6 inline-flex items-center gap-3 w-fit shadow-sm">
                <div className="w-6 h-6 rounded-full bg-[#2D2A26] flex items-center justify-center">
                  <Lightbulb size={16} className="text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">
                  Build collections and save your favorite restaurants for quick reference.
                </span>
              </div>
            </div>

            <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end items-end h-[400px] md:h-auto mr-12 self-end">
              <div className="relative w-[300px] h-[450px] md:h-[500px] md:translate-y-10">
                <Image
                  src="/phone.svg"
                  alt="App Screenshot"
                  fill
                  className="object-bottom"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

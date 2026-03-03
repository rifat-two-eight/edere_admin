"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Data for the cards
const items = [
  {
    id: 1,
    title: "For the ones with food allergies, restrictions & preferences",
    description: "Researching menus to find safe options is exhausting. Without clear allergen labels, it's all guesswork. We remove the uncertainty so you can pick what you want and enjoy your meal.",
    image: "/edere1.png",
    icon: "/Heartbeat.svg",
    iconBg: "bg-[#055E2C]",
  },
  {
    id: 2,
    title: "For friends, family & colleagues who know people with dietary needs",
    description: "Planning a dinner with someone? With Edere you will always be prepared and informed to find options to fit your guests needs.",
    image: "/restro.jpg",
    icon: "/Users.svg",
    iconBg: "bg-[#BD6E00]",
  },
  {
    id: 3,
    title: "For the ones trying out gluten-free for a month",
    description: "Listening to your body and testing things out? Our app supports your journey, whether it's temporary or long-term.",
    image: "/edere3.png",
    icon: "/Bread.svg",
    iconBg: "bg-[#2D2A26]",
  },
];

export default function EdereFor() {
  const [activeId, setActiveId] = useState<number | null>(2);

  // Toggle function
  const handleCardClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="why-us" className="py-28 bg-[#F9F7F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center text-[#2D2A26]" style={{ fontFamily: 'athletics' }}>
          Who is Edere for?
        </h2>

        {/* ── MOBILE/TABLET layout (< lg) ── */}
        <div className="lg:hidden flex flex-col gap-6 dm-sans items-center">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className="relative rounded-[24px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out w-full max-w-lg h-[400px] group"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt="Background"
                  fill
                  className="object-cover"
                />
                {/* Dark Overlay - Visible when active */}
                <div
                  className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${activeId === item.id ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>

              {/* Content Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <motion.div
                  layout
                  className="bg-white rounded-[20px] p-4 sm:p-4 shadow-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* Icon Box */}
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}
                      >
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={20}
                          height={20}
                          className="text-white w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#2D2A26] leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {activeId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <hr className="border-t border-[#2D2A26]/10 mb-3" />
                          <p className="text-[#2D2A26]/70 text-xs sm:text-sm">
                            {item.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP layout (lg+) — 100% ORIGINAL ── */}
        <div className="hidden lg:flex flex-row gap-6 dm-sans justify-center items-stretch min-h-[484px]">
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onMouseEnter={() => setActiveId(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  item,
  isActive,
  onMouseEnter,
}: {
  item: any;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-1 h-[500px] md:h-auto group`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt="Background"
          fill
          className="object-cover transition-transform duration-700"
        />
        {/* Dark Overlay - Visible when active */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-10"
            }`}
        />
      </div>

      {/* Content Box */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <motion.div
          layout
          className="bg-white rounded-[8px] p-4 shadow-lg"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              {/* Icon Box */}
              <div
                className={`w-14 h-14 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="text-white w-7 h-7 object-contain"
                />
              </div>

              {/* Title Content */}
              <h3 className="text-lg font-semibold text-[#2D2A26] leading-tight flex-1">
                {item.title}
              </h3>
            </div>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <hr className="border-t border-[#2D2A26]/10 mb-4" />
                  <p className="text-[#2D2A26]/70 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

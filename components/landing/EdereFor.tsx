"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Activity, HeartPulse, Users, Utensils } from "lucide-react";

// Data for the cards
const items = [
  {
    id: 1,
    title: "For the ones with food allergies, restrictions & preferences",
    description: "Researching menus to find safe options is exhausting. Without clear allergen labels, it's all guesswork. We remove the uncertainty so you can pick what you want and enjoy your meal.",
    image: "/edere1.png",
    icon: HeartPulse,
    iconBg: "bg-[#055E2C]",
  },
  {
    id: 2,
    title: "For friends, family & colleagues who know people with dietary needs",
    description: "Planning a dinner with someone? With Edere you will always be prepared and informed to find options to fit your guests needs.",
    image: "/edere2.jpg",
    icon: Users,
    iconBg: "bg-[#BD6E00]",
  },
  {
    id: 3,
    title: "For the ones trying out gluten-free for a month",
    description: "Listening to your body and testing things out? Our app supports your journey, whether it's temporary or long-term.",
    image: "/edere3.png",
    icon: Utensils,
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
    <section id="why-us" className="py-20 bg-[#F9F7F5]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#2D2A26]">
          Who is Edere for?
        </h2>

        {/* 
           Grid/Flex Layout
           On mobile: Stack vertically.
           On desktop: Row.
           We want them to stretch.
        */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch min-h-[600px]">
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onClick={() => handleCardClick(item.id)}
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
  onClick,
}: {
  item: any;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative rounded-[32px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex-1 h-[500px] md:h-auto group`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt="Background"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
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
          className="bg-white rounded-[24px] p-6 shadow-lg"
        >
          <div className="flex items-start gap-4">
            {/* Icon Box */}
            <div
              className={`w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center shrink-0`}
            >
              <item.icon className="text-white w-5 h-5" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#2D2A26] leading-tight">
                {item.title}
              </h3>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-[#2D2A26]/70 text-sm">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

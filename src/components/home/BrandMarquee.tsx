"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BrandMarqueeProps {
  imagesFolder?: string;
  images?: string[];
  cardClassName?: string;
  imageClassName?: string;
}

export default function BrandMarquee({
  imagesFolder = "brands",
  images,
  cardClassName,
  imageClassName
}: BrandMarqueeProps) {
  const defaultBrands = [
    "0.png", "1.png", "10-National-Geographic-Channel.png", "10.png", "11.png",
    "13.png", "14.png", "15.png", "16 (1).png", "17.png", "2.png", "20-disney.png",
    "21.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"
  ];

  const brandList = images || defaultBrands;
  const repeatList = brandList.length < 10 
    ? [...brandList, ...brandList, ...brandList, ...brandList] 
    : [...brandList, ...brandList];

  return (
    <div className="w-full overflow-hidden bg-[#0c0f0f] py-6 relative flex items-center">
      {/* Left/Right Gradient Masks for smooth fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0c0f0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0c0f0f] to-transparent z-10 pointer-events-none" />
      
      {/* The scrolling container */}
      <motion.div
        className="flex gap-6 md:gap-8 px-6 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: brandList.length < 10 ? 25 : 40,
          repeat: Infinity,
        }}
      >
        {repeatList.map((brand, i) => (
          <div 
            key={i} 
            className={cardClassName || "flex-shrink-0 w-[100px] h-[50px] md:w-[140px] md:h-[65px] relative bg-white border border-stone-200 rounded-xl p-3 hover:bg-stone-50 hover:scale-105 transition-all duration-300 shadow-md"}
          >
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image 
                src={`/${imagesFolder}/${brand}`} 
                alt="Channel Logo" 
                fill
                sizes="(max-width: 768px) 160px, 260px"
                className={imageClassName || "object-contain drop-shadow-md rounded-lg"}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

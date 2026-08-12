"use client";

import Image from "next/image";
import { m } from "framer-motion";

export default function TVMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[1250px] flex items-center justify-center">
      {/* Background Ambient Glow Behind Mockup */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-indigo-500/30 to-purple-500/25 blur-[100px] rounded-full transform scale-125 pointer-events-none animate-pulse duration-1000" />
      
      {/* Floating Animated Container */}
      <m.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ 
          opacity: 1, 
          y: [0, -16, 0],
          scale: 1
        }}
        transition={{
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut"
          },
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 }
        }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="relative z-10 w-full transition-transform duration-500 filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
      >
        <Image
          alt="iscreenhd IPTV streaming on TV, phone, tablet, and laptop"
          className="h-auto w-full object-contain filter drop-shadow-[0_12px_30px_rgba(6,182,212,0.2)]"
          height={1000}
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          src="/bunnystream-iptv-transparent.webp"
          width={1800}
        />
      </m.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Globe2, List, Monitor, Trophy, Zap } from "lucide-react";
import TVMockup from "./TVMockup";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] py-20 sm:py-28 lg:py-32 overflow-hidden flex items-center bg-[#0b0e14]">
      {/* Background Decorative Glow (FIREST SITE radial lighting) */}
      <div className="absolute top-[15%] left-[5%] w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,245,255,0.12)_0%,transparent_65%)] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute top-[35%] right-[5%] w-[650px] h-[650px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_65%)] rounded-full z-0 pointer-events-none hidden sm:block"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-[1680px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center w-full">
          
          {/* LEFT CONTENT (5 Columns) */}
          <div className="w-full lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            
            {/* Service badge */}
            <motion.div {...fadeUp(0.1)} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 bg-cyan-950/40 border border-cyan-500/30 rounded-full px-4 py-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,245,255,0.9)] animate-pulse"></span>
                <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase font-mono">
                  Premium IPTV for every screen
                </span>
              </div>
            </motion.div>

            <motion.h1 {...fadeUp(0.2)} className="w-full whitespace-normal break-normal text-5xl sm:text-6xl lg:text-6xl xl:text-[72px] font-extrabold tracking-[-0.06em] leading-[1.02] text-slate-100 font-sans">
              <span className="block font-black text-white uppercase">
                Ultimate iscreenhd
              </span>
              <span className="bg-gradient-to-r from-[#b286ff] via-[#8585ff] to-[#23bdfa] text-transparent bg-clip-text block mt-1 font-black uppercase drop-shadow-[0_0_25px_rgba(112,90,255,0.4)]">
                IPTV Experience
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p {...fadeUp(0.3)} className="block w-full max-w-[620px] min-w-0 whitespace-normal break-normal [overflow-wrap:normal] text-pretty text-lg sm:text-xl leading-[1.65] text-slate-300 font-normal">
              Unlock a world of entertainment in HD &amp; 4K. Enjoy reliable IPTV with <strong className="font-bold text-white">50,000+ live channels</strong>, movies, and series on every device, worldwide.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px] pt-3">
              <motion.a
                href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iscreenhd%20IPTV."
                target="_blank"
                rel="noreferrer"
                aria-label="Get free trial"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.06, y: -4, boxShadow: "0 0 60px rgba(21,210,133,0.6)" }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex-1 py-5 px-8 rounded-full text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#45d7a1] to-[#08a956] shadow-[0_0_38px_rgba(21,210,133,0.3)] transition-colors duration-300 flex items-center justify-center tracking-wide"
              >
                <Trophy className="mr-2 h-5 w-5" />
                <span>Get Free Trial</span>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1"
              >
                <Link
                  href="#pricing"
                  aria-label="View plans"
                  className="w-full py-5 px-8 rounded-full text-base sm:text-lg font-semibold text-white bg-[#111827]/90 hover:bg-[#1f2937] glass-panel border border-white/15 hover:border-white/30 transition-all duration-300 flex items-center justify-center tracking-wide gap-2.5 shadow-lg"
                >
                  <List className="h-5 w-5 text-cyan-400" />
                  <span>View Plans</span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex w-full max-w-[600px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-slate-400 lg:justify-start pt-2">
              <span className="flex items-center gap-2"><Trophy className="h-4 w-4 text-amber-400" /> Live Sports &amp; PPV</span>
              <span className="flex items-center gap-2"><Monitor className="h-4 w-4 text-cyan-400" /> All Devices</span>
              <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-400" /> Instant Setup</span>
              <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-sky-400" /> 150+ Countries 🇺🇸🇬🇧🇨🇦🇩🇪🇫🇷🇪🇸</span>
            </motion.div>

          </div>

          {/* RIGHT CONTENT (7 Columns) - Maximized Device Mockup Space */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="w-full lg:col-span-7 min-w-0 flex justify-center lg:justify-end pt-6 lg:pt-0"
          >
            <div className="w-full max-w-[1250px] lg:scale-105 xl:scale-110 transform origin-center lg:origin-right transition-transform duration-500">
              <TVMockup />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}


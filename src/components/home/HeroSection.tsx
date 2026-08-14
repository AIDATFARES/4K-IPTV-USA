import Link from "next/link";
import Image from "next/image";
import { Trophy, List, Monitor, Zap, Globe2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] pt-6 sm:pt-8 lg:pt-10 pb-16 flex items-start justify-center bg-[#121414] overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-custom-bg.webp"
          alt="IPTVDoor Background"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[#121414]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-5 pt-0 -mt-2 sm:-mt-4">

        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-1.5 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#d32f2f] shadow-[0_0_8px_rgba(211,47,47,0.8)] animate-pulse"></span>
          <span className="text-xs font-bold text-white tracking-widest uppercase font-mono">
            LIVE NOW: Cinematic 4K Streaming
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] drop-shadow-2xl text-center">
          <span className="text-[#d32f2f]">IPTVDoor</span> <span className="text-white">The Best IPTV</span> <br />
          <span className="text-white">Service Provider for</span> <br />
          <span className="text-white">2026</span>
        </h1>

        {/* Promotional Sub-Headline */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 drop-shadow-lg">
          <span className="text-white">Get High-Quality Streaming for Just </span>
          <Link href="#pricing" className="text-amber-400 hover:text-amber-300 transition-colors">
            $4.2/Month!
          </Link>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-stone-300 font-normal leading-[1.6] max-w-[850px] mt-5">
          Choose from{" "}
          <Link prefetch={false} href="/channels" className="text-[#d32f2f] font-semibold hover:text-red-400 transition-colors">
            50,000+ Live Channels
          </Link>
          , +120,000 Films & Series, and 200,000+ VODs. Enjoy your time with excellent image quality up to 4K on{" "}
          <Link prefetch={false} href="/installation" className="text-[#d32f2f] font-semibold hover:text-red-400 transition-colors">
            any device of your choice
          </Link>{" "}
          including Smart TV, Android Box, PC, tablet, and smartphone—anytime and anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center">
          <a
            href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iptvdoor%20IPTV."
            target="_blank"
            rel="noreferrer"
            aria-label="Get free trial"
            className="group relative py-4 px-10 text-base sm:text-lg font-bold text-white bg-[#d32f2f] hover:bg-[#b71c1c] transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105 hover:-translate-y-1 shadow-[0_0_30px_rgba(211,47,47,0.3)] hover:shadow-[0_0_40px_rgba(211,47,47,0.6)] active:scale-95"
          >
            <span>Get Free Trial</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            href="#pricing"
            aria-label="View plans"
            className="py-4 px-10 text-base sm:text-lg font-bold text-white bg-transparent border-[1.5px] border-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-105 hover:-translate-y-1 active:scale-95"
          >
            <List className="h-5 w-5" />
            <span>View Plans</span>
          </Link>
        </div>

        {/* Feature Tags */}
        <div className="flex w-full max-w-[750px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-stone-300 pt-4">
          <Link href="/channels" className="flex items-center gap-2 hover:text-[#d32f2f] transition-colors">
            <Trophy className="h-4 w-4 text-amber-400" /> Live Sports & PPV
          </Link>
          <Link href="/installation" className="flex items-center gap-2 hover:text-[#d32f2f] transition-colors">
            <Monitor className="h-4 w-4 text-red-400" /> All Devices
          </Link>
          <Link href="/installation" className="flex items-center gap-2 hover:text-[#d32f2f] transition-colors">
            <Zap className="h-4 w-4 text-amber-400" /> Instant Setup
          </Link>
          <span className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-sky-400" /> 150+ Countries 🇺🇸🇬🇧🇨🇦🇩🇪🇫🇷🇪🇸</span>
        </div>

      </div>
    </section>
  );
}

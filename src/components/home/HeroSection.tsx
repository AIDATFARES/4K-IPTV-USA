"use client";

import Link from "next/link";
import Image from "next/image";
import { Trophy, List, Monitor, Zap, Globe2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-88px)] pt-6 sm:pt-8 lg:pt-10 pb-16 flex items-start justify-center bg-[#121414] overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-custom-bg.png"
          alt="IPTVDoor Background"
          fill
          priority
          className="object-cover opacity-[0.4]"
        />
        <div className="absolute inset-0 bg-[#121414]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 flex flex-col items-center gap-5 pt-0 -mt-2 sm:-mt-4">

        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded px-4 py-1.5 backdrop-blur-md animate-fade-up opacity-0">
          <span className="w-2 h-2 rounded-full bg-[#d32f2f] shadow-[0_0_8px_rgba(211,47,47,0.8)] animate-pulse"></span>
          <span className="text-xs font-bold text-white tracking-widest uppercase font-mono">
            LIVE NOW: Cinematic 4K Streaming
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] animate-fade-up [animation-delay:100ms] opacity-0 drop-shadow-2xl text-center">
          <span className="text-[#d32f2f]">IPTVDoor</span> <span className="text-white">The Best IPTV</span> <br />
          <span className="text-white">Service Provider for</span> <br />
          <span className="text-white">2026</span>
        </h1>

        {/* Promotional Sub-Headline */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 animate-fade-up [animation-delay:150ms] opacity-0 drop-shadow-lg">
          <span className="text-white">Get High-Quality Streaming for Just </span>
          <Link href="#pricing" className="text-amber-400 hover:text-amber-300 transition-colors">
            $4.2/Month!
          </Link>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-stone-300 font-normal leading-[1.6] max-w-[850px] mt-5 animate-fade-up [animation-delay:200ms] opacity-0">
          Choose from{" "}
          <Link href="/channels" className="text-[#d32f2f] font-semibold hover:text-red-400 transition-colors">
            50,000+ Live Channels
          </Link>
          , +120,000 Films & Series, and 200,000+ VODs. Enjoy your time with excellent image quality up to 4K on{" "}
          <Link href="/installation" className="text-[#d32f2f] font-semibold hover:text-red-400 transition-colors">
            any device of your choice
          </Link>{" "}
          including Smart TV, Android Box, PC, tablet, and smartphone—anytime and anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 animate-fade-up [animation-delay:300ms] opacity-0 justify-center">
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
        <div className="flex w-full max-w-[750px] flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-stone-300 pt-4 animate-fade-up [animation-delay:400ms] opacity-0">
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

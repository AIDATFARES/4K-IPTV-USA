"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0e14]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-[#0b0e14]/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 h-20 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0 z-20">
          <BrandLogo />
        </Link>

        {/* CENTER TRAPEZOID NAV CONTAINER */}
        <div className="hidden lg:flex items-center justify-center relative h-full">
          
          {/* Angled Trapezoid Spotlight Background Shape */}
          <div 
            className="absolute inset-y-1.5 inset-x-[-24px] bg-gradient-to-b from-[#181c2f]/90 via-[#121626]/80 to-[#0e111d]/90 border-x border-indigo-500/40 shadow-[0_0_25px_rgba(99,102,241,0.15)] pointer-events-none"
            style={{
              clipPath: "polygon(28px 0%, calc(100% - 28px) 0%, 100% 100%, 0% 100%)",
            }}
          />

          {/* Nav Links */}
          <nav className="relative z-10 flex items-center gap-6 xl:gap-8 px-6 text-sm font-semibold">
            <Link
              href="/"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-slate-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              href="/channels"
              className="text-slate-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Channels List
            </Link>
            <Link
              href="/installation"
              className="text-slate-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-slate-300 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              Contact Support
            </Link>

          </nav>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden lg:flex items-center gap-4 shrink-0 z-20">

          <a
            href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iscreenhd%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors z-20"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f1a] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-300">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Pricing
            </Link>
            <Link
              href="/channels"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Channels List
            </Link>
            <Link
              href="/installation"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white py-1"
            >
              Contact Support
            </Link>

          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iscreenhd%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-3 rounded-full text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

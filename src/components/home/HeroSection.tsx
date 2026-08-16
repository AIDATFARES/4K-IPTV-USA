import Link from "next/link";
import { Monitor, Laptop, Smartphone, Tablet } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 flex items-center justify-center bg-black overflow-hidden text-center">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-family.webp"
          alt="Family watching IPTV Fiesta"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 inset-x-0 h-16 md:h-24 bg-gradient-to-b from-white via-white/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-16 md:h-24 bg-gradient-to-t from-white via-white/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 flex flex-col items-center gap-6">

        {/* Top Tag */}
        <div className="inline-flex items-center border border-[#FF6B00] rounded-full px-4 py-1.5 backdrop-blur-sm bg-black/30">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] mr-2 animate-pulse"></span>
          <span className="text-[10px] sm:text-xs font-bold text-[#FF6B00] tracking-widest uppercase">
            TRUSTED BY 154,000+ STREAMERS WORLDWIDE
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1] text-white uppercase drop-shadow-2xl mt-4">
          BEST <span className="text-[#FF6B00]">IPTV</span> STREAMING –<br />
          IPTV FIESTA
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/90 font-medium max-w-2xl mt-2 drop-shadow-lg">
          Everything you want to watch. One subscription. Any screen, anywhere.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 mt-8 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20fiestaiptv%20IPTV."
            target="_blank"
            rel="noreferrer"
            className="py-4 px-8 text-sm sm:text-base font-bold text-black bg-[#FF6B00] hover:bg-[#E66000] transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105"
          >
            GET 12 MONTHS — 2 MONTHS FREE →
          </a>
          <a
            href="#pricing"
            className="py-4 px-8 text-sm sm:text-base font-bold text-[#FF6B00] bg-transparent border-2 border-[#FF6B00] hover:bg-[#FF6B00]/10 transition-all duration-300 flex items-center justify-center tracking-wider hover:scale-105"
          >
            SEE PLANS →
          </a>
        </div>

        {/* Bottom Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-white/90 mt-4">
          <div className="flex flex-col items-center gap-2 group hover:text-[#FF6B00] transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Smart TV</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#FF6B00] transition-colors cursor-pointer">
            <Laptop className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Laptop / PC</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#FF6B00] transition-colors cursor-pointer">
            <Smartphone className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Android</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#FF6B00] transition-colors cursor-pointer">
            <Tablet className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">IOS</span>
          </div>
          <div className="flex flex-col items-center gap-2 group hover:text-[#FF6B00] transition-colors cursor-pointer">
            <Monitor className="h-6 w-6 sm:h-8 sm:w-8 stroke-[1.2]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider">Windows</span>
          </div>
        </div>

      </div>
    </section>
  );
}

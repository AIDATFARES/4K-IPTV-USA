"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Search, 
  Sparkles, 
  Trophy, 
  Tv, 
  Zap, 
  CirclePlay,
  Flame,
  Radio
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BrandMarquee from "@/components/home/BrandMarquee";

// Category Overview Cards (matching reference image)
const categoryCards = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: [
      "Football, basketball, UFC, boxing, F1, and more",
      "HD/FHD and 4K 60FPS streams available",
      "Sky Sports, TNT, BeIN, ESPN, DAZN & PPV"
    ],
    count: "12,500+ Channels",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Movie & VOD Content",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "200,000+ VODs"
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: [
      "Global, national and regional news networks",
      "24/7 breaking news and special live coverage",
      "BBC News, CNN, Sky News, Fox, CNBC, Bloomberg"
    ],
    count: "3,200+ Channels"
  },
  {
    icon: Baby,
    title: "Kids & Family",
    items: [
      "Cartoons, learning & family entertainment",
      "Dedicated child-friendly programming",
      "Disney, Cartoon Network, Nickelodeon, Boomerang"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: [
      "Reality TV, variety, music, lifestyle & drama",
      "Popular everyday cable and satellite networks",
      "US, UK, Canadian & European top entertainment"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "International",
    items: [
      "150+ country packages & regional channels",
      "Local sports, news, culture & native audio",
      "Europe, Americas, MENA, Asia & Africa"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "+120,000 Films & Series"
  }
];

// Channel Explorer Sample Data
interface ChannelItem {
  id: string;
  name: string;
  category: string;
  country: string;
  flag: string;
  quality: "4K HDR" | "FHD 60FPS" | "FHD" | "HD";
  logo: string;
  isLive?: boolean;
}

const sampleChannels: ChannelItem[] = [
  // Sports
  { id: "1", name: "Sky Sports Main Event 4K", category: "Sports", country: "UK", flag: "gb", quality: "4K HDR", logo: "⚽", isLive: true },
  { id: "2", name: "TNT Sports 1 4K 60FPS", category: "Sports", country: "UK", flag: "gb", quality: "4K HDR", logo: "🏆", isLive: true },
  { id: "3", name: "BeIN Sports 1 Premium", category: "Sports", country: "MENA", flag: "qa", quality: "FHD 60FPS", logo: "⚽", isLive: true },
  { id: "4", name: "ESPN 1 Ultra HD", category: "Sports", country: "US", flag: "us", quality: "4K HDR", logo: "🏀", isLive: true },
  { id: "5", name: "DAZN 1 Bar HD", category: "Sports", country: "DE", flag: "de", quality: "FHD 60FPS", logo: "🥊" },
  { id: "6", name: "Canal+ Sport 4K", category: "Sports", country: "FR", flag: "fr", quality: "4K HDR", logo: "🏎️", isLive: true },
  { id: "7", name: "SuperSport Grandstand", category: "Sports", country: "ZA", flag: "za", quality: "FHD 60FPS", logo: "🏉" },
  { id: "8", name: "Eurosport 1 4K", category: "Sports", country: "EU", flag: "eu", quality: "4K HDR", logo: "🚴" },

  // Movies & VOD
  { id: "9", name: "HBO HD East", category: "Movies", country: "US", flag: "us", quality: "FHD 60FPS", logo: "🎬" },
  { id: "10", name: "Sky Cinema Premiere 4K", category: "Movies", country: "UK", flag: "gb", quality: "4K HDR", logo: "🍿" },
  { id: "11", name: "Cinemax Action", category: "Movies", country: "US", flag: "us", quality: "FHD", logo: "💥" },
  { id: "12", name: "Starz Cinema HD", category: "Movies", country: "US", flag: "us", quality: "FHD", logo: "⭐" },
  { id: "13", name: "Canal+ Cinema 4K", category: "Movies", country: "FR", flag: "fr", quality: "4K HDR", logo: "🎥" },
  { id: "14", name: "Movistar Estrenos 4K", category: "Movies", country: "ES", flag: "es", quality: "4K HDR", logo: "📽️" },

  // Entertainment & Shows
  { id: "15", name: "BBC One London 4K", category: "Entertainment", country: "UK", flag: "gb", quality: "4K HDR", logo: "📺", isLive: true },
  { id: "16", name: "ITV 1 HD", category: "Entertainment", country: "UK", flag: "gb", quality: "FHD", logo: "🇬🇧" },
  { id: "17", name: "CBS East FHD", category: "Entertainment", country: "US", flag: "us", quality: "FHD 60FPS", logo: "🇺🇸" },
  { id: "18", name: "TF1 4K France", category: "Entertainment", country: "FR", flag: "fr", quality: "4K HDR", logo: "🇫🇷" },
  { id: "19", name: "RTI 1 Italia HD", category: "Entertainment", country: "IT", flag: "it", quality: "FHD", logo: "🇮🇹" },

  // News
  { id: "20", name: "BBC News 24 HD", category: "News", country: "UK", flag: "gb", quality: "FHD", logo: "📰", isLive: true },
  { id: "21", name: "CNN International HD", category: "News", country: "US", flag: "us", quality: "FHD", logo: "🌐", isLive: true },
  { id: "22", name: "Sky News UK 4K", category: "News", country: "UK", flag: "gb", quality: "4K HDR", logo: "📡", isLive: true },
  { id: "23", name: "Al Jazeera English HD", category: "News", country: "MENA", flag: "qa", quality: "FHD", logo: "🌍", isLive: true },

  // Kids
  { id: "24", name: "Disney Channel 4K", category: "Kids", country: "US", flag: "us", quality: "4K HDR", logo: "🏰" },
  { id: "25", name: "Cartoon Network HD", category: "Kids", country: "UK", flag: "gb", quality: "FHD", logo: "🎨" },
  { id: "26", name: "Nickelodeon HD", category: "Kids", country: "US", flag: "us", quality: "FHD", logo: "🧽" },
];

export default function ChannelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("All");

  const filteredChannels = useMemo(() => {
    return sampleChannels.filter((channel) => {
      const matchesTab = selectedTab === "All" || channel.category === selectedTab;
      const matchesSearch =
        searchQuery === "" ||
        channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        channel.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [selectedTab, searchQuery]);

  return (
    <main className="min-h-screen bg-white text-black pt-24 pb-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,0,0.06)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,107,0,0.04)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-[#2563EB]/30 bg-[#2563EB]/5 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#2563EB] mb-6"
          >
            <Radio className="w-3.5 h-3.5 mr-2 text-[#2563EB] animate-pulse inline" />
            <span>+50,000 CHANNELS · +120,000 FILMS &amp; SERIES · 200,000+ VODS</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
          >
            <span className="block text-black">Popular 4K IPTV USA</span>
            <span className="mt-1 block text-[#2563EB]">Live Channels &amp; VOD.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-700 leading-relaxed"
          >
            Browse our full channel lineup featuring live sports, movies, news, entertainment, and on-demand series in 4K &amp; HD quality from over 150+ countries.
          </motion.p>
        </div>

        {/* SECTION 1: Category Cards Grid (Matching User Reference Image) */}
        <section className="mb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="relative min-h-[240px] rounded-2xl border-2 border-slate-100 bg-white px-6 pb-6 pt-14 shadow-sm hover:border-[#2563EB] hover:shadow-lg hover:shadow-[#2563EB]/10 transition-all duration-300 group"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30 group-hover:scale-110 group-hover:bg-blue-500 transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-black px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-white shadow-sm">
                      {category.tag}
                    </span>
                  )}

                  <h2 className="text-center text-xl font-extrabold text-black tracking-wide">
                    {category.title}
                  </h2>

                  <ul className="mt-4 space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Available</span>
                    <span className="text-xs font-black text-[#2563EB]">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION: Channel Brand Marquee Strip */}
        <section className="mb-16 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
          <BrandMarquee />
        </section>

        {/* SECTION 2: Live Channel Explorer */}
        <section className="bg-white rounded-3xl border-2 border-slate-100 p-6 sm:p-10 shadow-lg shadow-black/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black flex items-center gap-3">
                <Flame className="w-6 h-6 text-[#2563EB]" />
                Live Channel Directory Explorer
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Type a channel name or filter by category to inspect available streams.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
              <input
                type="text"
                placeholder="Search channel or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs text-black placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-100 pb-4">
            {["All", "Sports", "Movies", "Entertainment", "News", "Kids"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                  selectedTab === tab
                    ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20"
                    : "bg-white text-slate-500 hover:text-black border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredChannels.map((channel) => (
                <motion.div
                  key={channel.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border-2 border-slate-100 hover:border-[#2563EB] rounded-2xl p-4 flex items-center gap-3.5 transition-all hover:shadow-md hover:shadow-[#2563EB]/10 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    {channel.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${channel.flag}.webp`}
                        alt={channel.country}
                        className="w-4 h-3 rounded-[2px] object-cover"
                      />
                      <p className="text-xs font-bold text-black truncate group-hover:text-[#2563EB]">
                        {channel.name}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20">
                        {channel.quality}
                      </span>
                      {channel.isLive && (
                        <span className="text-[8px] font-bold text-[#2563EB] flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" /> LIVE
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* SECTION 3: CTA Bottom Box */}
        <section className="mt-16 bg-[#2563EB]/5 rounded-3xl border-2 border-[#2563EB]/20 p-8 sm:p-12 text-center shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-[#2563EB] mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black uppercase text-black">Ready to start watching?</h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Choose your subscription plan to receive instant access credentials on WhatsApp within minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-full bg-black text-white font-black text-sm uppercase tracking-wider hover:bg-[#2563EB] transition-colors"
              >
                View IPTV Subscription Plans
              </Link>
              <a
                href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%204kiptvusa%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-black font-black text-sm uppercase tracking-wider hover:border-[#2563EB] transition-colors"
              >
                Get Free Trial via WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

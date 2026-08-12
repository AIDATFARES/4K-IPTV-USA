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
    title: "Movie Channels",
    items: [
      "Premium movie networks & cinema channels",
      "Curated 4K VOD library updated daily",
      "HBO, Cinemax, Sky Cinema, Starz & VOD"
    ],
    count: "80,000+ Movies"
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
    count: "25,000+ Channels"
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: [
      "Latest released seasons with daily updates",
      "Complete boxsets, timeless classics & VOD",
      "Netflix, Amazon, Apple TV+, HBO Max & Disney+"
    ],
    count: "120,000+ Series"
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
    <main className="min-h-screen bg-[#060814] text-white pt-24 pb-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_65%)] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-300 mb-6"
          >
            <Radio className="w-3.5 h-3.5 mr-2 text-cyan-400 animate-pulse inline" />
            <span>50,000+ LIVE CHANNELS &amp; 200,000+ VOD</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="block">Popular iscreenhd</span>
            <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">IPTV Channels</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed"
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
                  className="relative min-h-[240px] rounded-xl border border-white/10 border-t-2 border-t-cyan-400 bg-[#0f1322] px-6 pb-6 pt-14 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] transition-all duration-300 group"
                >
                  {/* Top Floating Badge Icon */}
                  <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#060814] bg-cyan-400 text-slate-950 shadow-[0_6px_20px_rgba(6,182,212,0.4)] group-hover:scale-110 group-hover:bg-cyan-300 transition-transform">
                    <Icon className="h-6 w-6" strokeWidth={2.5} />
                  </span>

                  {/* Optional Popular Tag */}
                  {category.tag && (
                    <span className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-950 shadow-md">
                      {category.tag}
                    </span>
                  )}

                  <h2 className="text-center text-xl font-extrabold text-white tracking-wide">
                    {category.title}
                  </h2>

                  <ul className="mt-4 space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Available</span>
                    <span className="text-xs font-black text-cyan-300">{category.count}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: Live Channel Explorer */}
        <section className="bg-[#0b0e1b] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white flex items-center gap-3">
                <Flame className="w-6 h-6 text-amber-400" />
                Live Channel Directory Explorer
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Type a channel name or filter by category to inspect available streams.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search channel or country..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#12162a] border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/10 pb-4">
            {["All", "Sports", "Movies", "Entertainment", "News", "Kids"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all ${
                  selectedTab === tab
                    ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                    : "bg-[#12162a] text-slate-400 hover:text-white border border-white/10"
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
                  className="bg-[#12162a]/90 border border-white/10 hover:border-cyan-400/50 rounded-2xl p-4 flex items-center gap-3.5 transition-all hover:bg-[#161b33] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0b0e1b] border border-white/10 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
                    {channel.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${channel.flag}.png`}
                        alt={channel.country}
                        className="w-4 h-3 rounded-[2px] object-cover"
                      />
                      <h3 className="text-xs font-bold text-white truncate group-hover:text-cyan-300">
                        {channel.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                        {channel.quality}
                      </span>
                      {channel.isLive && (
                        <span className="text-[8px] font-bold text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE
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
        <section className="mt-16 bg-gradient-to-r from-indigo-950/70 via-purple-950/70 to-cyan-950/70 rounded-3xl border border-cyan-500/30 p-8 sm:p-12 text-center shadow-[0_0_40px_rgba(6,182,212,0.15)] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <CirclePlay className="w-10 h-10 text-cyan-300 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl font-black uppercase text-white">Ready to start watching?</h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Choose your subscription plan to receive instant access credentials on WhatsApp within minutes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:scale-105 transition-transform"
              >
                View IPTV Subscription Plans
              </Link>
              <a
                href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iscreenhd%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-[#12162a] border border-white/20 text-white font-black text-sm uppercase tracking-wider hover:border-cyan-400 transition-colors"
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

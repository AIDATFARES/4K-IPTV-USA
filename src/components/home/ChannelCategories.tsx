"use client";

import { motion } from "framer-motion";
import { Baby, Check, Film, Globe2, Layers3, Monitor, Newspaper, Trophy } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Trophy,
    title: "Sports Channels",
    items: ["Football, basketball, UFC, boxing, F1, and more", "HD/FHD and 4K where available", "Fast channel switching"],
  },
  {
    icon: Film,
    title: "Movie Channels",
    items: ["Premium movie networks", "Curated collections, updated frequently", "On-demand library available"],
  },
  {
    icon: Newspaper,
    title: "News Channels",
    items: ["Global and local networks", "Breaking news and special reports", "Business, tech, finance"],
  },
  {
    icon: Baby,
    title: "Kids Channels",
    items: ["Cartoons, learning & family content", "Parental-control friendly"],
  },
  {
    icon: Monitor,
    title: "Entertainment",
    items: ["Reality, variety, music & lifestyle", "Popular everyday channels"],
  },
  {
    icon: Globe2,
    title: "International",
    items: ["Country & language based packages", "Local sports and news options"],
  },
  {
    icon: Layers3,
    title: "Series & Shows",
    items: ["Popular seasons with daily updates", "New releases and timeless favourites"],
  },
];

export default function ChannelCategories() {
  return (
    <section className="relative z-10 bg-[#060814] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-[1100px] px-5">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/35 bg-cyan-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-cyan-300">Explore Content</span>
          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl">
            <span className="block">Popular iscreenhd</span>
            <span className="mt-1 block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">IPTV Channel Categories</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <Link className="group inline-flex items-center gap-1.5 rounded-full border border-cyan-400/50 bg-cyan-500/10 px-6 py-2.5 text-xs font-bold text-cyan-200 transition-colors hover:bg-cyan-400 hover:text-slate-950" href="/channels">
              View iscreenhd IPTV Channel List
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="relative min-h-[232px] rounded-xl border border-white/10 border-t-2 border-t-cyan-400 bg-[#0f1322] px-5 pb-5 pt-14 shadow-[0_10px_28px_rgba(0,0,0,0.18)]"
                initial={{ opacity: 0, y: 16 }}
                key={category.title}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#060814] bg-cyan-500 text-slate-950 shadow-[0_6px_16px_rgba(6,182,212,0.35)]">
                  <Icon className="h-6 w-6" strokeWidth={2.5} />
                </span>
                <p className="text-center text-xl font-extrabold">{category.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li className="flex items-start gap-2 text-sm leading-5 text-slate-300" key={item}>
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" strokeWidth={2.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-slate-400">
          Find the comprehensive <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/channels">iscreenhd IPTV Channel List</Link> or navigate to our <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/installation">iscreenhd IPTV Installation Guide</Link> for a quick start.
        </p>
      </div>
    </section>
  );
}

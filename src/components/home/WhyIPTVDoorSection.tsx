"use client";

import { motion } from "framer-motion";
import { Bolt, Clapperboard, Globe2, Layers3, Monitor, ShieldCheck, Smartphone } from "lucide-react";

const primaryFeatures = [
  { icon: Monitor, title: "4K Ultra HD Streaming", text: "Watch every channel and live event in crisp 4K, Full HD, and HD quality. Our anti-freeze technology ensures smooth streaming on every device.", tags: ["4K UHD", "FULL HD", "ANTI-FREEZE"], accent: "violet" },
  { icon: Layers3, title: "+50,000 Live Channels", text: "Access +50,000 live channels from sports, news, entertainment, kids, and more. Every broadcast is delivered in crystal-clear quality.", tags: ["160+ COUNTRIES", "SPORTS", "NEWS", "KIDS"], accent: "cyan" },
  { icon: Clapperboard, title: "200,000+ VODs", text: "Enjoy +120,000 Films & Series and a 200,000+ VOD library with movies, series, replays, highlights, and documentaries available any time, on any device.", tags: ["120,000+ FILMS", "SERIES", "200,000+ VODS"], accent: "orange" },
];

const benefits = [
  { icon: Bolt, title: "Instant Activation", text: "Your subscription is activated within minutes.", color: "text-red-400" },
  { icon: Smartphone, title: "All Devices Supported", text: "Smart TV, Android, iOS, Mac, Fire Stick, PC, and more.", color: "text-sky-400" },
  { icon: Globe2, title: "Works Worldwide", text: "Enjoy IPTVDoor wherever you are, on any connection.", color: "text-red-400" },
  { icon: ShieldCheck, title: "99.9% Uptime", text: "Reliable servers with stable, buffer-free streaming.", color: "text-red-300" },
];

export default function WhyIPTVDoorSection() {
  return <section className="relative overflow-hidden bg-[#0c0f0f] py-24 sm:py-28">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(74,53,155,0.13),transparent_42%)] pointer-events-none" />
    <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8">
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex rounded-full border border-red-400/35 bg-red-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-red-300">Why choose IPTVDoor?</span>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl"><span className="block">The Ultimate</span><span className="mt-1 block bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent">IPTVDoor Experience</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400">Everything you need for premium live television and on-demand entertainment—on any device, anywhere in the world.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {primaryFeatures.map((feature, index) => {
          const Icon = feature.icon;
          const active = index === 1;
          return <motion.article key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`flex min-h-[285px] flex-col rounded-2xl border p-6 ${active ? "border-red-400/70 bg-gradient-to-b from-red-500/[0.12] to-[#0c0f1c] shadow-[0_0_32px_rgba(99,102,241,0.13)]" : "border-white/10 bg-[#121414]"}`}>
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${feature.accent === "orange" ? "border-red-400/30 bg-red-500/10 text-red-400" : feature.accent === "cyan" ? "border-red-400/30 bg-red-500/10 text-red-400" : "border-red-400/30 bg-red-500/10 text-red-300"}`}><Icon className="h-5 w-5" /></span>
            <p className="mt-5 text-lg font-extrabold uppercase text-white">{feature.title}</p>
            <p className="mt-4 text-xs leading-5 text-stone-400">{feature.text}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-5">{feature.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-bold tracking-wide text-stone-300">{tag}</span>)}</div>
          </motion.article>;
        })}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => { const Icon = benefit.icon; return <motion.div key={benefit.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 + index * 0.07 }} className="flex min-h-[112px] gap-3 rounded-xl border border-white/10 bg-[#121414] p-5"><Icon className={`h-5 w-5 shrink-0 ${benefit.color}`} /><span><span className="block text-sm font-bold text-white">{benefit.title}</span><small className="mt-1 block text-[11px] leading-4 text-stone-500">{benefit.text}</small></span></motion.div>; })}
      </div>
    </div>
  </section>;
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Trophy, Tv } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Choose Your Plan", text: "Pick 3 months, 6 months or 1 year. Select the number of devices you need and click Get Started above." },
  { number: "02", title: "Receive Your Credentials", text: "After payment we send your M3U link or Xtream login directly to your WhatsApp or email — within minutes, 24/7." },
  { number: "03", title: "Start Streaming Instantly", text: "Open TiviMate, IPTV Smarters or your preferred player, enter your credentials and enjoy live TV, movies and series in HD/4K." },
];

const stats = [
  { value: "50K+", label: "LIVE CHANNELS" },
  { value: "200K+", label: "MOVIES & SERIES" },
  { value: "4K", label: "ULTRA HD" },
  { value: "99.9%", label: "SERVER UPTIME" },
];

export default function HowItWorksSection() {
  return (
    <section className="relative z-10 overflow-hidden border-y border-white/[0.06] bg-[#080a17] py-16 sm:py-20">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_15%_45%,rgba(84,44,173,0.14),transparent_62%)]" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-10 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <motion.div initial={{ opacity: 0, x: -18 }} transition={{ duration: 0.45 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/35 bg-violet-500/10 px-3 py-1 text-[8px] font-extrabold uppercase tracking-[0.14em] text-violet-200">
            <Trophy className="h-3 w-3 text-amber-300" />
            Setup in 60 seconds
          </span>
          <span className="mt-5 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-[0_0_22px_rgba(124,58,237,0.45)]">
            <Tv className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl">
            <span className="block">Enjoy everything</span>
            <span className="mt-1 block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">on any device</span>
          </h2>
          <p className="mt-5 max-w-[390px] text-xs leading-5 text-slate-400">
            No satellite dish. No complicated setup. Subscribe, receive your credentials instantly on WhatsApp, and enjoy live TV, premium sports, movies and series in crystal-clear quality — from any device, anywhere in the world.
          </p>

          <div className="relative mt-8 space-y-6 before:absolute before:bottom-4 before:left-[13px] before:top-4 before:w-px before:bg-indigo-400/30">
            {steps.map((step, index) => (
              <motion.div className="relative flex gap-4" initial={{ opacity: 0, y: 10 }} key={step.number} transition={{ delay: 0.15 + index * 0.08 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }}>
                <span className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-indigo-400/50 bg-[#0b0d1b] text-[9px] font-bold text-indigo-200">{step.number}</span>
                <div className="pt-0.5">
                  <p className="text-xs font-bold text-white">{step.title}</p>
                  <p className="mt-1 max-w-[365px] text-[10px] leading-4 text-slate-400">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 18 }} transition={{ duration: 0.45, delay: 0.1 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }}>
          <div className="grid grid-cols-4 gap-2.5">
            {stats.map((stat) => (
              <div className="rounded-lg border border-indigo-400/15 bg-[#0d1020] px-2 py-3 text-center" key={stat.label}>
                <span className="block text-sm font-extrabold text-indigo-300">{stat.value}</span>
                <span className="mt-0.5 block text-[6px] font-bold tracking-[0.12em] text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* REALISTIC 4K SMART TV MOCKUP CONTAINER */}
          <div className="relative mt-5 group">
            {/* TV Outer Frame / Metallic Bezel */}
            <div className="relative rounded-[20px] md:rounded-[28px] border-[7px] md:border-[12px] border-[#161a29] bg-[#05060d] p-1.5 md:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_35px_rgba(6,182,212,0.18)] transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_45px_rgba(6,182,212,0.3)]">
              
              {/* Inner Screen Display */}
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-black">
                <Image
                  alt="Live sports streaming available with iscreenhd IPTV"
                  className="aspect-video w-full object-contain opacity-95 transition-transform duration-700"
                  height={520}
                  priority={false}
                  src="/sport-banner.webp"
                  width={800}
                />

                {/* Subtle Glass Screen Reflection Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />

                {/* Live Screen Badges */}
                <span className="absolute right-3 top-3 rounded-md bg-[#061017]/90 px-2.5 py-1 text-[8px] font-extrabold text-cyan-300 backdrop-blur-sm border border-cyan-500/20">
                  <span className="text-emerald-400 mr-1 animate-pulse">●</span>LIVE SPORTS
                </span>

                <div className="absolute bottom-3 left-3 rounded-lg border border-white/15 bg-[#080b11]/90 px-3 py-2 shadow-xl backdrop-blur-md">
                  <span className="flex items-center gap-1.5 text-[9px] font-bold text-white">
                    <i className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" /> Live Now
                  </span>
                  <small className="mt-0.5 block text-[8px] text-slate-300 font-medium">Premium sports · 4K HDR</small>
                  <span className="mt-2 block h-1 w-24 overflow-hidden rounded-full bg-white/20">
                    <i className="block h-full w-2/3 rounded-full bg-red-500" />
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 flex gap-2">
                  <span className="rounded-md border border-white/15 bg-[#080b11]/90 px-2.5 py-1.5 text-[8px] font-extrabold text-slate-200 backdrop-blur-sm">
                    LIVE EVENTS
                  </span>
                  <span className="rounded-md border border-white/15 bg-[#080b11]/90 px-2.5 py-1.5 text-[8px] font-extrabold text-cyan-300 backdrop-blur-sm">
                    HD & 4K
                  </span>
                </div>
              </div>

              {/* TV Bottom Brand Logo & Power LED Indicator */}
              <div className="mt-1 flex items-center justify-between px-3">
                <span className="text-[7px] font-black tracking-[0.25em] text-slate-500 uppercase">iscreenhd 4K SMART TV</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)] animate-pulse" />
              </div>
            </div>

            {/* TV Stand Base */}
            <div className="relative mx-auto -mt-1 flex flex-col items-center">
              <div className="h-2.5 w-24 md:w-36 rounded-b-xl bg-gradient-to-b from-[#1c2235] to-[#0c0f1a] shadow-md border-x border-b border-white/10" />
              <div className="h-1 w-40 md:w-60 rounded-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent blur-[1px] mt-0.5" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-3.5 text-xs font-extrabold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(124,58,237,0.35)] transition-transform hover:-translate-y-0.5" href="#pricing">
              <Trophy className="h-4 w-4" /> Get started now
            </Link>
            <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/55 px-4 py-3.5 text-xs font-extrabold uppercase tracking-wide text-emerald-400 transition-colors hover:bg-emerald-400/10" href="https://wa.me/213554246175?text=Hello%2C%20I%20would%20like%20a%20free%20trial%20for%20iscreenhd%20IPTV." rel="noreferrer" target="_blank">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

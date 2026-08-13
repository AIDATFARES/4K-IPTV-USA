"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe2, Headphones, RefreshCw, ShieldCheck, Star, Trophy, Tv, Users } from "lucide-react";

const reviews = [
  { name: "Youssef B.", location: "Morocco", tag: "Verified", text: "Fast activation and excellent sports channels. The picture quality is sharp and reliable." },
  { name: "David S.", location: "USA", tag: "Verified", text: "Setup on my Fire Stick took only a few minutes. I highly recommend IPTVDoor." },
  { name: "Lucas M.", location: "Australia", tag: "Verified", text: "The stream is smooth and the VOD library has everything my family watches." },
  { name: "Sarah P.", location: "Canada", tag: "Verified", text: "I did not drop a single frame during the match. Fantastic mobile experience too." },
  { name: "Hassan E.", location: "Germany", tag: "Verified", text: "The support team answered quickly and guided me through installation with no hassle." },
  { name: "Carlos T.", location: "Spain", tag: "Verified", text: "Family plan works perfectly across our devices. Great service and a clear interface." },
  { name: "Ahmad K.", location: "UAE", tag: "Verified", text: "Smooth streaming and a helpful channel selection. Everything works as expected." },
];

const metrics = [
  { icon: Star, value: "4.9 / 5.0", label: "Average rating", tone: "text-amber-300" },
  { icon: Users, value: "14K+", label: "Happy customers", tone: "text-blue-300" },
  { icon: Tv, value: "50K+", label: "Live channels", tone: "text-red-300" },
  { icon: Globe2, value: "80+", label: "Countries supported", tone: "text-red-300" },
  { icon: RefreshCw, value: "94%", label: "Renewal rate", tone: "text-pink-300" },
];

export default function TestimonialsSection() {
  return <section className="relative z-10 overflow-hidden bg-[#0c0f0f] py-24 sm:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_22%_36%,rgba(92,49,153,0.12),transparent_28%),radial-gradient(ellipse_at_76%_52%,rgba(30,94,185,0.09),transparent_28%)]" />
    <div className="relative">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.15em] text-amber-300"><Trophy className="h-3 w-3" /> Verified IPTVDoor reviews</span>
        <h2 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl"><span className="block">Real Reviews from</span><span className="mt-1 block bg-gradient-to-r from-red-400 via-red-400 to-red-400 bg-clip-text text-transparent">IPTVDoor Subscribers</span></h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-stone-400">Discover why viewers around the world choose IPTVDoor for reliable live channels, movies, series, and responsive support.</p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[760px] grid-cols-2 gap-3 px-5 sm:grid-cols-5 sm:px-0">
        {metrics.map((metric, index) => { const Icon = metric.icon; return <motion.div key={metric.label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="rounded-xl border border-white/10 bg-[#10131e]/90 px-3 py-4 text-center shadow-[0_0_20px_rgba(0,0,0,0.18)]"><Icon className={`mx-auto h-4 w-4 ${metric.tone}`} /><span className="mt-2 block text-base font-bold text-white">{metric.value}</span><small className="mt-0.5 block text-[8px] font-bold uppercase tracking-wide text-stone-500">{metric.label}</small></motion.div>; })}
      </div>

      <div className="mt-11 flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 42, repeat: Infinity, ease: "linear" }} className="flex min-w-full gap-4">
          {[...reviews, ...reviews].map((review, index) => <article key={`${review.name}-${index}`} className="flex h-[165px] w-[270px] shrink-0 flex-col rounded-xl border border-white/10 bg-[#121414]/95 p-4 shadow-lg">
            <div className="flex text-amber-300">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-3 w-3 fill-current" />)}</div>
            <span className="mt-3 inline-flex w-fit rounded-full border border-red-400/20 bg-red-500/10 px-2 py-1 text-[8px] font-bold uppercase tracking-wide text-red-300">IPTVDoor review</span>
            <p className="mt-3 line-clamp-3 text-[11px] leading-4 text-stone-300">“{review.text}”</p>
            <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3"><span><span className="block text-[10px] font-bold text-white">{review.name}</span><small className="text-[9px] text-stone-500">{review.location}</small></span><span className="inline-flex items-center gap-1 text-[8px] font-bold text-red-400"><CheckCircle2 className="h-3 w-3" /> {review.tag}</span></div>
          </article>)}
        </motion.div>
      </div>

      <div className="mt-12 text-center"><a href="https://wa.me/213554246175?text=Hello%2C%20I%20would%20like%20a%20free%20trial%20for%20iptvdoor%20IPTV." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-7 py-4 text-sm font-extrabold text-white shadow-[0_0_28px_rgba(124,58,237,0.42)] transition-transform hover:-translate-y-0.5"><Trophy className="h-4 w-4" /> Get Your Free Trial</a>
        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-stone-500"><span className="flex items-center gap-1.5"><Headphones className="h-3 w-3 text-emerald-400" /> Instant WhatsApp delivery</span><span className="flex items-center gap-1.5"><Tv className="h-3 w-3 text-red-300" /> Works on all devices</span><span className="flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 text-red-300" /> 99.9% uptime guaranteed</span></div>
      </div>
    </div>
  </section>;
}

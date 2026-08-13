"use client";

import { Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#0c0f0f] px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-[565px] flex-col gap-8 rounded-[22px] border border-white/10 bg-[#121414] p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-[310px]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/35 bg-red-500/10 text-red-400">
            <MessageSquare className="h-5 w-5" />
          </span>
          <h2 className="mt-5 text-3xl font-black uppercase italic leading-[0.9] tracking-tight text-white sm:text-4xl">
            <span className="block">Still have a</span>
            <span className="block text-red-500">question?</span>
          </h2>
          <p className="mt-4 text-sm leading-5 text-stone-400">
            Our team is online 24/7 and responds in under 5 minutes on WhatsApp. No bots — real humans ready to help you right now.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex shrink-0 flex-col gap-2.5 sm:w-40"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-colors hover:bg-emerald-500"
            href="https://wa.me/213554246175?text=Hello%2C%20I%20have%20a%20question%20about%20iptvdoor%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white transition-colors hover:border-white/30 hover:bg-white/[0.04]"
            href="mailto:support@dooriptv.shop"
          >
            <Mail className="h-3.5 w-3.5" />
            Send email
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

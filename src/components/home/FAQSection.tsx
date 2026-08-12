"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is iscreenhd IPTV and how does it work?",
      a: "iscreenhd is a premium 4K IPTV service delivering over 50,000 live TV channels and 200,000+ movies & TV shows over high-speed internet. You simply install an IPTV app (such as IPTV Smarters, TiviMate, or XCIPTV) on your Smart TV, Firestick, phone, or PC and log in with your credentials.",
    },
    {
      q: "Are Live Sports & PPV events available in 4K?",
      a: "Yes! All major live sports leagues (Champions League, Premier League, La Liga, NBA, UFC, Formula 1, and global tournaments) are broadcast live in 4K Ultra HD at 60 FPS with zero buffering.",
    },
    {
      q: "How fast will I receive my subscription credentials?",
      a: "Activation is automated and instant! As soon as your order is confirmed, your login details (M3U Link, Xtream Codes API URL, Username & Password) are sent directly to your Email and WhatsApp within 5 minutes.",
    },
    {
      q: "Which devices are supported?",
      a: "iscreenhd supports Amazon Firestick, Fire TV, Samsung & LG Smart TVs, Android TV, Apple TV, iPhone, iPad, Android smartphones, MAG boxes, Formuler, Windows PC, and Mac.",
    },
    {
      q: "Can I use my subscription on multiple devices simultaneously?",
      a: "Our standard subscription includes 1 active connection. The 12-Month plan includes 2 simultaneous connections. Extra connection slots can be added upon request.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes! You can test our service with a 24-hour test line by messaging our support team on WhatsApp.",
    },
  ];

  return (
    <section className="py-xl relative z-10">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase mb-xs block"
          >
            Got Questions?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-semibold text-on-background mb-sm"
          >
            iscreenhd IPTV Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body-lg text-body-lg text-on-surface-variant"
          >
            Everything you need to know about setting up and streaming with iscreenhd.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-md">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-panel rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-lg text-left flex justify-between items-center gap-md hover:bg-surface-container-high/50 transition-colors"
                >
                  <span className="font-title-md text-title-md text-on-surface font-medium flex items-center gap-xs">
                    <HelpCircle className="w-5 h-5 text-primary shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-on-surface-variant shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-white/5 bg-surface-container-lowest/40"
                    >
                      <div className="p-lg font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-xl text-center">
          <Link
            href="/faq"
            className="glass-panel text-on-surface hover:text-white px-lg py-md rounded-full font-title-md text-body-sm font-semibold inline-flex items-center gap-xs hover:border-primary transition-all"
          >
            View Complete FAQ Knowledge Base{" "}
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

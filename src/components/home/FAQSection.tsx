"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "1. What is IPTVDoor?",
    answer: (
      <>
        IPTVDoor is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link
          href="/channels"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          live TV channels
        </Link>{" "}
        and{" "}
        <Link
          href="#pricing"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          IPTV subscription plans
        </Link>
        .
      </>
    ),
  },
  {
    id: 2,
    question: "2. Do I need a subscription to use IPTVDoor?",
    answer: (
      <>
        Yes, a subscription is required. However, we offer a{" "}
        <a
          href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iptvdoor%20IPTV."
          target="_blank"
          rel="noreferrer"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          free trial
        </a>{" "}
        so you can test the service before committing to our{" "}
        <Link
          href="#pricing"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          subscription plans
        </Link>
        .
      </>
    ),
  },
  {
    id: 3,
    question: "3. What devices are compatible with IPTVDoor?",
    answer: (
      <>
        IPTVDoor works on Android TV, Firestick, Smart TVs, Android phones, tablets, and apps like Tivimate. Follow our step-by-step{" "}
        <Link
          href="/installation"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          installation guides
        </Link>{" "}
        to get started.
      </>
    ),
  },
  {
    id: 4,
    question: "4. Can I watch on multiple devices at the same time?",
    answer: (
      <>
        Yes, we offer multi-device support. You can choose an{" "}
        <Link
          href="#pricing"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          IPTV subscription plan
        </Link>{" "}
        that allows streaming on more than one device simultaneously. Perfect for families or shared accounts.
      </>
    ),
  },
  {
    id: 5,
    question: "5. Can I watch sports on IPTVDoor?",
    answer: (
      <>
        Absolutely. We offer a wide selection of live sports channels, including major leagues and international events. Explore our full{" "}
        <Link
          href="/channels"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          channels catalog
        </Link>
        .
      </>
    ),
  },
  {
    id: 6,
    question: "6. What payment methods do you accept?",
    answer: (
      <>
        We accept PayPal, cryptocurrency (such as Bitcoin), credit cards, and instant bank transfers for quick and secure payments. Contact our{" "}
        <Link
          href="/contact"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          support team
        </Link>{" "}
        for any payment inquiries.
      </>
    ),
  },
  {
    id: 7,
    question: "7. What kind of content is included?",
    answer: (
      <>
        The service includes live TV channels, sports, movies, TV series, kids&apos; content, international channels, and more – all in HD or 4K quality. Learn more in our{" "}
        <Link
          href="/blog"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          IPTV articles & guides
        </Link>
        .
      </>
    ),
  },
  {
    id: 8,
    question: "8. Do I need a VPN?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Read our{" "}
        <Link
          href="/faq"
          className="text-red-500 font-semibold hover:text-red-400 transition-colors"
        >
          FAQ knowledge base
        </Link>{" "}
        for further setup details.
      </>
    ),
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-[#0c0f0f] text-white relative z-10 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions<br />(FAQ)
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions about our IPTV service, including{" "}
            <Link
              href="#pricing"
              className="text-red-500 font-semibold hover:text-red-400 transition-colors"
            >
              subscriptions
            </Link>
            ,{" "}
            <Link
              href="/installation"
              className="text-red-500 font-semibold hover:text-red-400 transition-colors"
            >
              devices
            </Link>
            , streaming quality, payments, and more. If you need further help, our{" "}
            <Link
              href="/contact"
              className="text-red-500 font-semibold hover:text-red-400 transition-colors"
            >
              support team
            </Link>{" "}
            is here for you.
          </p>
        </div>

        {/* 2-Column FAQ Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-[1140px] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0f1419]/90 shadow-xl hover:border-red-500/40 transition-colors"
            >
              {/* Header Banner */}
              <div className="bg-[#18202a] border-b border-white/10 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-red-500 shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.question}
                </h3>
              </div>

              {/* Answer Content */}
              <div className="p-5 sm:p-6 text-sm sm:text-base text-stone-300 leading-relaxed flex-1 bg-[#0f1419]/60">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Knowledge Base */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#121620] border border-white/20 text-white font-bold text-xs sm:text-sm hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-lg"
          >
            <span>View Complete FAQ Knowledge Base</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

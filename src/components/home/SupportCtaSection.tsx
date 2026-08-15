import { Mail, MessageSquare } from "lucide-react";

export default function SupportCtaSection() {
  return (
    <section className="border-t border-white/10 bg-[#0c0f0f] px-5 py-16 sm:py-20 relative overflow-hidden">
      {/* Subtle glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div
        className="relative z-10 mx-auto flex max-w-[565px] flex-col gap-8 rounded-[22px] border border-white/10 bg-[#121414] p-8 shadow-2xl sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div className="max-w-[310px]">
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
        </div>
        <div className="flex shrink-0 flex-col gap-2.5 sm:w-40">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-emerald-500 hover:scale-105"
            href="https://wa.me/213552069874?text=Hello%2C%20I%20have%20a%20question%20about%20iptvdoor%20IPTV."
            rel="noreferrer"
            target="_blank"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Ask on WhatsApp
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-wide text-white transition-all hover:border-white/30 hover:bg-white/[0.04] hover:scale-105"
            href="mailto:support@dooriptv.shop"
          >
            <Mail className="h-3.5 w-3.5" />
            Send email
          </a>
        </div>
      </div>
    </section>
  );
}

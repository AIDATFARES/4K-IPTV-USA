"use client";

import { useEffect, useRef, useState } from "react";
import { Tv, Film, ShieldCheck, Zap, Headphones } from "lucide-react";

export default function TopFeatureBar() {
  const stats = [
    { value: 7, label: "In Business", prefix: "", suffix: " Years" },
    { value: 7500, label: "Satisfied customers", prefix: "+", suffix: "" },
    { value: 120000, label: "Films & Series", prefix: "+", suffix: "" },
    { value: 50000, label: "Channels", prefix: "+", suffix: "" },
  ];

  const highlights = [
    {
      icon: Tv,
      title: "50,000+ Channels",
      desc: "150+ Countries 🇺🇸🇬🇧🇨🇦",
    },
    {
      icon: Film,
      title: "200,000+ VOD",
      desc: "Movies & Series 4K",
    },
    {
      icon: ShieldCheck,
      title: "99.99% Uptime",
      desc: "Anti-Buffer 10.0",
    },
    {
      icon: Zap,
      title: "60 FPS 4K Ultra HD",
      desc: "Crystal Clear Sports",
    },
    {
      icon: Headphones,
      title: "24/7 Live Support",
      desc: "WhatsApp & Email",
    },
  ];

  return (
    <section className="bg-[#0c0f0f] border-y border-white/10 relative z-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 border-b border-white/[0.08] py-10 text-center sm:grid-cols-4 sm:gap-4 sm:py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="transition-all duration-300">
              <AnimatedStat {...stat} />
              <span className="mt-1 block text-sm font-medium text-stone-300">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 py-6 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#121414]/90 border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3.5 hover:border-red-500/40 transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 group-hover:scale-110 transition-transform shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-stone-400 truncate mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startedAt = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(value * eased));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return <span className="block text-3xl font-extrabold tracking-tight text-white sm:text-4xl" ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

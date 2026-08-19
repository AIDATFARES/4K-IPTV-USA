import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MonitorSmartphone, ShieldCheck, Zap, Globe2, Headphones, Tv } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - 4K IPTV USA | Easy 3-Step Setup Guide",
  description:
    "Learn how to get started with 4K IPTV USA in 3 easy steps. Place your order, install on any device, and start streaming 50,000+ channels instantly.",
  alternates: {
    canonical: "/how-it-works",
  },
};

const steps = [
  {
    badge: "Step One",
    title: "Place your order.",
    description: (
      <>
        Choose the plan that suits you from our{" "}
        <Link href="/pricing" className="text-[#2E5BFF] font-semibold hover:text-blue-700 transition-colors">
          pricing plans
        </Link>
        , complete the payment, and receive your subscription details within 20 minutes by email or{" "}
        <Link href="/contact" className="text-[#2E5BFF] font-semibold hover:text-blue-700 transition-colors">
          WhatsApp
        </Link>
        .
      </>
    ),
    image: "/step-1-order-v2.webp",
    imageAlt: "Place your order online",
    align: "left" as const,
  },
  {
    badge: "Step Two",
    title: "Installation & Setup",
    description: (
      <>
        Follow our step-by-step{" "}
        <Link href="/installation" className="text-[#2E5BFF] font-semibold hover:text-blue-700 transition-colors">
          installation guide
        </Link>{" "}
        to configure IPTV on Smart TV, Firestick, Android, iOS, and PC effortlessly.
      </>
    ),
    image: "/step-2-setup-v2.webp",
    imageAlt: "Instant installation on any device",
    align: "right" as const,
  },
  {
    badge: "Step Three",
    title: "Watch and enjoy.",
    description: (
      <>
        Stream all your favorite live sports, 4K movies, and premium channels from our complete{" "}
        <Link href="/channels" className="text-[#2E5BFF] font-semibold hover:text-blue-700 transition-colors">
          channels catalog
        </Link>
        .
      </>
    ),
    image: "/step-3-watch-v2.webp",
    imageAlt: "Watch and enjoy live TV",
    align: "left" as const,
  },
];

const features = [
  {
    icon: Tv,
    title: "Complete IPTV Subscription",
    description:
      "Enjoy uninterrupted 4K/HD streaming. Choose from 1, 3, 6 or 12 month packages with full access to our streaming library.",
    link: "/pricing",
  },
  {
    icon: Globe2,
    title: "+50,000 Channels & 200,000+ VODs",
    description:
      "Unlock over 50,000 live channels and 120,000+ films & series for the ultimate viewing experience.",
    link: "/channels",
  },
  {
    icon: MonitorSmartphone,
    title: "Live TV & TV Guide (EPG)",
    description:
      "Get access to an interactive TV guide (EPG), Live TV, and replay options on any device.",
    link: "/installation",
  },
];

const benefits = [
  { icon: ShieldCheck, text: "Secure & encrypted payments" },
  { icon: Zap, text: "Instant delivery within 20 minutes" },
  { icon: Headphones, text: "24/7 dedicated support" },
  { icon: MonitorSmartphone, text: "Works on all devices" },
  { icon: Globe2, text: "150+ countries covered" },
  { icon: Check, text: "No contracts or hidden fees" },
];

export default function HowItWorksPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* ─── Hero Header ─── */}
      <section className="relative bg-white pt-16 pb-20 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
            Easy 3-Step Process
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">
            <span className="text-black">How Does It Work?</span>
            <br />
            <span className="text-[#2E5BFF]">4K IPTV USA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            Get your{" "}
            <Link href="/pricing" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
              IPTV subscription
            </Link>{" "}
            in 3 easy steps. Choose the right plan, complete the payment, and receive your login details. Within minutes you can enjoy your favorite programs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-[#2E5BFF] text-white font-bold px-8 py-3.5 rounded-md shadow-[0_4px_14px_rgba(255,107,0,0.3)] hover:bg-[#2E5BFF] hover:shadow-[0_6px_20px_rgba(255,107,0,0.4)] transition-all"
            >
              View Plans <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/installation"
              className="inline-flex items-center justify-center gap-2 border border-blue-200 bg-white text-blue-500 font-bold px-8 py-3.5 rounded-md hover:bg-blue-50 transition-all"
            >
              Installation Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Timeline Steps ─── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[960px] px-6 relative">
          {/* Vertical Dashed Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-blue-200 hidden md:block" />

          {steps.map((step, i) => (
            <div key={i} className={`relative ${i < steps.length - 1 ? "mb-20" : ""}`}>
              {/* Step Badge */}
              <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-top-4 z-20 flex justify-center mb-6 md:mb-0">
                <span className="bg-[#2E5BFF] text-white font-extrabold text-xs uppercase tracking-wider px-5 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,107,0,0.4)]">
                  {step.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6">
                {/* Card */}
                <div
                  className={`bg-white p-8 rounded-2xl shadow-sm border border-slate-100 ${
                    step.align === "right" ? "order-1 md:order-2" : ""
                  }`}
                >
                  <h3 className="text-xl font-extrabold text-[#2E5BFF] mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Image */}
                <div
                  className={`overflow-hidden rounded-2xl border border-slate-100 shadow-sm ${
                    step.align === "right" ? "order-2 md:order-1" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={600}
                    height={380}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Getting Started Showcase ─── */}
      <section className="py-20 bg-[#f8fafc] border-t border-slate-100">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#2E5BFF] tracking-tight italic">
              Getting Started with 4K IPTV USA Is Easy
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
              Enjoy high quality IPTV streaming with 4K IPTV USA. Watch{" "}
              <Link href="/channels" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="space-y-16 max-w-[1080px] mx-auto">
            {/* Feature Block 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <Image
                  src="/getting-started-1.webp"
                  alt="Complete IPTV Subscription Experience"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E5BFF] leading-snug">
                  <Link href="/pricing" className="hover:text-blue-400 transition-colors">
                    We Offer You A Complete IPTV Subscription Experience
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Enjoy uninterrupted IPTV 4K/HD with an{" "}
                  <Link href="/pricing" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    IPTV subscription
                  </Link>{" "}
                  from 4K IPTV USA. Choose from 1, 3, 6 or 12 months packages and experience continuous entertainment with full access to our{" "}
                  <Link href="/channels" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    streaming library
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* Feature Block 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-4 order-2 md:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E5BFF] leading-snug">
                  <Link href="/channels" className="hover:text-blue-400 transition-colors">
                    +50,000 Channels &amp; 200,000+ VODs With Our IPTV Smarters Pro
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Unlock a world of entertainment with over{" "}
                  <Link href="/channels" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    +50,000 live channels and +120,000 films &amp; series
                  </Link>{" "}
                  for the ultimate viewing experience. Check out our{" "}
                  <Link href="/pricing" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    subscription plans
                  </Link>{" "}
                  to start watching immediately.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm order-1 md:order-2">
                <Image
                  src="/getting-started-2.webp"
                  alt="+50,000 Live Channels & VODs"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature Block 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <Image
                  src="/getting-started-3.webp"
                  alt="Live TV and TV Guide EPG"
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2E5BFF] leading-snug">
                  <Link href="/installation" className="hover:text-blue-400 transition-colors">
                    Live TV With IPTV Smarters Pro and TV Guide (EPG)
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  With 4K IPTV USA you get access to an interactive TV guide (EPG), Live TV, and replay options. Read our{" "}
                  <Link href="/installation" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    IPTV setup guide
                  </Link>{" "}
                  or explore our{" "}
                  <Link href="/faq" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                    FAQ support
                  </Link>{" "}
                  for complete device instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="py-20 bg-[#f8fafc] border-y border-slate-100">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase">
              Getting Started Is <span className="text-[#2E5BFF]">Easy</span>
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Enjoy high quality IPTV streaming with 4K IPTV USA. Watch{" "}
              <Link href="/channels" className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors">
                live TV channels
              </Link>
              , movies, and sports anytime, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={i}
                  href={feature.link}
                  className="group flex flex-col rounded-2xl bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2E5BFF] group-hover:bg-[#2E5BFF] group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-black">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 flex-grow">
                    {feature.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#2E5BFF] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Benefits Strip ─── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-black text-black mb-10 uppercase">
            Why Choose <span className="text-[#2E5BFF]">4K IPTV USA</span>?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-[#2E5BFF] shrink-0" strokeWidth={2.5} />
                  <span className="text-sm font-bold text-black">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20 bg-[#2E5BFF]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase">
            Ready to Start Streaming?
          </h2>
          <p className="mt-4 text-lg text-blue-50 font-medium">
            Join thousands of satisfied customers. Get instant access to 50,000+ live channels, 120,000+ films & series, and 200,000+ VODs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/213552069874?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%204kiptvusa%20IPTV."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2E5BFF] font-bold px-8 py-3.5 rounded-md shadow-lg hover:bg-blue-50 transition-all"
            >
              Get Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-3.5 rounded-md hover:bg-white/10 transition-all"
            >
              View All Plans
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

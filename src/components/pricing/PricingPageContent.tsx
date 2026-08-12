"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, ChevronDown, CreditCard, Headphones, MonitorSmartphone, ShieldCheck, Sparkles, Tv, Zap } from "lucide-react";

type Plan = {
  id: string;
  duration: string;
  months: number;
  price: number;
  oldPrice?: number;
  saving: string;
  popular?: boolean;
  isTrial?: boolean;
};

const plans: Plan[] = [
  { id: "24-hours", duration: "24 Hours", months: 0, price: 0, saving: "Free Trial", isTrial: true },
  { id: "1-month", duration: "1 Month", months: 1, price: 14.99, saving: "" },
  { id: "3-months", duration: "3 Months", months: 3, price: 35, saving: "Save 22%" },
  { id: "6-months", duration: "6 Months", months: 6, price: 49.99, saving: "Save 44%" },
  { id: "12-months", duration: "12 Months", months: 12, price: 69.99, oldPrice: 80, saving: "Save 61%", popular: true },
];

const planFeatures = [
  "25,000+ live channels",
  "100,000+ movies & series",
  "All supported devices",
  "4K, Full HD & HD quality",
  "99.9% server stability",
  "Updated TV guide (EPG)",
  "24/7 support",
];

const includedFeatures = [
  { icon: Tv, title: "25,000+ Channels", text: "Explore live channels from around the world, including sports, news and entertainment." },
  { icon: MonitorSmartphone, title: "100,000+ VOD", text: "Enjoy a large, regularly refreshed library of movies and television series on demand." },
  { icon: Zap, title: "Anti-freeze Technology", text: "Optimized streaming technology helps deliver a smoother experience at busy times." },
  { icon: Headphones, title: "24/7 Support", text: "The iscreenhd IPTV support team is here to help with setup and streaming questions." },
  { icon: Sparkles, title: "Fast Setup", text: "Your iscreenhd IPTV details are sent after payment so you can start setting up quickly." },
  { icon: CreditCard, title: "TV Guide (EPG)", text: "Browse your channel schedule more easily with an electronic programme guide." },
];

const billingQuestions = [
  { question: "Which payment methods can I use?", answer: <>Available payment options are shown when you place your order. <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">Contact iscreenhd IPTV support</Link> if you need help before purchasing.</> },
  { question: "Is my payment protected?", answer: "Please use the official iscreenhd IPTV payment process and never share payment details through an unverified link or message." },
  { question: "Will my subscription renew automatically?", answer: <>Renewal details are provided when you order. If you have any questions about your subscription period or renewal, <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact support</Link> before your plan expires.</> },
  { question: "Can I change my plan or number of connections?", answer: <>Yes. <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">Contact the support team</Link> with your order email and the plan or connection change you need, and they will advise on the available options.</> },
];

export default function PricingSection() {
  const [devices, setDevices] = useState(1);
  const [openBillingQuestion, setOpenBillingQuestion] = useState<number | null>(null);

  function priceFor(plan: Plan) {
    return (plan.price * devices).toFixed(2);
  }

  function handleOrder(plan: Plan) {
    const text = encodeURIComponent(
      `Hello! I would like to purchase the iscreenhd IPTV ${plan.duration} plan with ${devices} device connection${devices > 1 ? "s" : ""} for $${priceFor(plan)}.`
    );
    window.open(`https://wa.me/213554246175?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="relative overflow-hidden bg-[#060814] py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[780px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/30 via-[#060814] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-indigo-400/35 bg-indigo-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-300">iscreenhd IPTV</span>
          <h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl">
            <span className="block">Subscription Plans</span>
            <span className="mt-1 block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">&amp; Pricing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">Choose the iscreenhd IPTV plan that fits you, with secure checkout and helpful 24/7 support.</p>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-500">Need help getting started? Visit our <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/installation">installation guide</Link> or browse the <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/channels">channel list</Link> before you order.</p>
        </header>

        <div className="mx-auto mt-10 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-indigo-400/30 bg-[#0d1120]/90 p-1.5 shadow-[0_0_30px_rgba(99,102,241,0.12)]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button key={count} type="button" role="radio" aria-checked={selected} onClick={() => setDevices(count)} className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}>
                  {count} {count === 1 ? "Device" : "Devices"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
          {plans.map((plan) => (
            <article key={plan.id} className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${plan.isTrial ? "border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-[#0c101d] shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]" : plan.popular ? "border-indigo-400/70 bg-gradient-to-b from-indigo-600/35 to-[#10172a] shadow-[0_0_38px_rgba(99,102,241,0.25)] xl:-translate-y-3" : "border-white/10 bg-[#0c101d]/90 hover:-translate-y-1 hover:border-white/20"}`}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-200/30 bg-violet-600 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Most popular</span>}
              <h2 className="text-center text-2xl font-bold text-white">{plan.duration}</h2>
              <p className="mt-2 text-center text-sm text-slate-400">{plan.isTrial ? "Trial" : "Subscription"}</p>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <p className="text-4xl font-extrabold tracking-tight text-white">{plan.isTrial ? "Free" : `$${priceFor(plan)}`}</p>
                {plan.oldPrice && <p className="text-lg font-medium text-slate-500 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>}
              </div>
              <p className={`mx-auto mt-3 rounded-full border px-3 py-1 text-center text-[11px] font-bold ${plan.isTrial ? "animate-pulse border-emerald-400 bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.3)]" : "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"}`}>{plan.saving}</p>
              <ul className="mt-6 flex-grow space-y-3 border-t border-white/10 pt-5">
                {planFeatures.map((feature) => <li className="flex gap-2.5 text-sm text-slate-300" key={feature}><Check className={`mt-0.5 h-4 w-4 shrink-0 ${plan.isTrial ? "text-emerald-400" : "text-cyan-300"}`} strokeWidth={3} />{feature}</li>)}
              </ul>
              <button type="button" onClick={() => handleOrder(plan)} className={`mt-7 w-full rounded-xl py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 ${plan.isTrial ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-[0_8px_22px_rgba(16,185,129,0.25)] hover:from-emerald-400 hover:to-teal-400" : plan.popular ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 shadow-[0_8px_22px_rgba(99,102,241,0.35)]" : "bg-indigo-600 hover:bg-indigo-500"}`}>Buy now</button>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-sm text-slate-400">Reliable support for every iscreenhd IPTV subscription.</p>

        <section className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-[#0b0f1c]/80 p-6 shadow-2xl lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">Diamond plan</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">24 Months — our best subscription value</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">Enjoy uninterrupted iscreenhd IPTV streaming across supported devices, with fast activation, 4K and Full HD quality, a TV guide, and ongoing support.</p>
            <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {["4K & High Definition", "25,000+ Live Channels", "100,000+ Movies & Series", "Continuous customer care", "All supported devices", "Updated TV guide"].map((feature) => <p className="flex items-center gap-2" key={feature}><Check className="h-4 w-4 text-cyan-300" strokeWidth={3} />{feature}</p>)}
            </div>
          </div>
          <div className="rounded-2xl border border-indigo-400/30 bg-[#11182b] p-7">
            <p className="text-center text-xl font-bold text-white">24 Months</p>
            <p className="mt-2 text-center text-sm text-slate-400">Subscription</p>
            <p className="mt-3 text-center text-4xl font-extrabold text-white">${(99.95 * devices).toFixed(2)}</p>
            <p className="mx-auto mt-3 w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">Best value</p>
            <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">{planFeatures.map((feature) => <li className="flex gap-2.5 text-sm text-slate-300" key={feature}><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" strokeWidth={3} />{feature}</li>)}</ul>
            <button type="button" onClick={() => handleOrder({ id: "24-months", duration: "24 Months", months: 24, price: 99.95, saving: "Best value" })} className="mt-7 w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(99,102,241,0.35)] transition-transform hover:-translate-y-0.5">Buy now</button>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-3xl font-bold text-white">Every plan includes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {includedFeatures.map(({ icon: Icon, title, text }) => <article className="rounded-2xl border border-white/10 bg-[#0c101d]/80 p-6 text-center" key={title}><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/15 text-cyan-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-bold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text}</p></article>)}
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-3xl rounded-3xl border border-white/10 bg-[#0c101d]/80 p-6 sm:p-8">
          <h2 className="text-center text-3xl font-bold text-white">Billing &amp; subscription questions</h2>
          <div className="mt-7 space-y-3">
            {billingQuestions.map((item, index) => {
              const open = openBillingQuestion === index;
              return <article className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]" key={item.question}><h3><button type="button" aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white" onClick={() => setOpenBillingQuestion(open ? null : index)}>{item.question}<ChevronDown className={`h-5 w-5 shrink-0 text-cyan-300 transition-transform ${open ? "rotate-180" : ""}`} /></button></h3>{open && <p className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-400">{item.answer}</p>}</article>;
            })}
          </div>
        </section>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-emerald-300"><ShieldCheck className="h-5 w-5" />Secure ordering and friendly iscreenhd IPTV support.</div>
      </div>
    </section>
  );
}

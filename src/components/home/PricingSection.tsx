"use client";

import { useState } from "react";
import { Check, Shield, ShieldCheck } from "lucide-react";

type Plan = {
  id: string;
  duration: string;
  price: number;
  oldPrice?: number;
  saving: string;
  popular?: boolean;
};

const plans: Plan[] = [
  { id: "3-months", duration: "3 Months", price: 35, saving: "Save 22%" },
  { id: "12-months", duration: "1 Year", price: 69.99, oldPrice: 80, saving: "Save 61%", popular: true },
  { id: "6-months", duration: "6 Months", price: 49.99, saving: "Save 44%" },
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

export default function PricingSection() {
  const [devices, setDevices] = useState(1);

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
    <section id="pricing" className="relative overflow-hidden bg-[#060814] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/25 via-[#060814] to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-950/40 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-300">Premium IPTV plans</p>
          <h2 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
            Choose your <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">iscreenhd IPTV plan</span>
          </h2>
          <p className="mt-5 text-xl font-bold tracking-wide text-white sm:text-2xl">Simple, transparent pricing</p>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">No contracts. No hidden fees. Instant delivery after purchase.</p>
        </header>

        <div className="mx-auto mt-8 max-w-2xl" role="radiogroup" aria-label="Number of device connections">
          <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Choose your connections</p>
          <div className="grid grid-cols-3 rounded-2xl border border-indigo-400/30 bg-[#0d1120]/90 p-1.5 shadow-[0_0_30px_rgba(99,102,241,0.12)]">
            {[1, 2, 3].map((count) => {
              const selected = devices === count;
              return (
                <button
                  aria-checked={selected}
                  className={`rounded-xl px-3 py-3 text-sm font-bold transition-all ${selected ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg" : "text-slate-400 hover:text-white"}`}
                  key={count}
                  onClick={() => setDevices(count)}
                  role="radio"
                  type="button"
                >
                  {count} {count === 1 ? "Device" : "Devices"}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3 xl:gap-6">
          {plans.map((plan) => (
            <article className={`relative flex flex-col rounded-2xl border p-6 ${plan.popular ? "border-indigo-400/70 bg-gradient-to-b from-indigo-600/35 to-[#10172a] shadow-[0_0_38px_rgba(99,102,241,0.25)] md:-translate-y-3" : "border-white/10 bg-[#0c101d]/90"}`} key={plan.id}>
              {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-200/30 bg-violet-600 px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">Most popular</span>}
              <p className="text-center text-2xl font-bold text-white">{plan.duration}</p>
              <p className="mt-2 text-center text-sm text-slate-400">Subscription</p>
              <div className="mt-2 flex items-baseline justify-center gap-2">
                <p className="text-4xl font-extrabold tracking-tight text-white">${priceFor(plan)}</p>
                {plan.oldPrice && <p className="text-lg font-medium text-slate-500 line-through">${(plan.oldPrice * devices).toFixed(2)}</p>}
              </div>
              <p className="mx-auto mt-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-center text-[11px] font-bold text-emerald-300">{plan.saving}</p>
              <ul className="mt-6 flex-grow space-y-3 border-t border-white/10 pt-5">
                {planFeatures.map((feature) => <li className="flex gap-2.5 text-sm text-slate-300" key={feature}><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" strokeWidth={3} />{feature}</li>)}
              </ul>
              <button className={`mt-7 w-full rounded-xl py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 ${plan.popular ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 shadow-[0_8px_22px_rgba(99,102,241,0.35)]" : "bg-indigo-600 hover:bg-indigo-500"}`} onClick={() => handleOrder(plan)} type="button">Buy now</button>
            </article>
          ))}
        </div>

        <p className="mt-5 text-center text-sm text-slate-400">Reliable support for every iscreenhd IPTV subscription.</p>

        <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-7">
          <div aria-label="Supported payment methods" className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-xl border border-white/10 bg-[#0c0f1c]/80 px-5 py-2.5 text-lg font-black italic tracking-tighter text-blue-500">PayPal</div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0f1c]/80 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-300"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F7931A] text-[10px] text-white">₿</span><span>Crypto</span></div>
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0f1c]/80 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-slate-300"><span className="rounded bg-[#1A1F71] px-1.5 py-0.5 text-[8px] font-bold text-white">VISA</span><span>Cards</span></div>
            <div className="flex items-center gap-2 rounded-xl border border-emerald-500/10 bg-emerald-500/5 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400"><ShieldCheck className="h-4 w-4" />Secure checkout</div>
          </div>

          <div className="flex w-full max-w-[620px] items-center gap-4 rounded-2xl border border-green-500/30 bg-[#081810]/90 px-5 py-4 shadow-[0_0_35px_rgba(34,197,94,0.12)] sm:rounded-full sm:px-8 sm:py-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-green-500/30 bg-green-500/15"><Shield className="h-6 w-6 text-green-400" /></div>
            <div className="min-w-0 text-left"><p className="text-base font-bold tracking-wide text-white sm:text-lg">Premium Quality Guaranteed</p><p className="mt-1 text-xs font-medium text-green-400/80 sm:text-sm">100% Anti-freeze Technology • Ultra Fast Servers</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

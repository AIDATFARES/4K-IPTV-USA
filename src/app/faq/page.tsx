"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, HelpCircle, Mail, MessageCircle, MonitorPlay, Send, Settings2, UserRound } from "lucide-react";

type Category = "About iptvdoor" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About iptvdoor", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About iptvdoor",
    question: "1. What is IPTVDoor?",
    answer: (
      <>
        IPTVDoor is a premium IPTV service that offers live TV, VOD movies, TV series, and sports channels in high-quality streaming, including 4K. Check out our{" "}
        <Link href="/channels" className="text-red-500 font-semibold hover:text-red-400 transition-colors">live TV channels</Link> and{" "}
        <Link href="/pricing" className="text-red-500 font-semibold hover:text-red-400 transition-colors">IPTV subscription plans</Link>.
      </>
    ),
  },
  {
    category: "About iptvdoor",
    question: "2. Is IPTVDoor authorized?",
    answer: (
      <>
        IPTVDoor is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your location.
      </>
    ),
  },
  {
    category: "About iptvdoor",
    question: "3. What channels and content are included with IPTVDoor?",
    answer: (
      <>
        IPTVDoor includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated on-demand library of movies and TV series. Check our <Link href="/channels" className="text-red-500 font-semibold hover:text-red-400 transition-colors">full channels catalog</Link>.
      </>
    ),
  },
  {
    category: "About iptvdoor",
    question: "4. Can I watch live sports and PPV events on IPTVDoor?",
    answer: (
      <>
        IPTVDoor includes a range of live sports channels and events. Coverage can include football, NFL, NBA, UFC, and pay-per-view events. Explore our <Link href="/channels" className="text-red-500 font-semibold hover:text-red-400 transition-colors">live sports section</Link>.
      </>
    ),
  },
  {
    category: "About iptvdoor",
    question: "5. Which devices can I use?",
    answer: (
      <>
        IPTVDoor works with compatible IPTV apps on Smart TVs, Android TV, Firestick, Apple TV, smartphones, tablets, and computers. Follow our <Link href="/installation" className="text-red-500 font-semibold hover:text-red-400 transition-colors">installation guides</Link> to get started.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "1. How do I install IPTVDoor on my device?",
    answer: (
      <>
        Start by installing a compatible IPTV player on your device. Enter the IPTVDoor credentials from your email. View our step-by-step <Link href="/installation" className="text-red-500 font-semibold hover:text-red-400 transition-colors">installation guides</Link> for detailed instructions.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "2. Can I use IPTVDoor on a Smart TV?",
    answer: (
      <>
        Yes, IPTVDoor can be used on Smart TVs including Samsung, LG, and Android TV models using compatible IPTV players like Tivimate or Smarters.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "3. What internet speed do I need for smooth IPTVDoor streaming?",
    answer: (
      <>
        For reliable playback, allow at least 10 Mbps per stream for HD and 25 Mbps per stream for 4K. Ethernet or 5 GHz Wi-Fi is recommended.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "4. Why is IPTVDoor buffering or freezing?",
    answer: (
      <>
        Restart your IPTV app and router. If buffering persists, check your Wi-Fi signal or <Link href="/contact" className="text-red-500 font-semibold hover:text-red-400 transition-colors">contact support</Link> for quick assistance.
      </>
    ),
  },
  {
    category: "Setup & streaming",
    question: "5. Do I need a VPN to use IPTVDoor?",
    answer: (
      <>
        A VPN is not required but is recommended in some regions to ensure unrestricted access and added privacy. Contact our <Link href="/contact" className="text-red-500 font-semibold hover:text-red-400 transition-colors">support team</Link> for VPN setup recommendations.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "1. Are there any hidden fees or contracts with IPTVDoor?",
    answer: (
      <>
        No contracts and no hidden fees. Choose an <Link href="/pricing" className="text-red-500 font-semibold hover:text-red-400 transition-colors">IPTV subscription plan</Link> with transparent pricing and instant delivery.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "2. Can I use IPTVDoor on multiple devices?",
    answer: (
      <>
        Yes! We offer multi-device subscription plans. Select the 1, 2, or 3 device option on our <Link href="/pricing" className="text-red-500 font-semibold hover:text-red-400 transition-colors">pricing page</Link>.
      </>
    ),
  },
  {
    category: "Plans & access",
    question: "3. What are IPTVDoor M3U and Xtream Codes details?",
    answer: (
      <>
        Your welcome email includes both M3U playlist URLs and Xtream Codes credentials for fast setup in any IPTV app.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "1. Does IPTVDoor offer a free trial?",
    answer: (
      <>
        Yes, we offer a <a href="https://wa.me/213554246175?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20iptvdoor%20IPTV." target="_blank" rel="noreferrer" className="text-red-500 font-semibold hover:text-red-400 transition-colors">free trial</a> so you can test our service before subscribing.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "2. Which payment methods does IPTVDoor accept?",
    answer: (
      <>
        We accept PayPal, Crypto (Bitcoin), Credit Cards, and Instant Bank Transfers. For help with payments, reach out to our <Link href="/contact" className="text-red-500 font-semibold hover:text-red-400 transition-colors">support team</Link>.
      </>
    ),
  },
  {
    category: "Payments & support",
    question: "3. How long does activation take after I purchase a plan?",
    answer: (
      <>
        Activation is instant! Your login details are generated and sent straight to your email immediately after payment confirmation.
      </>
    ),
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("About iptvdoor");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(null);
  }

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello IPTVDoor support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213554246175?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-4 sm:px-6 pb-20 pt-12 md:pt-16 bg-[#0c0f0f]">
      <div className="mx-auto max-w-[1140px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-400">Help center</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Frequently Asked Questions<br />(FAQ)
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-stone-300">
            Find answers to common questions about our IPTV service, including{" "}
            <Link href="/pricing" className="text-red-500 font-semibold hover:text-red-400 transition-colors">subscriptions</Link>,{" "}
            <Link href="/installation" className="text-red-500 font-semibold hover:text-red-400 transition-colors">devices</Link>, streaming quality, payments, and more. If you need further help, our{" "}
            <Link href="/contact" className="text-red-500 font-semibold hover:text-red-400 transition-colors">support team</Link> is here for you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,1fr)] md:gap-10">
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="rounded-2xl border border-white/10 bg-[#121620]/80 p-3">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all md:w-full ${
                        isSelected
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                          : "text-stone-400 hover:bg-white/[0.07] hover:text-white"
                      }`}
                      key={label}
                      onClick={() => selectCategory(label)}
                      type="button"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <section aria-live="polite" className="space-y-4">
            <div className="mb-5 flex items-center gap-3">
              <MonitorPlay className="h-5 w-5 text-red-500" />
              <h2 className="text-xl font-bold text-white">{activeCategory}</h2>
            </div>
            <div className="grid grid-cols-1 gap-5">
              {visibleFaqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

                return (
                  <article className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0f1419]/90 shadow-xl hover:border-red-500/40 transition-colors" key={faq.question}>
                    {/* Header Banner */}
                    <div className="bg-[#18202a] border-b border-white/10 px-5 py-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-red-500 shrink-0" />
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {faq.question}
                        </h3>
                      </div>
                      <button
                        aria-controls={contentId}
                        aria-expanded={isOpen}
                        className="text-stone-400 hover:text-white transition-colors"
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        type="button"
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 text-red-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>

                    {/* Answer Content */}
                    <div className="p-5 sm:p-6 text-sm sm:text-base text-stone-300 leading-relaxed flex-1 bg-[#0f1419]/60" id={contentId}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mt-20 border-t border-white/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in Touch with Our Support Team</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">We&apos;re here to help you get the best streaming experience. Send us a message and we&apos;ll get back to you quickly.</p>
          </header>
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121620]/80 p-5 text-center transition-colors hover:border-red-500/50" href="mailto:support@dooriptv.shop">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-400"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Email Us</span>
                <span className="mt-2 block text-xs leading-5 text-stone-400">For general inquiries and support.</span>
                <span className="mt-3 block text-xs font-semibold text-red-400">support@dooriptv.shop</span>
              </a>
              <a className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121620]/80 p-5 text-center transition-colors hover:border-red-500/50" href="https://wa.me/213554246175?text=Hello%20iptvdoor%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">WhatsApp Support</span>
                <span className="mt-2 block text-xs leading-5 text-stone-400">Fastest way to reach us for technical issues.</span>
                <span className="mt-3 block text-xs font-semibold text-emerald-400">Start Chat →</span>
              </a>
              <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121620]/80 p-5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-stone-300"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Response Time</span>
                <span className="mt-2 block text-xs leading-5 text-stone-400">We typically reply within <strong className="text-white">2 hours</strong> during standard business hours.</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#121620]/80 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Send us a message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-stone-400">Name<input className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-red-500" name="name" placeholder="John Doe" required /></label>
                  <label className="block text-xs font-semibold text-stone-400">Email address<input className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-red-500" name="email" placeholder="john@example.com" required type="email" /></label>
                </div>
                <label className="block text-xs font-semibold text-stone-400">Subject<input className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-red-500" name="subject" placeholder="How can we help?" /></label>
                <label className="block text-xs font-semibold text-stone-400">Message<textarea className="mt-2 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-black/40 px-3.5 py-3 text-sm text-white outline-none transition-colors placeholder:text-stone-500 focus:border-red-500" name="message" placeholder="Describe your question or issue..." required /></label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0" type="submit"><Send className="h-4 w-4" />Send message via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

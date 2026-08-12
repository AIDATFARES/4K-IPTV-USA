"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, CircleHelp, Clock3, CreditCard, Mail, MessageCircle, MonitorPlay, Send, Settings2, UserRound } from "lucide-react";

type Category = "About iscreenhd" | "Setup & streaming" | "Plans & access" | "Payments & support";

type FAQItem = {
  category: Category;
  question: string;
  answer: React.ReactNode;
};

const categories: { label: Category; icon: typeof CircleHelp }[] = [
  { label: "About iscreenhd", icon: CircleHelp },
  { label: "Setup & streaming", icon: Settings2 },
  { label: "Plans & access", icon: UserRound },
  { label: "Payments & support", icon: CreditCard },
];

const faqs: FAQItem[] = [
  {
    category: "About iscreenhd",
    question: "What is iscreenhd IPTV?",
    answer:
      "iscreenhd IPTV is an internet-based television service that delivers live channels and on-demand entertainment through a compatible IPTV player. Once your subscription is active, you can sign in on a supported device and enjoy the content included with your plan.",
  },
  {
    category: "About iscreenhd",
    question: "Is iscreenhd IPTV authorized?",
    answer:
      "iscreenhd IPTV is intended to be used in accordance with applicable laws, local regulations, and our service terms. Please ensure that the content you access and the way you use the service are permitted in your location.",
  },
  {
    category: "About iscreenhd",
    question: "What channels and content are included with iscreenhd IPTV?",
    answer:
      "iscreenhd IPTV includes a broad selection of live channels covering sports, news, and entertainment, along with a regularly updated on-demand library of movies and TV series. Availability and quality can vary by channel, programme, and location.",
  },
  {
    category: "About iscreenhd",
    question: "Can I watch live sports and PPV events on iscreenhd IPTV?",
    answer:
      "iscreenhd IPTV includes a range of live sports channels and events. Coverage can include football, NFL, NBA, UFC, and pay-per-view events, although schedules and availability may vary by region and broadcaster.",
  },
  {
    category: "About iscreenhd",
    question: "Which devices can I use?",
    answer:
      "iscreenhd IPTV works with compatible IPTV apps on many Smart TVs, Android TV and Google TV devices, Amazon Fire TV and Firestick, Apple TV, smartphones, tablets, MAG boxes, and Windows or Mac computers. Check your device's app store or our How It Works page to choose a compatible player.",
  },
  {
    category: "Setup & streaming",
    question: "How do I install iscreenhd IPTV on my device?",
    answer:
      "Start by installing a compatible IPTV player on your device. In the app, select the option to add a playlist or an Xtream Codes account, then enter the iscreenhd IPTV details from your welcome email. Our How It Works page provides device-specific instructions if you need additional help.",
  },
  {
    category: "Setup & streaming",
    question: "Can I use iscreenhd IPTV on a Smart TV?",
    answer:
      "Yes, iscreenhd IPTV can be used on many Smart TVs, including Samsung, LG, and Android TV models, through a compatible IPTV player. The exact app options depend on your television model and its app store.",
  },
  {
    category: "Setup & streaming",
    question: "What internet speed do I need for smooth iscreenhd IPTV streaming?",
    answer:
      "For reliable playback, allow at least 10 Mbps per stream for HD and 25 Mbps per stream for 4K. A wired Ethernet connection is ideal; if you use Wi-Fi, keep the device close to your router or use a strong 5 GHz network.",
  },
  {
    category: "Setup & streaming",
    question: "Why is iscreenhd IPTV buffering or freezing?",
    answer:
      <>If streaming buffers or freezes, restart the IPTV app, your device, and your router, then try another channel. A weak Wi-Fi signal, limited bandwidth, network congestion, or an outdated app can cause playback problems. If the issue continues, <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact support</Link> with your device model, app name, and the affected channel.</>,
  },
  {
    category: "Setup & streaming",
    question: "What happens if my stream drops or there is a server issue?",
    answer:
      <>If a stream drops, first restart your IPTV app or router and try again. If the issue persists, <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact our support team</Link> with the channel name, device model, and app you are using so we can investigate and help you restore service.</>,
  },
  {
    category: "Setup & streaming",
    question: "Do I need a VPN to use iscreenhd IPTV?",
    answer:
      "A VPN is not required for normal setup. If your network restricts streaming traffic, a reputable VPN may help, provided its use complies with local law, your internet provider's terms, and the service terms. Choose a nearby server to avoid adding latency.",
  },
  {
    category: "Plans & access",
    question: "Are there any hidden fees or contracts with iscreenhd IPTV?",
    answer:
      "The price and subscription period are shown before you place your order. Please review the checkout details and service terms carefully so you understand the plan, renewal, and any applicable conditions before purchasing.",
  },
  {
    category: "Plans & access",
    question: "Can I use iscreenhd IPTV on multiple devices?",
    answer:
      "That depends on the number of simultaneous connections included with your subscription. One connection supports one active stream at a time; use a multi-connection plan if you need to watch on multiple devices at the same time.",
  },
  {
    category: "Plans & access",
    question: "What are iscreenhd IPTV M3U and Xtream Codes details?",
    answer:
      "M3U and Xtream Codes are two common connection methods for IPTV player apps. An M3U link is a playlist address, while Xtream Codes uses a server address, username, and password. Your welcome email contains the details needed for the app you choose.",
  },
  {
    category: "Plans & access",
    question: "Can I access iscreenhd IPTV while travelling internationally?",
    answer:
      "You can usually sign in from another location on a supported device, subject to your plan and applicable local rules. Use a secure connection, avoid sharing your credentials, and remember that channel availability may vary by region.",
  },
  {
    category: "Plans & access",
    question: "Can I change or reset my iscreenhd IPTV password?",
    answer:
      <>For help with account access, <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact support</Link> from the email address used for your order. Never post your playlist URL, username, or password in public messages or screenshots.</>,
  },
  {
    category: "Payments & support",
    question: "Does iscreenhd IPTV offer a free trial?",
    answer:
      <>Trial availability can vary by plan and promotion. Visit the iscreenhd IPTV <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/pricing">pricing page</Link> or <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact support</Link> to confirm the current options before purchasing a longer subscription.</>,
  },
  {
    category: "Payments & support",
    question: "Which payment methods does iscreenhd IPTV accept?",
    answer:
      <>Available payment methods are shown securely during checkout. Review the options available for your location before completing your order, and <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">contact support</Link> if you need help with a payment.</>,
  },
  {
    category: "Payments & support",
    question: "How long does activation take after I purchase a plan?",
    answer:
      "Activation is typically instant. Your login details and setup instructions are sent straight to your email immediately after payment is confirmed, so you can start streaming right away.",
  },
  {
    category: "Payments & support",
    question: "What is iscreenhd IPTV's refund policy?",
    answer:
      <><Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/refund-policy">Refund eligibility</Link> depends on the terms presented at purchase and the nature of the request. <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/contact">Contact support</Link> with your order details so the team can review your case and explain the available options.</>,
  },
  {
    category: "Payments & support",
    question: "What iscreenhd IPTV customer support is available?",
    answer:
      "Our support team can help with activation, app setup, and troubleshooting. Include your order email, device model, IPTV app name, and a brief description of the issue so we can help quickly.",
  },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<Category>("About iscreenhd");
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const visibleFaqs = faqs.filter((faq) => faq.category === activeCategory);

  function selectCategory(category: Category) {
    setActiveCategory(category);
    setActiveIndex(0);
  }

  function sendSupportMessage(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "General support").trim();
    const message = String(formData.get("message") || "").trim();
    const text = encodeURIComponent(`Hello iscreenhd IPTV support,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`);
    window.open(`https://wa.me/213554246175?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main className="flex-grow px-margin-mobile pb-20 pt-12 md:px-margin-desktop md:pt-16">
      <div className="mx-auto max-w-[1080px]">
        <header className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-tertiary">Help center</p>
          <h1 className="font-display-lg text-display-lg text-on-surface">iscreenhd IPTV FAQs</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
            Straightforward answers about iscreenhd IPTV, setting up your devices, streaming reliably, and managing your subscription.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[250px_minmax(0,1fr)] md:gap-10">
          <aside aria-label="FAQ categories" className="md:sticky md:top-28 md:self-start">
            <div className="glass-panel rounded-2xl p-3">
              <div className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0">
                {categories.map(({ label, icon: Icon }) => {
                  const isSelected = activeCategory === label;
                  return (
                    <button
                      aria-pressed={isSelected}
                      className={`flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors md:w-full ${isSelected
                          ? "bg-primary-container text-white shadow-[0_8px_24px_rgba(46,91,255,0.28)]"
                          : "text-on-surface-variant hover:bg-white/[0.07] hover:text-on-surface"
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

          <section aria-live="polite" className="space-y-3">
            <div className="mb-5 flex items-center gap-3">
              <MonitorPlay className="h-5 w-5 text-tertiary" />
              <h2 className="text-xl font-semibold text-on-surface">{activeCategory}</h2>
            </div>
            {visibleFaqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              const contentId = `faq-${activeCategory.replaceAll(" ", "-").toLowerCase()}-${index}`;

              return (
                <article className="glass-panel overflow-hidden rounded-xl" key={faq.question}>
                  <h3>
                    <button
                      aria-controls={contentId}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors hover:bg-white/[0.04] sm:px-6"
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      type="button"
                    >
                      <span className="text-base font-semibold leading-6 text-on-surface sm:text-lg">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-tertiary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="border-t border-white/[0.08] bg-black/10 px-5 py-5 sm:px-6" id={contentId}>
                      <p className="max-w-3xl text-pretty text-sm leading-7 text-on-surface-variant sm:text-base">{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </section>
        </div>

        <section className="mt-20 border-t border-white/10 pt-16 sm:pt-20">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in Touch with Our Support Team</h2>
            <p className="mt-3 text-sm leading-6 text-on-surface-variant">We&apos;re here to help you get the best streaming experience. Send us a message and we&apos;ll get back to you quickly.</p>
          </header>
          <div className="mt-10 grid gap-8 xl:grid-cols-[278px_minmax(0,1fr)] xl:gap-10">
            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              <a className="glass-panel flex min-h-40 flex-col items-center justify-center rounded-xl p-5 text-center transition-colors hover:border-primary/50" href="mailto:support@iscreenhd.com">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20 text-primary"><Mail className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Email Us</span>
                <span className="mt-2 block text-xs leading-5 text-on-surface-variant">For general inquiries and support.</span>
                <span className="mt-3 block text-xs font-semibold text-primary">support@iscreenhd.com</span>
              </a>
              <a className="glass-panel flex min-h-40 flex-col items-center justify-center rounded-xl p-5 text-center transition-colors hover:border-tertiary/50" href="https://wa.me/213554246175?text=Hello%20iscreenhd%20IPTV%20support%2C%20I%20need%20help." rel="noreferrer" target="_blank">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container/20 text-tertiary"><MessageCircle className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">WhatsApp Support</span>
                <span className="mt-2 block text-xs leading-5 text-on-surface-variant">Fastest way to reach us for technical issues.</span>
                <span className="mt-3 block text-xs font-semibold text-tertiary">Start Chat →</span>
              </a>
              <div className="glass-panel flex min-h-40 flex-col items-center justify-center rounded-xl p-5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant"><Clock3 className="h-5 w-5" /></span>
                <span className="mt-4 block text-base font-bold text-white">Response Time</span>
                <span className="mt-2 block text-xs leading-5 text-on-surface-variant">We typically reply within <strong className="text-white">2 hours</strong> during standard business hours.</span>
              </div>
            </div>

            <div className="glass-panel rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white">Send us a message</h3>
              <form action={sendSupportMessage} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold text-on-surface-variant">Name<input className="mt-2 w-full rounded-lg border border-white/10 bg-surface-container-lowest/80 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-outline focus:border-primary" name="name" placeholder="John Doe" required /></label>
                  <label className="block text-xs font-semibold text-on-surface-variant">Email address<input className="mt-2 w-full rounded-lg border border-white/10 bg-surface-container-lowest/80 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-outline focus:border-primary" name="email" placeholder="john@example.com" required type="email" /></label>
                </div>
                <label className="block text-xs font-semibold text-on-surface-variant">Subject<input className="mt-2 w-full rounded-lg border border-white/10 bg-surface-container-lowest/80 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-outline focus:border-primary" name="subject" placeholder="How can we help?" /></label>
                <label className="block text-xs font-semibold text-on-surface-variant">Message<textarea className="mt-2 min-h-32 w-full resize-y rounded-lg border border-white/10 bg-surface-container-lowest/80 px-3 py-3 text-sm text-white outline-none transition-colors placeholder:text-outline focus:border-primary" name="message" placeholder="Describe your question or issue..." required /></label>
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-container to-secondary-container px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-0.5" type="submit"><Send className="h-4 w-4" />Send message via WhatsApp</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

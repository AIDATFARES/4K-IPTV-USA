"use client";

import { Apple, Box, ChevronDown, Download, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV or IPTV Smarters", note: "Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone & iPad Setup", app: "IPTV Smarters Player", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "How do I install IPTV on a Smart TV?", answer: "Install a compatible player such as Smart IPTV or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "Where do I find my M3U URL?", answer: "Your M3U URL is included in the welcome email sent after activation. Contact support if you need it resent." },
  { question: "How can I reduce buffering?", answer: "Use a stable internet connection, restart your device and router, and select an appropriate quality setting for your connection." },
  { question: "How do I set up iscreenhd IPTV using Xtream Codes API?", answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." },
  { question: "Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG and compatible portal devices can be activated using their MAC address. Send it to our support team for assistance." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-xl md:mb-[100px]">
      <header className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Device Setup Instructions</h2>
        <p className="mt-3 text-base text-slate-400">Select your device to receive clear setup instructions.</p>
      </header>

      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return <button className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${active ? "border-primary bg-primary-container text-white" : "border-white/15 bg-white/[0.03] text-on-surface-variant hover:border-primary/60 hover:text-on-surface"}`} key={item.id} onClick={() => setActiveDevice(item.id)} type="button"><Icon className="h-4 w-4" />{item.label}</button>;
        })}
      </div>

      <article className="glass-panel mx-auto max-w-[940px] rounded-2xl p-7 sm:p-10">
        <div className="flex items-center gap-3 border-b border-white/10 pb-5">
          <DeviceIcon className="h-7 w-7 text-tertiary" />
          <h3 className="text-xl font-bold text-on-surface sm:text-2xl">{device.title}</h3>
        </div>
        <div className="mt-8 space-y-8">
          <SetupStep number="1" title="Install IPTV App">Navigate to your device&apos;s app store, find <strong>{device.app}</strong>, and install the app.</SetupStep>
          <div className="rounded-lg border-l-2 border-primary bg-primary/10 px-4 py-3 text-sm leading-5 text-on-surface-variant">{device.note}</div>
          <SetupStep number="2" title="Configure your playlist">Launch the IPTV app, open its settings, and enter the playlist details supplied in your welcome email.</SetupStep>
          <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
          <SetupStep number="3" title="Add EPG (optional)">Enable the TV guide by entering your EPG URL in the app&apos;s settings menu.</SetupStep>
          <CodeLine label="EPG URL" text="Use the EPG URL from your welcome email" />
          <SetupStep number="4" title="Start Watching">Reopen the app to load your playlist and start watching iscreenhd IPTV channels.</SetupStep>
        </div>
      </article>

      <div className="mx-auto mt-16 max-w-[870px]">
        <h2 className="mb-7 text-center text-3xl font-extrabold tracking-tight text-on-surface">Installation FAQ</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {faqs.map((faq, index) => {
            const open = openFaq === index;
            return <div className={`overflow-hidden rounded-xl border ${open ? "border-primary/60 bg-primary/10 md:col-span-2" : "border-white/10 bg-white/[0.025]"}`} key={faq.question}>
              <button className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-sm font-semibold text-on-surface" onClick={() => setOpenFaq(open ? null : index)} type="button"><span>{faq.question}</span><ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} /></button>
              {open && <p className="px-4 pb-4 text-sm leading-6 text-on-surface-variant">{faq.answer}</p>}
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return <div className="flex gap-4"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-container text-sm font-extrabold text-white">{number}</span><div><h4 className="font-title-md text-title-md font-bold text-on-surface">{title}</h4><p className="mt-1 text-sm leading-6 text-on-surface-variant">{children}</p></div></div>;
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return <div className="rounded-lg bg-black/20 px-4 py-3 font-mono text-xs text-slate-400"><span className="font-bold text-primary">{label}:</span> {text}</div>;
}

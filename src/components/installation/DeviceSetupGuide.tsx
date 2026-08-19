"use client";

import { Apple, Box, ChevronDown, Download, HelpCircle, Monitor, Satellite, Smartphone, Tv } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const devices = [
  { id: "smart-tv", label: "Smart TV", icon: Monitor, title: "Smart TV Setup (Samsung, LG, Sony, etc.)", app: "Smart IPTV or IPTV Smarters", note: "Samsung TVs commonly use Smart IPTV, while LG TVs can use IPTV Smarters or SS IPTV." },
  { id: "firestick", label: "Firestick", icon: Tv, title: "Firestick Setup", app: "IPTV Smarters Pro or TiviMate", note: "Install your preferred IPTV player from the Amazon Appstore, then sign in with the details from your welcome email." },
  { id: "android", label: "Android", icon: Smartphone, title: "Android Setup", app: "IPTV Smarters Pro or TiviMate", note: "Download your player from Google Play and use your supplied playlist details to sign in." },
  { id: "ios", label: "iOS", icon: Apple, title: "iPhone & iPad Setup", app: "IPTV Smarters Player", note: "Install a compatible player from the App Store and enter the credentials from your welcome email." },
  { id: "mag", label: "MAG Box", icon: Box, title: "MAG Box Setup", app: "Portal URL", note: "Send your MAG device MAC address to support so we can activate your portal before setup." },
  { id: "enigma", label: "Enigma2", icon: Satellite, title: "Enigma2 Setup", app: "XtreamTV or E-Channelizer", note: "Use a compatible Enigma2 plugin and add the playlist details supplied with your subscription." },
];

const faqs = [
  { question: "1. How do I install IPTV on a Smart TV?", answer: "Install a compatible player such as Smart IPTV or IPTV Smarters from your TV's app store, then add the M3U URL or Xtream credentials from your welcome email." },
  { question: "2. Where do I find my M3U URL?", answer: "Your M3U URL is included in the welcome email sent after activation. Contact support if you need it resent." },
  { question: "3. How can I reduce buffering?", answer: "Use a stable internet connection, restart your device and router, and select an appropriate quality setting for your connection." },
  { question: "4. How do I set up 4K IPTV USA using Xtream Codes API?", answer: "Choose Xtream Codes API in your player and enter the server URL, username, and password from your welcome email." },
  { question: "5. Can I connect using a MAC address (Portal URL)?", answer: "Yes. MAG and compatible portal devices can be activated using their MAC address. Send it to our support team for assistance." },
];

export default function DeviceSetupGuide() {
  const [activeDevice, setActiveDevice] = useState("smart-tv");
  const device = devices.find((item) => item.id === activeDevice) ?? devices[0];
  const DeviceIcon = device.icon;

  return (
    <section className="mb-16 md:mb-[100px]">
      <header className="mx-auto mb-9 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Device Setup Instructions</h2>
        <p className="mt-3 text-base text-slate-600">Select your device to receive clear setup instructions.</p>
      </header>

      <div className="mb-7 flex flex-wrap justify-center gap-2">
        {devices.map((item) => {
          const Icon = item.icon;
          const active = item.id === activeDevice;
          return (
            <button 
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${active ? "border-blue-600 bg-[#2563EB] text-white shadow-lg shadow-blue-600/30" : "border-black/15 bg-white text-slate-600 hover:border-blue-500/60 hover:text-black hover:bg-blue-50"}`} 
              key={item.id} 
              onClick={() => setActiveDevice(item.id)} 
              type="button"
            >
              <Icon className="h-4 w-4" />{item.label}
            </button>
          );
        })}
      </div>

      <article className="mx-auto max-w-[1000px] rounded-3xl border-2 border-[#2563EB] bg-white p-6 sm:p-10 shadow-2xl overflow-hidden">
        
        {/* Device Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-slate-100 pb-6 mb-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 shrink-0">
            <DeviceIcon className="h-8 w-8 text-[#2563EB]" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-black sm:text-3xl">{device.title}</h3>
            <p className="mt-1 text-slate-500 font-medium">Follow these steps to configure your {device.label} for 4K IPTV USA.</p>
          </div>
        </div>
        
        {/* Important Note */}
        {device.note && (
          <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50/50 p-5 flex items-start gap-4">
            <HelpCircle className="h-6 w-6 text-[#2563EB] shrink-0" />
            <div>
              <h4 className="font-bold text-black mb-1">Important Note</h4>
              <p className="text-sm leading-relaxed text-slate-700">{device.note}</p>
            </div>
          </div>
        )}

        {/* Steps Grid */}
        <div className="space-y-6">
          <SetupStep 
            number="1" 
            title="Install IPTV App"
          >
            Navigate to your device's app store, search for <strong>{device.app}</strong>, and install the application directly to your device.
          </SetupStep>
          
          <SetupStep 
            number="2" 
            title="Configure your playlist"
          >
            Launch the IPTV app, open its settings menu, and enter the M3U playlist details or Xtream Codes credentials supplied in your welcome email.
            <div className="mt-4">
              <CodeLine label="M3U URL" text="Use the secure playlist URL from your welcome email" />
            </div>
          </SetupStep>
          
          <SetupStep 
            number="3" 
            title="Start Watching"
          >
            Save your settings and allow the app a few moments to load the channels. You now have immediate access to live channels, movies and TV shows in stunning 4K quality!
          </SetupStep>
        </div>
      </article>

      <div className="mx-auto mt-20 max-w-[1000px]">
        <h2 className="mb-8 text-center text-3xl font-extrabold tracking-tight text-black sm:text-4xl">Installation FAQ</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <div className="flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:border-blue-200 transition-colors" key={faq.question}>
              <div className="bg-slate-50 border-b border-slate-100 px-5 py-4 flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#2563EB] shrink-0" />
                <h3 className="text-base sm:text-lg font-bold text-black leading-snug">
                  {faq.question}
                </h3>
              </div>
              <div className="p-5 text-sm text-slate-700 leading-relaxed bg-white flex-1">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SetupStep({ children, number, title }: { children: React.ReactNode; number: string; title: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
      
      {/* Content */}
      <div className="flex flex-1 gap-5 items-start">
         <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-lg font-extrabold text-white shadow-md">
           {number}
         </span>
         <div className="flex-1 mt-1">
           <h4 className="text-lg font-bold text-black sm:text-xl">{title}</h4>
           <div className="mt-3 text-sm leading-relaxed text-slate-600">
             {children}
           </div>
         </div>
      </div>
      
    </div>
  );
}

function CodeLine({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 font-mono text-xs text-slate-700 break-all">
      <span className="font-bold text-[#2563EB] mr-2">{label}:</span> 
      {text}
    </div>
  );
}

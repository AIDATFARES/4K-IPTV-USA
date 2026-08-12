import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { 
  Home, DollarSign, MessageCircle, Play, HelpCircle, BookOpen, ExternalLink, 
  Trophy, Mail, Grid, Settings, Lock, ShieldCheck, AlertCircle, Cookie, 
  Globe, CreditCard, Bitcoin
} from "lucide-react";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "iscreenhd IPTV - Premium 4K Streaming Services",
  description: "Ultimate 4K IPTV Experience. Access 20,000+ premium live channels and a massive VOD library.",
  metadataBase: new URL("https://worldcupiptv.us"), // Update this to your actual production URL
  openGraph: {
    title: "iscreenhd IPTV - Premium 4K Streaming",
    description: "Ultimate 4K IPTV Experience. Access 20,000+ premium live channels and a massive VOD library.",
    url: "https://worldcupiptv.us",
    siteName: "iscreenhd IPTV",
    images: [
      {
        url: "/iptv-hero-opt.webp",
        width: 1200,
        height: 630,
        alt: "iscreenhd Premium IPTV Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iscreenhd IPTV - Premium 4K Streaming",
    description: "Ultimate 4K IPTV Experience. Access 20,000+ premium live channels.",
    images: ["/iptv-hero-opt.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${geist.variable}`}>
      <head>
      </head>
      <body className="bg-background text-on-background font-body-lg min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
        {/* Navbar Component */}
        <Navbar />

        <div className="flex-grow pt-[88px] flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-white/10 bg-[#080b12]">
          <div className="grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-12 px-6 py-16 sm:grid-cols-4 sm:gap-x-8 sm:px-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] xl:gap-10 xl:px-12 mx-auto">
            <div className="col-span-2 sm:col-span-4 xl:col-span-1 min-w-0 max-w-[310px] space-y-4">
              <Link href="/"><BrandLogo /></Link>
              <p className="max-w-[285px] whitespace-normal break-normal text-sm leading-6 text-slate-400">
                © 2024 iscreenhd. Premium 4K IPTV Streaming Services. All rights reserved.
              </p>
              <a href="https://wa.me/213554246175" target="_blank" rel="noreferrer" className="flex max-w-[270px] items-center gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.07] p-3.5 transition-colors hover:bg-emerald-500/[0.12] group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">Fast support</span>
                  <span className="block whitespace-nowrap text-base font-bold text-white">WhatsApp</span>
                </span>
              </a>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500"><span className="h-2 w-2 rounded-full bg-emerald-400" /> All servers online · 99.9% uptime</p>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-300"><span className="border-b-2 border-violet-400 pb-1.5">Navigation</span></h4>
              <ul className="space-y-4 font-body-sm text-sm">
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/"><Home className="h-4 w-4 text-orange-500 shrink-0" /> Home</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/pricing"><DollarSign className="h-4 w-4 text-yellow-500 shrink-0" /> Pricing</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/contact"><MessageCircle className="h-4 w-4 text-green-500 shrink-0" /> Contact</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/installation"><Play className="h-4 w-4 text-blue-500 shrink-0" /> How It Works</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/faq"><HelpCircle className="h-4 w-4 text-red-500 shrink-0" /> FAQ</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/blog"><BookOpen className="h-4 w-4 text-slate-300 shrink-0" /> Blog <span className="ml-1 inline-flex h-[18px] w-[18px] items-center justify-center rounded bg-blue-500"><ExternalLink className="h-3 w-3 text-white" /></span></Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-300"><span className="border-b-2 border-violet-400 pb-1.5">Service</span></h4>
              <ul className="space-y-4 font-body-sm text-sm">
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/pricing"><Trophy className="h-4 w-4 text-yellow-500 shrink-0" /> Get Started</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="https://wa.me/213554246175"><MessageCircle className="h-4 w-4 text-blue-500 shrink-0" /> WhatsApp</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="mailto:support@iscreenhd.com"><Mail className="h-4 w-4 text-slate-300 shrink-0" /> Email</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/channels"><Grid className="h-4 w-4 text-slate-300 shrink-0" /> Channels</Link></li>
                <li><Link className="flex items-center gap-2.5 text-slate-400 transition-colors hover:text-white" href="/installation"><Settings className="h-4 w-4 text-gray-400 shrink-0" /> Setup Guide</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-300"><span className="border-b-2 border-violet-400 pb-1.5">Legal</span></h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link className="flex items-center gap-2.5 transition-colors hover:text-white" href="/privacy-policy"><Lock className="h-4 w-4 text-yellow-500 shrink-0" /> Privacy Policy</Link></li>
                <li><Link className="flex items-center gap-2.5 transition-colors hover:text-white" href="/refund-policy"><Play className="h-4 w-4 text-blue-500 shrink-0" /> Refund Policy</Link></li>
                <li><Link className="flex items-center gap-2.5 transition-colors hover:text-white" href="#"><ShieldCheck className="h-4 w-4 text-blue-500 shrink-0" /> Disclaimer</Link></li>
                <li><Link className="flex items-center gap-2.5 transition-colors hover:text-white" href="/dmca"><AlertCircle className="h-4 w-4 text-purple-500 shrink-0" /> DMCA</Link></li>
                <li><Link className="flex items-center gap-2.5 transition-colors hover:text-white" href="#"><Cookie className="h-4 w-4 text-orange-500 shrink-0" /> Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <h4 className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-300"><span className="border-b-2 border-violet-400 pb-1.5">Payment</span></h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-2.5"><svg className="h-4 w-4 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9 17H7V7h4.5c1.5 0 2.5 1 2.5 2.5S13 12 11.5 12H9v5zm0-7v-1h2.5c.5 0 1 .5 1 1s-.5 1-1 1H9z"/></svg> PayPal</li>
                <li className="flex items-center gap-2.5"><CreditCard className="h-4 w-4 text-orange-500 shrink-0" /> Credit Card</li>
                <li className="flex items-center gap-2.5"><Bitcoin className="h-4 w-4 text-slate-300 shrink-0" /> Bitcoin</li>
                <li className="flex items-center gap-2.5"><svg className="h-4 w-4 text-yellow-500 shrink-0" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 9h8v2h-3v6h-2v-6H8V9z" fill="#080b12"/></svg> USDT / Crypto</li>
              </ul>
            </div>
            
            <div className="col-span-2 mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-slate-400 sm:col-span-4 md:flex-row md:items-center md:justify-between xl:col-span-5">
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/5 hover:text-white" href="/privacy-policy">Privacy Policy</Link>
                <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/5 hover:text-white" href="/refund-policy">Refund Policy</Link>
                <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/5 hover:text-white" href="#">Disclaimer</Link>
                <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/5 hover:text-white" href="/dmca">DMCA</Link>
                <Link className="rounded-full border border-white/10 px-4 py-2 transition-colors hover:bg-white/5 hover:text-white" href="#">Cookie Policy</Link>
              </div>
              <p className="flex items-center gap-2 whitespace-nowrap font-bold uppercase tracking-widest text-slate-300">
                <Globe className="h-4 w-4 text-blue-500" />
                Built for the World Cup 2026
              </p>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}

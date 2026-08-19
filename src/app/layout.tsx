import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import Link from "next/link";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import BrandLogo from "@/components/ui/BrandLogo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "4K IPTV USA - Premium 4K Streaming Services",
  description: "Ultimate 4K IPTV Experience. Access +50,000 Channels, +120,000 Films & Series, and 200,000+ VODs.",
  metadataBase: new URL("https://www.4kiptvusa.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "4K IPTV USA - Premium 4K Streaming",
    description: "Ultimate 4K IPTV Experience. Access +50,000 Channels, +120,000 Films & Series, and 200,000+ VODs.",
    url: "https://www.4kiptvusa.com",
    siteName: "4K IPTV USA",
    images: [
      {
        url: "/og-image-v2.webp",
        width: 1200,
        height: 630,
        alt: "4K IPTV USA Premium IPTV Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "4K IPTV USA - Premium 4K Streaming",
    description: "Ultimate 4K IPTV Experience. Access +50,000 Channels, +120,000 Films & Series, and 200,000+ VODs.",
    images: ["/og-image-v2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${inter.variable} ${geist.variable}`}>
      <head>
      </head>
      <body className="bg-background text-on-background font-body-lg min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
        {/* Navbar Component */}
        <Navbar />

        <div className="flex-grow pt-[124px] flex flex-col">{children}</div>

        {/* Footer */}
        <footer className="w-full mt-auto border-t border-black/10 bg-white">
          <div className="grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-12 px-6 py-16 sm:grid-cols-4 sm:gap-x-8 sm:px-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1fr] xl:gap-10 xl:px-12 mx-auto">
            <div className="col-span-2 sm:col-span-4 xl:col-span-1 min-w-0 max-w-[310px] space-y-4">
              <Link href="/"><BrandLogo /></Link>
              <p className="max-w-[285px] whitespace-normal break-normal text-sm leading-6 text-slate-700">
                © 2024 4kiptvusa. Premium 4K IPTV Streaming Services. All rights reserved.
              </p>
              <a href="https://wa.me/213552069874" target="_blank" rel="noreferrer" className="flex max-w-[270px] items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.08] p-3.5 transition-colors hover:bg-emerald-500/[0.15] group">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-105">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-emerald-400">Fast support</span>
                  <span className="block whitespace-nowrap text-base font-bold text-black">WhatsApp</span>
                </span>
              </a>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-slate-600"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> All servers online · 99.9% uptime</p>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700"><span className="border-b-2 border-blue-500 pb-1.5">NAVIGATION</span></p>
              <ul className="space-y-3 font-body-sm text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/">Home</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/pricing">Pricing</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/contact">Contact</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/#how-it-works">How It Works</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/faq">FAQ</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/blog">Blog</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700"><span className="border-b-2 border-blue-500 pb-1.5">SERVICE</span></p>
              <ul className="space-y-3 font-body-sm text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/pricing">Get Started</Link></li>
                <li><a className="text-slate-600 transition-colors hover:text-black" href="https://wa.me/213552069874" target="_blank" rel="noreferrer">WhatsApp</a></li>
                <li><a className="text-slate-600 transition-colors hover:text-black" href="mailto:support@4kiptvusa.com">Email</a></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/channels">Channels</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/installation">Setup Guide</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700"><span className="border-b-2 border-blue-500 pb-1.5">LEGAL</span></p>
              <ul className="space-y-3 text-sm">
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/privacy-policy">Privacy Policy</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/refund-policy">Refund Policy</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="#">Disclaimer</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="/dmca">DMCA</Link></li>
                <li><Link prefetch={false} className="text-slate-600 transition-colors hover:text-black" href="#">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div className="col-span-1 min-w-0 space-y-6">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-700"><span className="border-b-2 border-blue-500 pb-1.5">PAYMENT</span></p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>PayPal</li>
                <li>Credit Card</li>
                <li>Bitcoin</li>
                <li>USDT / Crypto</li>
              </ul>
            </div>
            
            <div className="col-span-2 mt-8 flex flex-col gap-6 border-t border-black/10 pt-8 text-xs text-slate-600 sm:col-span-4 md:flex-row md:items-center md:justify-between xl:col-span-5">
              <div className="flex flex-wrap gap-3">
                <Link className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 hover:text-black" href="/privacy-policy">Privacy Policy</Link>
                <Link className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 hover:text-black" href="/refund-policy">Refund Policy</Link>
                <Link className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 hover:text-black" href="#">Disclaimer</Link>
                <Link className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 hover:text-black" href="/dmca">DMCA</Link>
                <Link className="rounded-full border border-black/10 px-4 py-2 transition-colors hover:bg-black/5 hover:text-black" href="#">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}

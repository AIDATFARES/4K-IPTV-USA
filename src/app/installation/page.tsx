import Link from "next/link";
import DeviceSetupGuide from "@/components/installation/DeviceSetupGuide";
import { Clock3, Download, Headphones, Link2, Monitor, PlayCircle } from "lucide-react";

export default function Installation() {
  return (
    <main className="mx-auto w-full max-w-[1440px] flex-grow px-5 pb-20 pt-12 sm:px-8 md:px-12">
      <header className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="inline-flex rounded-full border border-indigo-400/35 bg-indigo-400/[0.06] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-indigo-300">Installation Guide</span>
        <h1 className="mt-6 text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl">
          <span className="block">How To Setup</span>
          <span className="mt-1 block bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">IPTV</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-slate-400">Comprehensive step-by-step instructions to configure iscreenhd IPTV on all your devices.</p>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-6 text-slate-400">iscreenhd IPTV works on Smart TVs, Firestick, Android, iOS, MAG, and more. New to iscreenhd IPTV? Check <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/pricing">iscreenhd IPTV Pricing</Link>, or browse the <Link className="font-semibold text-cyan-400 hover:text-cyan-300" href="/channels">iscreenhd IPTV Channel List</Link> before you start.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-9 gap-y-4 text-sm font-semibold text-slate-300">
          <span className="inline-flex items-center gap-2"><Monitor className="h-4 w-4 text-cyan-400" />15+ Devices Supported</span>
          <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-violet-300" />5–15 Minutes Setup</span>
          <span className="inline-flex items-center gap-2"><Headphones className="h-4 w-4 text-emerald-400" />24/7 Support Available</span>
        </div>
      </header>

      <section className="mb-20 border-y border-white/[0.07] bg-white/[0.02] py-14 sm:mb-24 sm:py-16">
        <div className="mx-auto max-w-[1000px] px-5">
          <header className="mx-auto mb-10 max-w-[560px] text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Quick Start Guide</h2>
            <p className="mt-3 text-slate-400">Get started with iscreenhd IPTV quickly and easily in three straightforward steps.</p>
          </header>
          <div className="grid gap-5 md:grid-cols-3">
            <QuickStartCard icon={Download} step="1" title="Download App">Download and install a suitable IPTV player app on your device from the app store or the official site.</QuickStartCard>
            <QuickStartCard icon={Link2} step="2" title="Add M3U URL">Input your iscreenhd IPTV M3U playlist URL and EPG URL, which are included in your welcome email.</QuickStartCard>
            <QuickStartCard icon={PlayCircle} step="3" title="Start Streaming">Gain immediate access to live channels, movies and TV shows in stunning 4K quality.</QuickStartCard>
          </div>
        </div>
      </section>

      <DeviceSetupGuide />

      <section className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white">Need help with setup?</h2>
        <p className="mt-2 text-slate-400">Our support team is available 24/7 to assist you with installation.</p>
        <Link className="mt-5 inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-7 py-3 font-semibold text-indigo-200 transition-colors hover:bg-indigo-500/20" href="/contact">
          Contact Support
        </Link>
      </section>
    </main>
  );
}

function QuickStartCard({ children, icon: Icon, step, title }: { children: React.ReactNode; icon: typeof Download; step: string; title: string }) {
  return (
    <article className="glass-panel rounded-xl p-7 text-center transition-transform hover:-translate-y-1">
      <Icon className="mx-auto h-9 w-9 text-cyan-400" />
      <h3 className="mt-5 text-lg font-bold text-white">{step}. {title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{children}</p>
    </article>
  );
}

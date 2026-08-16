import Link from "next/link";

export default function ComparisonSection() {
  return (
    <section className="bg-white text-black relative z-10 border-b border-black/10 overflow-hidden py-20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] mb-2 block">
            IPTV VS CABLE TV
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Why IPTV Fiesta is the Best Cable TV Alternative
          </h2>
          <p className="text-slate-700 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Discover why thousands of users are cutting the cord. Our premium IPTV service offers more channels, better 4K quality, and reliable anti-freeze technology at a fraction of the cost of traditional cable.
          </p>
        </div>

        <div className="max-w-[1080px] mx-auto overflow-x-auto pb-4 px-4 sm:px-0">
          <div className="min-w-[800px] bg-white rounded-2xl shadow-xl border-2 border-[#FF6B00] overflow-hidden relative flex">
            
            {/* Orange Side Design Element (Internal Link) */}
            <Link 
              href="/how-it-works"
              className="w-14 bg-[#FF6B00] hover:bg-[#E66000] transition-colors flex items-center justify-center group cursor-pointer shrink-0 border-r border-orange-700/20 shadow-[inset_-4px_0_10px_rgba(0,0,0,0.1)]"
              title="Learn How It Works"
            >
              <span className="-rotate-90 text-white font-black tracking-[0.2em] uppercase whitespace-nowrap text-xs sm:text-sm group-hover:scale-110 transition-transform">
                How It Works
              </span>
            </Link>

            <div className="flex-grow">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-slate-50 border-b border-slate-200">
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider">Feature</div>
                <div className="p-6 text-sm font-black text-[#FF6B00] uppercase tracking-wider text-center border-x border-slate-200 bg-orange-50/50">IPTV Fiesta</div>
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider text-center">Cable / Satellite</div>
                <div className="p-6 text-sm font-bold text-slate-500 uppercase tracking-wider text-center border-l border-slate-200">Other IPTV</div>
              </div>

              {/* Table Rows */}
              {[
                { feature: "Monthly Cost", fiesta: "From $4.2/mo", cable: "$80-$200/mo", other: "$10-$30/mo (unreliable)" },
                { feature: "Live Channels", fiesta: "50,000+", cable: "200-500", other: "5,000-15,000" },
                { feature: "4K Streaming", fiesta: "✓ Native 4K", cable: "Limited", other: "Rarely stable" },
                { feature: "VOD Library", fiesta: "120,000+ titles", cable: "Add-on cost", other: "Varies wildly" },
                { feature: "Server Uptime", fiesta: "99.9% guaranteed", cable: "99%", other: "60-85%" },
                { feature: "Buffering", fiesta: "Zero — ever", cable: "Rare", other: "Common at peak hours" },
                { feature: "Setup", fiesta: "5 minutes", cable: "Technician visit", other: "Varies" },
                { feature: "Contract", fiesta: "No", cable: "12-24 months", other: "Sometimes" },
                { feature: "Multi-Screen", fiesta: "✓ Included", cable: "Extra cost", other: "Limited" },
                { feature: "Free Trial", fiesta: "✓ Available", cable: "No", other: "Rare" },
              ].map((row, idx) => (
                <div key={idx} className={`grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors ${idx === 9 ? 'border-b-0' : ''}`}>
                  <div className="p-5 text-sm font-bold text-slate-800 flex items-center">{row.feature}</div>
                  <div className="p-5 text-sm font-bold text-black text-center flex items-center justify-center border-x border-slate-100 bg-orange-50/30">
                    {row.fiesta}
                  </div>
                  <div className="p-5 text-sm font-medium text-slate-500 text-center flex items-center justify-center">
                    {row.cable}
                  </div>
                  <div className="p-5 text-sm font-medium text-slate-500 text-center flex items-center justify-center border-l border-slate-100">
                    {row.other}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-[#FF6B00] text-white font-bold px-10 py-4 rounded-md shadow-[0_4px_14px_rgba(255,107,0,0.3)] hover:bg-[#E66000] hover:shadow-[0_6px_20px_rgba(255,107,0,0.4)] transition-all hover:scale-105"
          >
            View Plans & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}

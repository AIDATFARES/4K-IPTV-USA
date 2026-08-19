import { Check, Monitor, Globe2, Tv, Headphones } from "lucide-react";
import Link from "next/link";

export default function ChannelCategories() {
  const features = [
    {
      icon: Monitor,
      title: "For all devices",
      desc: "Our IPTV is 100% compatible with all operating systems, applications, TV boxes and devices available on the market.",
    },
    {
      icon: Globe2,
      title: "Global Content",
      desc: "Our IPTV subscription offers thousands of channels, movies, and series with the fastest and most stable server",
    },
    {
      icon: Tv,
      title: "Best quality FHD/4K",
      desc: "Enjoy your favorite shows, movies and events with the highest quality and performance.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "We offer 24/7 support to help you throughout your subscription, including installation, activation, and technical issues.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-16 text-black sm:py-24">
      <div className="mx-auto max-w-[1200px] px-5">
        
        {/* Heading above Red Box */}
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#2563EB]"></span>
            <span className="text-[#2563EB] text-sm font-bold tracking-[0.2em] uppercase">Premium Quality</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-[#2563EB]"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-tight animate-fade-up">
            We Are Proud to Offer the <br className="hidden md:block" />
            <span className="text-[#2563EB]">Premium IPTV Service.</span>
          </h2>
        </div>

        {/* Orange Feature Box */}
        <div 
          className="bg-[#2563EB] rounded-2xl md:rounded-3xl p-8 md:p-12 mb-20 shadow-[0_10px_40px_rgba(255,107,0,0.3)] animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="mb-6 inline-flex p-4 rounded-full bg-white shadow-sm">
                    <Icon className="w-8 h-8 text-[#2563EB]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-blue-50 text-[15px] leading-relaxed max-w-[280px] mx-auto font-medium">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
}

import { Monitor, Smartphone, Tv, Box, Laptop } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DeviceSupport() {
  return (
    <section className="py-24 bg-slate-50 text-black relative z-10 border-y border-black/10 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2E5BFF] mb-3 block">
            SUPPORTED IPTV DEVICES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Watch the Best IPTV Service on{" "}
            <Link
              href="/installation"
              className="text-[#2E5BFF] hover:text-blue-400 transition-colors"
            >
              All Your Favorite Devices
            </Link>
          </h2>
        </div>

        {/* Center Image Display */}
        <div className="relative mx-auto max-w-[800px] mb-16 group">
          {/* Subtle background glow for the image */}
          <div className="absolute inset-0 bg-blue-400/10 blur-[80px] rounded-full scale-90 -z-10 group-hover:bg-blue-400/20 transition-all duration-700"></div>

          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl transition-transform duration-500 hover:scale-[1.02]">
            <Image
              src="/devices-banner.webp"
              alt="Supported IPTV Devices - Smart TV, Laptop, Smartphone"
              width={1200}
              height={500}
              sizes="(max-width: 1024px) 100vw, 800px"
              className="w-full aspect-[21/9] sm:aspect-[2.5/1] object-cover object-center"
              priority
            />
          </div>
        </div>

        {/* 3-Column Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-[#2E5BFF] shadow-lg hover:shadow-xl hover:border-blue-200 hover:border-l-[#2E5BFF] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#2E5BFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Tv className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              Smart TVs, Android Boxes & Firestick
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our premium IPTV subscription is fully compatible with Samsung and LG Smart TVs, Amazon Firestick, Android TV boxes, and smartphones. Enjoy buffer-free live TV on any screen using our simple{" "}
              <Link
                href="/installation"
                className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors"
              >
                installation guide
              </Link>
              .
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-[#2E5BFF] shadow-lg hover:shadow-xl hover:border-blue-200 hover:border-l-[#2E5BFF] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#2E5BFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Box className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              MAG Devices & STB Emulators
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Connect your MAG box or STB emulator instantly. Just provide your MAC address, and we will send you our high-speed IPTV portal for access to thousands of live channels and our{" "}
              <Link
                href="/channels"
                className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors"
              >
                VOD library
              </Link>
              .
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-white rounded-2xl p-8 border-y border-r border-slate-200 border-l-4 border-l-[#2E5BFF] shadow-lg hover:shadow-xl hover:border-blue-200 hover:border-l-[#2E5BFF] transition-all duration-300 group overflow-hidden">
            <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#2E5BFF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
              <Laptop className="h-6 w-6 stroke-[2.5]" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">
              Windows & Mac Computers
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Stream live sports and 4K movies directly on your computer. Whether you use Windows or Mac, you can easily watch our IPTV service using popular{" "}
              <Link
                href="/installation"
                className="text-[#2E5BFF] font-semibold hover:text-blue-400 transition-colors"
              >
                IPTV players
              </Link>{" "}
              like VLC or IPTV Smarters Pro.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

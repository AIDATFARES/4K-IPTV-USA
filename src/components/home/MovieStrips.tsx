import Image from "next/image";
import Link from "next/link";

export default function MovieStrips() {
  const channelImages = [
    "efc10d_58769540c3af46e4b1b8373d25053dce_mv2.webp",
    "efc10d_82f6ea18c2494be98c46c59b9e55cf71_mv2.webp",
    "efc10d_c4763bc9523c4fc89ba4e9f22e5ce52d_mv2.webp",
    "efc10d_cf5918f2dcf64cf39fcefe135495cc43_mv2.webp",
    "efc10d_d0631c9b9c3f4be9bd6caef12c4d0694_mv2.webp",
    "efc10d_e83995fe1b33435a982de93f05c82c29_mv2.webp"
  ];

  return (
    <section className="w-full overflow-hidden bg-white py-16 relative flex flex-col gap-6">
      {/* Section Header */}
      <div className="text-center mb-8 px-4 z-20">
        <span className="inline-block py-1 px-4 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB] text-xs font-bold tracking-widest uppercase mb-4">
          Endless Entertainment
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
          THE ULTIMATE <span className="text-[#2563EB]">CINEMATIC</span> EXPERIENCE
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mb-8">
          Explore a massive library of 200,000+ Films & Series. From the latest blockbuster hits to timeless classics, all available instantly in crystal-clear 4K Ultra HD.
        </p>
        <Link 
          href="/channels"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#2563EB] text-black text-sm md:text-base font-medium bg-black/20 hover:bg-[#2563EB]/10 transition-colors duration-300 gap-2"
        >
          View 4K IPTV USA Channel List <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      {/* Top Strip (Right to Left) */}
      <div className="relative flex w-max items-center">
        <div className="flex gap-4 md:gap-6 px-2 md:px-3 animate-marquee" style={{ animationDuration: '30s' }}>
          {[...channelImages, ...channelImages, ...channelImages, ...channelImages, ...channelImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[300px] relative rounded-md overflow-hidden shadow-2xl border border-black/5 hover:scale-105 hover:border-black/30 hover:z-10 transition-all duration-300">
              <Image src={`/channel/${img}`} alt="Media Poster" fill sizes="(max-width: 640px) 140px, (max-width: 1024px) 180px, 200px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>


      
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
    </section>
  );
}

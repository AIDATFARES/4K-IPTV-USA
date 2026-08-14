import HeroSection from "@/components/home/HeroSection";
import Link from "next/link";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

import TopFeatureBar from "@/components/home/TopFeatureBar";
import BrandMarquee from "@/components/home/BrandMarquee";
import MovieStrips from "@/components/home/MovieStrips";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition & Brand Marquee */}
      <BrandMarquee />
      <TopFeatureBar />
      <MovieStrips />
      <BrandMarquee 
        imagesFolder="dawryate" 
        images={["1235.jpg", "1727368362913.jpg", "1727368362933.jpg", "1727368362971.jpg", "ff25.jpg"]}
        cardClassName="flex-shrink-0 w-[140px] h-[200px] md:w-[200px] md:h-[280px] relative rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-[#141624] hover:border-[#d32f2f]/60 transition-all duration-300 group"
        imageClassName="object-cover rounded-xl"
      />

      {/* Channel & Installation Quick Links */}
      <div className="w-full bg-[#0c0f0f] py-6 px-4 text-center border-t border-white/5 relative z-20">
        <p className="text-center text-sm md:text-base text-stone-400 max-w-3xl mx-auto">
          Find the comprehensive <Link className="font-semibold text-[#d32f2f] hover:text-[#f44336]" href="/channels">IPTVDoor Channel List</Link> or navigate to our <Link className="font-semibold text-[#d32f2f] hover:text-[#f44336]" href="/installation">IPTVDoor Installation Guide</Link> for a quick start.
        </p>
      </div>

      <PricingSection />
      <ChannelCategories />

      {/* Device Support & How It Works */}
      <DeviceSupport />
      <HowItWorksSection />

      {/* Info & Articles */}
      <FAQSection />
      <LatestArticlesSection />

      {/* Social Proof & Conversion */}
      <TestimonialsSection />
      <SupportCtaSection />
    </main>
  );
}

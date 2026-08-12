import HeroSection from "@/components/home/HeroSection";
import TopFeatureBar from "@/components/home/TopFeatureBar";
import ChannelCategories from "@/components/home/ChannelCategories";
import DeviceSupport from "@/components/home/DeviceSupport";
import WhyIscreenhdSection from "@/components/home/WhyIscreenhdSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PricingSection from "@/components/home/PricingSection";
import GlobalCoverageSection from "@/components/home/GlobalCoverageSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import LatestArticlesSection from "@/components/home/LatestArticlesSection";
import SupportCtaSection from "@/components/home/SupportCtaSection";

export default function Home() {
  return (
    <main className="flex-col flex min-h-screen">
      {/* 40% Commercial (Split top and bottom) / 60% Informational (Core content) */}
      
      {/* Commercial: Awareness / Hook */}
      <HeroSection />
      
      {/* Informational: Value Proposition & Education (60% of page) */}
      <TopFeatureBar />
      <WhyIscreenhdSection />
      <ChannelCategories />
      <PricingSection />
      <DeviceSupport />
      <HowItWorksSection />
      <GlobalCoverageSection />
      <FAQSection />
      <LatestArticlesSection />

      {/* Commercial: Social Proof & Conversion (Remaining Commercial %) */}
      <TestimonialsSection />
      <SupportCtaSection />
    </main>
  );
}

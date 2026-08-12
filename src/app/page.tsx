import HeroSection from "@/components/home/HeroSection";
import dynamic from "next/dynamic";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};


const TopFeatureBar = dynamic(() => import("@/components/home/TopFeatureBar"));
const ChannelCategories = dynamic(() => import("@/components/home/ChannelCategories"));
const DeviceSupport = dynamic(() => import("@/components/home/DeviceSupport"));
const WhyIscreenhdSection = dynamic(() => import("@/components/home/WhyIscreenhdSection"));
const HowItWorksSection = dynamic(() => import("@/components/home/HowItWorksSection"));
const PricingSection = dynamic(() => import("@/components/home/PricingSection"));
const GlobalCoverageSection = dynamic(() => import("@/components/home/GlobalCoverageSection"));
const TestimonialsSection = dynamic(() => import("@/components/home/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/home/FAQSection"));
const LatestArticlesSection = dynamic(() => import("@/components/home/LatestArticlesSection"));
const SupportCtaSection = dynamic(() => import("@/components/home/SupportCtaSection"));

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

import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  alternates: {
    canonical: "/pricing",
  },
};


export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}

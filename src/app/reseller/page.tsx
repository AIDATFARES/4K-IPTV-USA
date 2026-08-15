import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Become an IPTV Reseller | Start Your IPTV Business - IPTV Fiesta",
  description:
    "Join the IPTV Fiesta Reseller Program. High-margin IPTV reseller panel, custom credit packages, sub-reseller management, and 24/7 dedicated support.",
  alternates: {
    canonical: "/reseller",
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}

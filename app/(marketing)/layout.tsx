import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalyticsEvents from "@/components/analytics/AnalyticsEvents";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <AnalyticsEvents />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

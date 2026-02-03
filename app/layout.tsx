import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stintwell",
  description: "Stintwell builds software tools bringing structure, compliance, and operational discipline to underserved industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}

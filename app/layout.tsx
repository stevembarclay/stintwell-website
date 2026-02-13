import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
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
      <body className={`${inter.variable} ${ibmPlexMono.variable}`}>
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}

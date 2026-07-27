import type { Metadata } from "next";
import { Sora, Geist, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@/components/SpeedInsights";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Konventiv - Die Zukunft der Software-Entwicklung",
  description:
    "Konventiv entwickelt innovative, intelligente Lösungen für die digitale Welt von morgen. Wir bereiten gerade unseren offiziellen Launch vor.",
  keywords: ["KI", "Softwareentwicklung", "AI", "Konventiv", "Digital Transformation"],
};

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-QZE54Z95BV";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${sora.variable} ${geist.variable} ${jetbrainsMono.variable} antialiased bg-background text-on-surface`}
      >
        {children}
        <SpeedInsights />
        <CookieBanner />
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}

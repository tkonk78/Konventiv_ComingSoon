import type { Metadata } from "next";
import { Sora, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konventiv - Die Zukunft der Software-Entwicklung",
  description:
    "Konventiv entwickelt innovative, intelligente Lösungen für die digitale Welt von morgen. Wir bereiten gerade unseren offiziellen Launch vor.",
  keywords: ["KI", "Softwareentwicklung", "AI", "Konventiv", "Digital Transformation"],
};

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
      </body>
    </html>
  );
}

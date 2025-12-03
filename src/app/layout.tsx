import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairsTransitions";
import PageTransition from "@/components/PageTransitions";

// Configuration optimisée
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: 'swap',
  adjustFontFallback: false,
  fallback: ["monospace"], // Explicit fallback
  preload: true,
  timeout: 5000, // Timeout after 5 seconds to prevent hanging
});

export const metadata: Metadata = {
  title: "Epiphane Houehanou",
  description: "Portfolio of Epiphane Houehanou.",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jetbrains.variable} font-mono`}>
      <body >
        <Header/>
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import StairTransition from "@/components/StairsTransitions";
import PageTransition from "@/components/PageTransitions";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
  display: 'swap',
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // Wide range for design flexibility
  variable: "--font-outfit",
  display: 'swap',
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
    <html lang="fr" className={`${jetbrains.variable} ${outfit.variable}`}>
      <body className="font-primary antialiased">
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
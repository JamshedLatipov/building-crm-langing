import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AIProvider } from "@/context/AIContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AIAssistant } from "@/components/AIAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dynamic AI | AI-Driven IT Solutions",
  description:
    "Advanced IT solutions powered by AI. Software, DevOps, Cloud, and Security.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-[#333333]`}
      >
        <AIProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <AIAssistant />
          <Footer />
        </AIProvider>
      </body>
    </html>
  );
}

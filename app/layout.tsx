import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "HEIC to JPG Converter | Next.js Starter",
  description: "A private, browser-only HEIC to JPG converter built with Next.js and crestconvert.",
  metadataBase: new URL("https://crestconvert.com"),
  openGraph: {
    title: "HEIC to JPG Next.js Starter",
    description: "Convert iPhone photos locally in the browser with no uploads.",
    type: "website"
  }
};

export const viewport: Viewport = { themeColor: "#f5f2ea", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

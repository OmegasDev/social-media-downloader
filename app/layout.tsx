import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Media Video Downloader - Fast & Free",
  description: "Download videos from social media instantly. Fast, secure, and free video downloader for all platforms.",
  keywords: "video downloader, social media downloader, free downloader, online video download, Facebook video download, Twitter video download",
  openGraph: {
    title: "Social Media Video Downloader",
    description: "Fast & free social media video downloader for all platforms.",
    url: "https://social-media-video-downloader.netlify.app",
    siteName: "Social Media Video Downloader",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Social Media Video Downloader",
    description: "Fast & free social media video downloader for all platforms.",
  },
  other: {
    "google-site-verification": "mOGqK10s6XJWI8cI8bhr4p3nWkJ_g6ppbLP1iyBtrTo",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


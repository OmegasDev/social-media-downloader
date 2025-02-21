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
  title: "Social Media Video Downloader",
  description: "Download videos from social media easily and for free.",
  keywords: ["video downloader", "social media", "download videos", "free video downloader"],
  openGraph: {
    title: "Social Media Video Downloader",
    description: "Download videos from social media easily and for free.",
    url: "https://social-media-video-downloader.netlify.app",
    siteName: "Social Media Video Downloader",
    images: [
      {
        url: "https://social-media-video-downloader.netlify.app/preview.jpg", // Change this to a real image
        width: 1200,
        height: 630,
        alt: "Preview of Social Media Video Downloader",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Video Downloader",
    description: "Download videos from social media easily and for free.",
    images: ["https://social-media-video-downloader.netlify.app/preview.jpg"], // Change this to a real image
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}



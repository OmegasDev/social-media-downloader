import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ Forces static export for Netlify

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://social-media-video-downloader.netlify.app/",
      lastModified: new Date().toISOString(),
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];
}

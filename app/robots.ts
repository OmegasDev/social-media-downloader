import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ✅ Ensures static export for Netlify

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://social-media-video-downloader.netlify.app/sitemap.xml",
  };
}

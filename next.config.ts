/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ This replaces 'next export'
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  generateRobotsTxt: true, // ✅ Generate robots.txt for SEO
  siteUrl: "https://social-media-video-downloader.netlify.app", // ✅ Your site's URL
};

module.exports = nextConfig;

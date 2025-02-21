/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Ensures static export for Netlify
  trailingSlash: true, // ✅ Helps SEO-friendly URLs
  images: {
    unoptimized: true, // ✅ Ensures static images work
  },
};

export default nextConfig;

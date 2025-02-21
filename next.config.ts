/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Ensures static export
  trailingSlash: true,
  images: {
    unoptimized: true, // ✅ Ensures images work properly in static export
  },
  experimental: {
    appDir: true, // ✅ Enables app router (if needed)
  },
};

module.exports = nextConfig;

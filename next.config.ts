/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ This replaces 'next export'
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

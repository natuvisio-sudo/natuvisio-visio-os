/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enforce strict mode for component stability
  reactStrictMode: true,

  // 1. FIX: Use the modern and secure 'remotePatterns' instead of deprecated 'domains'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // Optional: If images were confined to a specific path structure
        // pathname: '/deb1j92hy/image/upload/**', 
      },
    ],
    // The 'domains' array is now removed entirely.
  },

  // 2. Remove the deprecated 'appDir' and ensure config compatibility with Next 16
  experimental: {
    // The 'appDir' key is now REMOVED as App Router is stable.
    // NOTE: Keep only required experimental keys here if any, otherwise leave 'experimental' empty or remove it.
  },

  // 3. Optional: Add output tracing for Vercel/Docker deployment performance
  // output: 'standalone', 
};

module.exports = nextConfig;
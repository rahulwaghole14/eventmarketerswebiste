/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  // Use relative paths for assets only in production build, not in dev mode
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : undefined,
  // Optimize images for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure proper module resolution
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ensure proper path resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    return config;
  },
}

module.exports = nextConfig



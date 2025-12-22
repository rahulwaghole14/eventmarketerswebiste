/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force webpack instead of turbopack
  webpack: true,
  turbopack: {},
  // Static export configuration
  output: 'export',
  // Use relative paths for assets only in production build, not in dev mode
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : undefined,
  // Trailing slash helps with static file serving
  trailingSlash: true,
  // Optimize images for static export
  images: {
    unoptimized: true, // Required for static export
  },
  // Add base path for static hosting
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  // Ensure proper module resolution
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ensure proper path resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, 'src'),
    };
    
    // Fix for react-icons vendor chunk issue in Next.js 15
    // Disable code splitting for server-side to prevent vendor chunk errors
    if (isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig



import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false;
    return config;
  },
  experimental: {
    workerThreads: false,
  },
};

export default nextConfig;

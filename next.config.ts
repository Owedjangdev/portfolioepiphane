// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // ou 'export' pour un site statique
  // Options supplémentaires ici
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  }
};

export default nextConfig;
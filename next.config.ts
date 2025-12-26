// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // ou 'export' pour un site statique
  // Options supplémentaires ici
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  // Tentative de fix pour "Bus error" (souvent lié à SWC sur certains envs)
  productionBrowserSourceMaps: false,
};

export default nextConfig;
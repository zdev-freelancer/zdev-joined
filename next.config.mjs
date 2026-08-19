/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The design system is driven by CSS variables + Tailwind tokens; no remote images required.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;

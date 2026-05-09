/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — works on GitHub Pages, Vercel, Netlify
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig

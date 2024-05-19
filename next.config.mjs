/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fedskillstest.ct.digital'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
    ignoreDuringBuilds: true,
  },
}

export default nextConfig

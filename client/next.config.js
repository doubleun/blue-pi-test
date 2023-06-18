/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/catalog/coffee',
        permanent: true,
      },
    ]
  },
  output: 'standalone',
  images: {
    domains: ['www.starbucks.co.th'],
  },
}

module.exports = nextConfig

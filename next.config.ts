import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  //reactStrictMode:false //嚴格模式開關
  images: {
    remotePatterns: [{ hostname: 'test.zhihur.com' }],
  },
}

export default nextConfig

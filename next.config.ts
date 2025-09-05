import { withNetlify } from '@netlify/next';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default withNetlify(nextConfig);

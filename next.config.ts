import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(__dirname),
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: '/blog/blog-bfshop',
        destination: '/projects/bfshop',
        permanent: true,
      },
      {
        source: '/blog/bfshop-portal',
        destination: '/projects/bfshop',
        permanent: true,
      },
      {
        source: '/blog/bfshop-portal/:path*',
        destination: '/projects/bfshop',
        permanent: true,
      },
      {
        source: '/blog/bfshop',
        destination: '/projects/bfshop',
        permanent: true,
      },
      {
        source: '/blog/bfshop/ai',
        destination: '/projects/bfshop/logbook/ai',
        permanent: true,
      },
      {
        source: '/blog/bfshop/automation',
        destination: '/projects/bfshop/logbook/automation',
        permanent: true,
      },
      {
        source: '/blog/bfshop/data-foundations',
        destination: '/projects/bfshop/logbook/data-foundations',
        permanent: true,
      },
      {
        source: '/blog/bfshop/development-log',
        destination: '/projects/bfshop/logbook/development-log',
        permanent: true,
      },
      {
        source: '/blog/bfshop/progress-reports',
        destination: '/projects/bfshop/updates',
        permanent: true,
      },
      {
        source: '/blog/bfshop/progress-reports/report-1',
        destination: '/projects/bfshop/updates/report-1',
        permanent: true,
      },
      {
        source: '/blog/bfshop/progress-reports/report-2',
        destination: '/projects/bfshop/updates/report-2',
        permanent: true,
      },
      {
        source: '/blog/bfshop/vertical-slices',
        destination: '/projects/bfshop/logbook/vertical-slices',
        permanent: true,
      },
      {
        source: '/blog/bfshop-overview',
        destination: '/projects/bfshop/overview',
        permanent: true,
      },
      {
        source: '/blog/bfshop-specifications',
        destination: '/projects/bfshop/specifications',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop-1',
        destination: '/projects/bfshop/overview',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop-2',
        destination: '/projects/bfshop/specifications',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/progress-reports',
        destination: '/projects/bfshop/updates',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/progress-reports/report-1',
        destination: '/projects/bfshop/updates/report-1',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/progress-reports/report-2',
        destination: '/projects/bfshop/updates/report-2',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/data-foundations',
        destination: '/projects/bfshop/logbook/data-foundations',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/vertical-slices',
        destination: '/projects/bfshop/logbook/vertical-slices',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/ai',
        destination: '/projects/bfshop/logbook/ai',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/automation',
        destination: '/projects/bfshop/logbook/automation',
        permanent: true,
      },
      {
        source: '/blog/blog-bfshop/development-log',
        destination: '/projects/bfshop/logbook/development-log',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

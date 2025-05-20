/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: 'erp.turbodeliveryapp.com',
            },
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: 'resto.turbodeliveryapp.com',
            },
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: 'customer.turbodeliveryapp.com',
            },
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: 'delivery.turbodeliveryapp.com',
            },
            {
                protocol: process.env.NEXT_PUBLIC_BACKEND_PROTOCOL,
                hostname: 'backend.turbodeliveryapp.com',
            },
        ],
    },
};

module.exports = nextConfig;

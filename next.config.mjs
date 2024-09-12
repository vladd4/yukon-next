import createNextIntlPlugin from "next-intl/plugin";

// Initialize the plugin
const withNextIntl = createNextIntlPlugin();

// Next.js configuration
const nextConfig = {};

// Export the configuration
export default withNextIntl(nextConfig);

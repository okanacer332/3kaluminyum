import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
// Parantez içini boş bırakıyoruz, varsayılan yolları (src/i18n/request.ts) tarasın:
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
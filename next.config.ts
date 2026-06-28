import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
})


/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
  // Single-language site (English only)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
})

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());

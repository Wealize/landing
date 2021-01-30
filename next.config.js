const withPWA = require('next-pwa')
const nextTranslate = require('next-translate')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const nextConfig = {
  env: {
    SENTRY_DSN: process.env.SENTRY_DSN,
    GTM_ID: process.env.GTM_ID
  }
}

module.exports = nextConfig

module.exports = nextTranslate(
  withPWA({
    images: {
      deviceSizes: [
        16,
        32,
        48,
        64,
        96,
        128,
        256,
        384,
        480,
        576,
        768,
        992,
        1366,
        1600
      ],
      domains: ['localhost', 'wlz-landing-assets.s3.eu-central-1.amazonaws.com']
    },
    pwa: {
      disable: process.env.NODE_ENV === 'development',
      dest: 'public'
    }
  })
)

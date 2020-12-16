const withPWA = require('next-pwa')

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

module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public'
  }
})

module.exports = {
  images: {
    deviceSizes: [480, 576, 768, 992, 1366, 1600]
  }
}

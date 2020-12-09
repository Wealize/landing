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

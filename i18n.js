module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
    '/profile': ['profile'],
    '/privacy-legal': ['privacy-legal'],
    '/cookies-policy': ['cookies-policy'],
    '/grants/cdti': ['grants_cdti'],
    '/grants/innovative-sme': ['grants_innovative-sme']
  },
  interpolation: {
    prefix: '${',
    suffix: '}'
  }
}

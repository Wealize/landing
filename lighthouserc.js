module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: ['http://localhost:3000', 'http://localhost:3000/profile'],
      numberOfRuns: 2
    },
    assert: {
      preset: 'lighthouse:pwa'
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}

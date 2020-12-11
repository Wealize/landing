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
      assertions: {
        'categories:performance': ['error', { minScore: 0.85 }],
        'categories:seo': ['error', { minScore: 0.8 }],
        'categories:best-practices': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.8 }]
      }
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}

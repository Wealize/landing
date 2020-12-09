module.exports = {
  ci: {
    collect: {
      /* Add configuration here */
      startServerCommand: 'yarn start',
      startServerReadyPattern: 'ready on',
      url: [
        'http://localhost:3000',
        'http://localhost:3000/profile',
        'http://localhost:3000/contact'
      ],
      numberOfRuns: 2
    },
    assert: {
      assertions: {
        'categories:performance': ['warning', { minScore: 0.9 }],
        'categories:seo': ['warning', { minScore: 0.85 }],
        'categories:best-practices': ['warning', { minScore: 0.9 }],
        'categories:accessibility': ['warning', { minScore: 0.85 }]
      }
    },
    upload: {
      /* Add configuration here */
      target: 'temporary-public-storage'
    }
  }
}

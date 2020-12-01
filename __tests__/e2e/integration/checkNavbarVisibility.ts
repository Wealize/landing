describe('When scrolling, the navigation bar must be hidden or shown', () => {
  before(() => {
    cy.log(`Visiting http://localhost:3000`)
    cy.visit('/')
  })

  it('should show the navigation bar', () => {
    cy.viewport('iphone-xr')
    cy.get('#navbar').should(
      'have.css',
      'background-color',
      'rgb(255, 255, 255)'
    )
    cy.get('[data-cy=navbar-logo-mobile-container]').should(
      'have.css',
      'display',
      'block'
    )
    cy.get('[data-cy=navbar-logo-container]').should(
      'have.css',
      'display',
      'none'
    )

    cy.viewport('macbook-13')
    cy.get('#navbar').should(
      'have.css',
      'background-color',
      'rgb(245, 245, 245)'
    )
    cy.get('[data-cy=navbar-logo-mobile-container]').should(
      'have.css',
      'display',
      'none'
    )
    cy.get('[data-cy=navbar-logo-container]').should(
      'have.css',
      'display',
      'block'
    )
  })

  it('should show/hide the navigation bar when scrolling', () => {
    cy.viewport('iphone-xr')

    cy.get('#navbar').should('have.css', 'transform', 'none')
    cy.scrollTo(0, 50)
    cy.get('#navbar').should(
      'have.css',
      'transform',
      'matrix(1, 0, 0, 1, 0, -72)'
    )
    cy.scrollTo(0, 20)
    cy.get('#navbar').should('have.css', 'transform', 'none')
  })
})

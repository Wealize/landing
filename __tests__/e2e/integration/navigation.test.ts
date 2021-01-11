import {
  HOME_HREF,
  PROFILE_HREF,
  PRIVACY_LEGAL_HREF,
  CDTI_HREF,
  INNOVATION_SME_HREF
} from '../../../src/constants/hrefs'
import {
  GET_IN_TOUCH_HREF
} from '../../../src/constants/contacts'

describe('User want navigate between pages', () => {
  it('Should navigate to home page', () => {
    cy.visit(HOME_HREF)
    cy.viewport('macbook-13')
  })

  describe('User want see profile page', () => {
    it('Should click on profile link', () => {
      cy.get('[data-cy=nav-profile-link]').click({ force: true })
    })

    it('Location should be profile page', () => {
      cy.intercept(PROFILE_HREF, []).as('getProfile')
      cy.wait('@getProfile', { timeout: 15000 })
      cy.location('pathname', { timeout: 15000 }).should('eq', PROFILE_HREF)
    })
  })

  describe('User want see home page when click logo', () => {
    it('Should click on logo link', () => {
      cy.get('[data-cy="navbar-logo-container"]').click({ force: true })
    })

    it('Location should be home page', () => {
      cy.intercept(HOME_HREF, []).as('getHome')
      cy.wait('@getHome', { timeout: 15000 })
      cy.location('pathname', { timeout: 15000 }).should('eq', HOME_HREF)
    })
  })

  describe('User want see privacy page', () => {
    it('Should click on privacy link', () => {
      cy.get('[data-cy="footer-privacy-link"]').click({ force: true })
    })

    it('Location should be privacy page', () => {
      cy.intercept(PRIVACY_LEGAL_HREF, []).as('getPrivacy')
      cy.wait('@getPrivacy', { timeout: 15000 })
      cy.location('pathname', { timeout: 15000 }).should('eq', PRIVACY_LEGAL_HREF)
    })
  })

  describe('User want see CDTI page', () => {
    it('Should click on cdti link', () => {
      cy.visit(HOME_HREF)
      cy.get('[data-cy="footer-cdti-link"]').click({ force: true })
    })

    it('Location should be CDTI page', () => {
      cy.intercept(CDTI_HREF, []).as('getCdti')
      cy.wait('@getCdti', { timeout: 15000 })
      cy.location('pathname', { timeout: 15000 }).should('eq', CDTI_HREF)
    })
  })

  describe('User want see Innovation PYME page', () => {
    it('Should click on innovation pyme link', () => {
      cy.visit(HOME_HREF)
      cy.get('[data-cy="footer-innovation-pyme-link"]').click({ force: true })
    })

    it('Location should be Innovation PYME page', () => {
      cy.intercept(INNOVATION_SME_HREF, []).as('getInnovation')
      cy.wait('@getInnovation', { timeout: 15000 })
      cy.location('pathname', { timeout: 15000 }).should('eq', INNOVATION_SME_HREF)
    })
  })

  describe('User want see get in touch page', () => {
    it('Should click on get in touch link', () => {
      cy.visit(HOME_HREF)
      cy.get('#footer-get-in-touch-button').click({ force: true })
    })

    it('Location should be get in touch page', () => {
      cy.intercept(GET_IN_TOUCH_HREF, []).as('getInTouch')
      cy.wait('@getInTouch', { timeout: 15000 })
      cy.location('href', { timeout: 15000 }).should('eq', GET_IN_TOUCH_HREF)
    })
  })
})

import {
  HOME_HREF,
  PROFILE_HREF,
  PRIVACY_HREF,
  CDTI_HREF,
  INNOVATION_SME_HREF
} from '../../../src/constants/hrefs'
import {
  GET_IN_TOUCH_HREF,
  WORK_WITH_US
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
      cy.location('pathname').should('eq', PROFILE_HREF)
    })
  })

  describe('User want see home page when click logo', () => {
    it('Should click on logo link', () => {
      cy.get('[data-cy="navbar-logo-container"]').click({ force: true })
    })

    it('Location should be home page', () => {
      cy.location('pathname').should('eq', HOME_HREF)
    })
  })

  describe('User want see privacy page', () => {
    it('Should click on privacy link', () => {
      cy.get('footer').scrollIntoView()
      cy.get('[data-cy="footer-privacy-link"]').click({ force: true })
    })

    it('Location should be privacy page', () => {
      cy.location('pathname').should('eq', PRIVACY_HREF)
    })
  })

  describe('User want see CDTI page', () => {
    it('Should click on cdti link', () => {
      cy.get('#nav-return-button').click()
      cy.get('[data-cy="footer-cdti-link"]').click({ force: true })
    })

    it('Location should be CDTI page', () => {
      cy.location('pathname').should('eq', CDTI_HREF)
    })
  })

  describe('User want see Innovation PYME page', () => {
    it('Should click on innovation pyme link', () => {
      cy.get('#nav-return-button').click()
      cy.get('[data-cy="footer-innovation-pyme-link"]').click({ force: true })
    })

    it('Location should be Innovation PYME page', () => {
      cy.location('pathname').should('eq', INNOVATION_SME_HREF)
    })
  })

  describe('User want see get in touch page', () => {
    it('Should click on get in touch link', () => {
      cy.get('#nav-return-button').click()
      cy.get('#footer-get-in-touch-button').click({ force: true })
    })

    it('Location should be get in touch page', () => {
      cy.location('href').should('eq', GET_IN_TOUCH_HREF)
    })
  })

  describe('User want see work with us page', () => {
    it('Should click on work with us link', () => {
      cy.visit(HOME_HREF)
      cy.get('#footer-work-whit-us-button').click({ force: true })
    })

    it('Location should be work with us page', () => {
      cy.location('href').should('eq', WORK_WITH_US)
    })
  })
})

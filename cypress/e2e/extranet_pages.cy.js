describe('Navigation', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  it('Navigate from DD homepage', () => {
    cy.visit('/')
    cy.contains('Affiliates').click()
  })
  it('Navigate with link', () => {
    cy.visit('/affiliates')
  })
})


describe('Affiliate Program Overview Page', () => {
  beforeEach('', () => {
    cy.visit('/affiliates')
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('Page Responsiveness', () => {

  })

  // Header Items
  it('Home Button', () => {
    cy.get('.navbar-nav > :nth-child(1) > .nav-link').click({ force: true })
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.get('.animate__animated > .img-fluid').should('be.visible')
  })
  it('About Button', () => {
    cy.get(':nth-child(2) > .nav-link').click({ force: true })
    cy.url().should('eq', Cypress.config().baseUrl + '/#about')
    cy.get('.chart-h1')
      .and('contain', 'Win')
  })
  it('Pricing Button', () => {
    cy.get(':nth-child(3) > .nav-link').click({ force: true })
    cy.url()
      .should('include', Cypress.config().baseUrl +'/pricing')
    cy.get('.text-dark')
      .should('be.visible')
      .and('contain', 'deliver')
  })


  // Body
  it('Become an Affiliate Button', () => {
    cy.get('.d-flex > .pointer').click({ force: true })
    cy.url('eq', Cypress.config().baseUrl + '/signup')
    cy.get('app-affiliate-signup > .h1').should('contain', 'Sign up')
  })

  it('Become an Affiliate Button', () => {
    cy.get(':nth-child(3) > .btn').click({ force: true })
    cy.url('eq', Cypress.config().baseUrl + '/affiliates/signup')
    cy.get('app-affiliate-signup > .h1').should('contain', 'Sign up')
  })
  it('FAQ', () => {
    // 1st
    cy.get('#collapseOne > .accordion-body > p')
      .should('contain', 'individual')
    // 2nd
    cy.get('#headingTwo > .accordion-button').click()
    cy.get('#collapseTwo > .accordion-body > p')
      .should('contain', 'who registers')
    // 3rd
    cy.get('#headingThree > .accordion-button').click()
    cy.get('#collapseThree > .accordion-body > p')
      .should('contain', 'these simple')
  })

  // Footer
  it('Facebook', () => {
  })
  it('Twitter', () => {
  })
  it('Terms of Use', () => {
    cy.get('.mb-3 > .nav > :nth-child(1) > .nav-item').click()
    cy.get('.card-body > :nth-child(1)')
      .contains('2016')
      .and('be.visible')
    cy.url()
      .should('eq', Cypress.config().baseUrl + '/terms-and-conditions')
  })
  it('Privacy', () => {
    cy.get('.mb-3 > .nav > :nth-child(2) > .nav-item').click()
    cy.get('.card-body > :nth-child(1)')
      .should('be.visible')
      .and('contain', 'Introduction')
  })
  it('About Us', () => {
    cy.get('.col-md-2 > .p-0 > :nth-child(1) > .text-decoration-none > .marg_left').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/#about')
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'Win')
  }) 
  it('FAQs', () => {
    cy.get('.col-md-2 > .p-0 > :nth-child(2) > .text-decoration-none > .marg_left').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/faq')
    cy.get('h2')
      .should('be.visible')
      .and('contain', 'FAQ')
  })
  it('Dental Professional', () => {
    cy.get(':nth-child(3) > .p-0 > :nth-child(1) > .text-decoration-none > .marg_left').click()
    cy.get('.btn')
      .should('contain', 'Join')
  })
  it('Dental Office', () => {
    cy.get(':nth-child(3) > .p-0 > :nth-child(2) > .text-decoration-none > .marg_left').click()
    cy.get('.card1 > .form-label')
      .should('contain', 'Specialty Office')
  })
  it('Copyright Year and Link', () => {
    cy.get('.copyright')
      .should('contain', '2023')
  })
})



// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('ScrollUI', function(){
    cy.scrollTo('top', { ensureScrollable: false })
    cy.wait(1500)
    cy.scrollTo('center', { ensureScrollable: false })
    cy.wait(1000)
    cy.scrollTo('bottom', { ensureScrollable: false })
    cy.wait(1000)
    cy.scrollTo('top', { ensureScrollable: false })
})

Cypress.Commands.add('Landscape', ()=>{
    cy.viewport('ipad-2', 'landscape')
    cy.ScrollUI()
    cy.viewport('ipad-mini', 'landscape')
    cy.ScrollUI()
    cy.viewport('iphone-6', 'landscape')	
    cy.ScrollUI()
    cy.viewport('iphone-6+', 'landscape')	
    cy.ScrollUI()
    cy.viewport('iphone-7', 'landscape')	
    cy.ScrollUI()
    cy.viewport('iphone-8', 'landscape') 	
    cy.ScrollUI()
    cy.viewport('iphone-x', 'landscape')	
    cy.ScrollUI()
    cy.viewport('iphone-xr', 'landscape')	
    cy.ScrollUI()
    cy.viewport('iphone-se2', 'landscape')	
    cy.ScrollUI()
})

Cypress.Commands.add('Portrait', ()=>{
    cy.viewport('ipad-2')
    cy.ScrollUI()
    cy.viewport('ipad-mini')
    cy.ScrollUI()
    cy.viewport('iphone-6')	
    cy.ScrollUI()
    cy.viewport('iphone-6+')	
    cy.ScrollUI()
    cy.viewport('iphone-7')	
    cy.ScrollUI()
    cy.viewport('iphone-8') 	
    cy.ScrollUI()
    cy.viewport('iphone-x')	
    cy.ScrollUI()
    cy.viewport('iphone-xr')	
    cy.ScrollUI()
    cy.viewport('iphone-se2')	
    cy.ScrollUI()
    cy.viewport('macbook-11')	
    cy.ScrollUI()
    cy.viewport('macbook-13')	
    cy.ScrollUI()
    cy.viewport('macbook-15')	
    cy.ScrollUI()
    cy.viewport('macbook-16')	
    cy.ScrollUI()
    cy.viewport('samsung-note9')
    cy.ScrollUI()
    })
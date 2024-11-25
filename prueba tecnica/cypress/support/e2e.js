// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-xpath'
import RegristroPage from '../e2e/page/RegristroPage'
before(() => {
    cy.log("Inicializando el buscador")
    RegristroPage.navigate("https://test-qa.inlaze.com/auth/sign-in")
})
after(() => {
    cy.log("La prueba ha finalizado")
})

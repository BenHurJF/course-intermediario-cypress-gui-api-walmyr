/// <reference types="Cypress" />

const acessToken = Cypress.env('api_createProject', project => {})

Cypress.Commands.add('api_createProject', project => {
    cy.request({
        
    })
})
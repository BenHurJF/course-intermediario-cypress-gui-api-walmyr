/// <reference types="Cypress" />

Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in')

    cy.xpath('//input[@id="user_login"]', {timeout:10000}).type(Cypress.env('user_name')) // OU -> data-qa-selector="login_field"
    cy.xpath('//input[@id="user_password"]', {timeout:10000}).type(Cypress.env('user_password')) // OU -> data-qa-selector="password_field"
    cy.xpath('//input[@type="submit"]').eq(0).click() // OU -> data-qa-selector="sign_in_button"
})

Cypress.Commands.add('logout', () => {
     cy.get('.qa-user-avatar').click()
     cy.contains('Sign out').click()
})

Cypress.Commands.add('gui_createProject', project => {
     cy.visit('/projects/new')

     cy.get('#project_name').type(project.name)
     cy.get('#project_description').type(project.description)
     cy.get('.qa-initialize-with-readme-checkbox').check()
     cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
     cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

     cy.get('.qa-issuable-form-title').type(issue.title)
     cy.get('.qa-issuable-form-description').type(issue.description)
     cy.contains('Submit issue').click() // OU -> .qa-issuable-create-button
})
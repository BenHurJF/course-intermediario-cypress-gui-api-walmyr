/// <reference types="Cypress" />

const faker = require('faker')

describe('Create Issues', () => {
    const issue = {
        title: `issue-${faker.random.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.words(4)
        }
    }

    before(() => {
        cy.login()
        cy.gui_createProject(issue.project)
    })

    it('Successfuly Issues :)', () => {
        cy.gui_createIssue(issue)

        cy.get('.issue-details')
        .should('contain', issue.title)
        .and('contain', issue.description)
    })
})
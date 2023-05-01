//1. Lav en test, som kontrollerer, at brugeren kan tilføje en ny opgave til listen.
describe('Add new project', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#input').click().type('Cypress Test')
    cy.get('#butAdd').click()
    cy.get('.to-do-item .item')
  })
})

//2. Lav en test, som kontrollerer, at brugeren kan fjerne en opgave fra listen.
describe('Delete new project', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#input').click().type('Cypress Test')
    cy.get('#butAdd').click()
    cy.get('.fa-trash').click()
    cy.get('.to-do-item .item').should('not.exist')
  })
})

//3. Lav en test, som kontrollerer, at brugeren kan redigere en eksisterende opgave.
describe('Edit new project', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#input').click().type('Cypress Test')
    cy.get('#butAdd').click()
    cy.get('.fa-edit').click()
    cy.get('.to-do-item .item').type(' Editted {enter}')
  })
})

//4. Lav en test, som kontrollerer, at applikationen kan håndtere tilfældet, hvor brugeren forsøger at tilføje en tom opgave.
describe('Empty new project', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/')
    cy.get('#input').click().type(' ')
    cy.get('#butAdd').click()
    cy.get('.to-do-item .item').should('not.exist')
  })
})


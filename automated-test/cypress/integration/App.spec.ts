describe('My First Test', () => {
  it('Visits my site page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="email-input"]').click().type("first.last@company.xyz")
    cy.get('[data-testid="password-input"]').click().type("123")
    cy.get('[data-testid="submit-btn"]').click()
  })
})
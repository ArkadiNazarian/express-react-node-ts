describe('My First Test', () => {
  it('Visits my site page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-testid="email-input"]').click().type("first.last@company.xyz")
    cy.get('[id^=password-input]').click().type("123")
    cy.get('[id^=submit-button]').click()
  })
})
describe('App', () => {
  it('loads the home page', () => {
    cy.visit('/')
    cy.get('h1').should('be.visible')
  })
})

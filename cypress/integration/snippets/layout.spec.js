describe('snippets page: ', () => {
  // beforeEach(() => {
  before(() => {
    cy.visit('/snippets')
  })

  it('basic layout shoud be visible', () => {
    cy.id('header').should('be.visible')
    cy.id('header-search').should('be.visible')
    cy.id('header-search-icon').should('be.visible')

    cy.id('snippets-content').should('be.visible')
    cy.id('filter-bar').should('be.visible')

    cy.id('footer').should('be.visible')
  })
})

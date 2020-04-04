import { createSelector } from '../utils'

describe('Needs Page', () => {
  beforeEach(() => {
    // Login using custom token
    cy.login()
    // Go to needs page
    cy.visit('/needs')
  })

  describe('Add Need', () => {
    it('creates need when provided a valid name', () => {
      const newNeedTitle = 'Test need'
      cy.get(createSelector('new-need-tile')).click()
      // Type name of new need into input
      cy.get(createSelector('new-need-name')).find('input').type(newNeedTitle)
      // Click on the new need button
      cy.get(createSelector('new-need-create-button')).click()
      // Wait for request to Firebase to add need to return
      cy.wait('@addNeed')
      // Confirm first need tile has title passed to new need input
      cy.get(createSelector('project-tile-name'))
        .first()
        .should('have.text', newNeedTitle)
    })
  })

  describe('Delete Need', () => {
    it('allows project to be deleted by project owner', () => {
      // click on the more button
      cy.get(createSelector('project-tile-more')).first().click()
      cy.get(createSelector('project-tile-delete')).click()
      // Confirm that new project is not available
      cy.get(createSelector('new-project-name')).should('not.exist')
    })
  })
})

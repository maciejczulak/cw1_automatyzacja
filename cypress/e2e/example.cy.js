describe('Example Test Suite', () => {
  it('Visits the example page', () => {
    cy.visit('/'); 
    cy.contains('h1', 'Hello World'); 
  });

});
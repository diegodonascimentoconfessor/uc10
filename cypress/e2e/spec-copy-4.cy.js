describe('Teste E2E simples', () => {
    it('Visitar uma página e verificar o título', () => {
      // Visita a página
      cy.visit('https://www.example.com')
  
      // Verifica se o título da página contém 'Example Domain'
      cy.title().should('include', 'Example Domain')
    })
  })
  
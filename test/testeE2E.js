// eslint-disable-next-line no-undef
describe('Teste E2E simples', () => {
    // eslint-disable-next-line no-undef
    it('Visitar uma página e verificar o título', () => {
      // Visita a página
      // eslint-disable-next-line no-undef
      cy.visit('https://www.example.com')
  
      // Verifica se o título da página contém 'Example Domain'
      // eslint-disable-next-line no-undef
      cy.title().should('include', 'Example Domain')
    })
  })
  
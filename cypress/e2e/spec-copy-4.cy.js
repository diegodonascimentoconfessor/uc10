describe('Teste E2E simples - Visitar GitHub Pages', () => {
  it('Visitar a página e verificar o título', () => {
      // Visita a página
      cy.visit('https://diegodonascimentoconfessor.github.io/teste/')

      // Verifica se o título da página contém 'Calculadora'
      cy.title().should('include', 'Calculadora')

      // Verifica se a página contém o corpo visível
      cy.get('body').should('be.visible')
  })
})

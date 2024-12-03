// Importa a função exibirModeloVeiculo do arquivo app.js
import { exibirModeloVeiculo } from '../app';

// Descrição do conjunto de testes: verifica a integração entre exibirModeloVeiculo() e buscarVeiculoPorId()
describe('Integração entre exibirModeloVeiculo() e buscarVeiculoPorId()', () => {

  // Testa se a função retorna o modelo correto para IDs válidos
  it('deve retornar o modelo correto do veículo para IDs válidos', () => {
    // Testa ID 1
    const modelo1 = exibirModeloVeiculo(1);
    expect(modelo1).toEqual('Civic'); // Espera-se que o modelo seja 'Civic'

    // Testa ID 2
    const modelo2 = exibirModeloVeiculo(2);
    expect(modelo2).toEqual('Corolla'); // Espera-se que o modelo seja 'Corolla'

    // Testa ID 3
    const modelo3 = exibirModeloVeiculo(3);
    expect(modelo3).toEqual('Gol'); // Espera-se que o modelo seja 'Gol'

    // Testa ID 4
    const modelo4 = exibirModeloVeiculo(4);
    expect(modelo4).toEqual('Fiesta'); // Espera-se que o modelo seja 'Fiesta'

    // Testa ID 5
    const modelo5 = exibirModeloVeiculo(5);
    expect(modelo5).toEqual('Onix'); // Espera-se que o modelo seja 'Onix'

    // Testa ID 6
    const modelo6 = exibirModeloVeiculo(6);
    expect(modelo6).toEqual('HB20'); // Espera-se que o modelo seja 'HB20'

    // Testa ID 7
    const modelo7 = exibirModeloVeiculo(7);
    expect(modelo7).toEqual('Ranger'); // Espera-se que o modelo seja 'Ranger'

    // Testa ID 8
    const modelo8 = exibirModeloVeiculo(8);
    expect(modelo8).toEqual('Compass'); // Espera-se que o modelo seja 'Compass'
  });

  // Testa se um erro é lançado para IDs inválidos
  it('deve lançar um erro para IDs inválidos', () => {
    // Testa um ID que não existe (99)
    expect(() => exibirModeloVeiculo(99)).toThrow('Veículo não encontrado');

    // Testa um ID inválido (0)
    expect(() => exibirModeloVeiculo(0)).toThrow('Veículo não encontrado');
  });
});

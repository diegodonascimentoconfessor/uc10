import { exibirModeloVeiculo } from '../app';

describe('Integração entre exibirModeloVeiculo() e buscarVeiculoPorId()', () => {
  it('deve retornar o modelo correto do veículo para IDs válidos', () => {
    const modelo1 = exibirModeloVeiculo(1);
    expect(modelo1).toEqual('Civic');

    const modelo2 = exibirModeloVeiculo(2);
    expect(modelo2).toEqual('Corolla');

    const modelo3 = exibirModeloVeiculo(3);
    expect(modelo3).toEqual('Gol');

    const modelo4 = exibirModeloVeiculo(4);
    expect(modelo4).toEqual('Fiesta');
    const modelo5 = exibirModeloVeiculo(5);
    expect(modelo5).toEqual('Onix');

    const modelo6 = exibirModeloVeiculo(6);
    expect(modelo6).toEqual('HB20');

    const modelo7 = exibirModeloVeiculo(7);
    expect(modelo7).toEqual('Ranger');

    const modelo8 = exibirModeloVeiculo(8);
    expect(modelo8).toEqual('Compass');
  });

  it('deve lançar um erro para IDs inválidos', () => {
    expect(() => exibirModeloVeiculo(99)).toThrow('Veículo não encontrado');
    expect(() => exibirModeloVeiculo(0)).toThrow('Veículo não encontrado');
  });
});

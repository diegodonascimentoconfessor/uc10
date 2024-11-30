const VEICULOS = [
  { id: 1, modelo: 'Civic', marca: 'Honda' },
  { id: 2, modelo: 'Corolla', marca: 'Toyota' },
  { id: 3, modelo: 'Gol', marca: 'Volkswagen' },
  { id: 4, modelo: 'Fiesta', marca: 'Ford' },
  { id: 5, modelo: 'Onix', marca: 'Chevrolet' },
  { id: 6, modelo: 'HB20', marca: 'Hyundai' },
  { id: 7, modelo: 'Ranger', marca: 'Ford' },
  { id: 8, modelo: 'Compass', marca: 'Jeep' }
];

export const buscarVeiculoPorId = (id) => {
  return VEICULOS.find((veiculo) => veiculo.id === id);
};

export const exibirModeloVeiculo = (veiculoId) => {
  const veiculo = buscarVeiculoPorId(veiculoId);
  if (!veiculo) {
    throw new Error('Veículo não encontrado');
  }
  return veiculo.modelo;
};

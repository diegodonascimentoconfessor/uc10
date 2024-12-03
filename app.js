// Lista de veículos disponíveis, cada veículo tem um ID, modelo e marca
const VEICULOS = [
  { id: 1, modelo: 'Civic', marca: 'Honda' },        // Honda Civic
  { id: 2, modelo: 'Corolla', marca: 'Toyota' },    // Toyota Corolla
  { id: 3, modelo: 'Gol', marca: 'Volkswagen' },    // Volkswagen Gol
  { id: 4, modelo: 'Fiesta', marca: 'Ford' },       // Ford Fiesta
  { id: 5, modelo: 'Onix', marca: 'Chevrolet' },    // Chevrolet Onix
  { id: 6, modelo: 'HB20', marca: 'Hyundai' },      // Hyundai HB20
  { id: 7, modelo: 'Ranger', marca: 'Ford' },       // Ford Ranger
  { id: 8, modelo: 'Compass', marca: 'Jeep' }       // Jeep Compass
];

// Função que busca um veículo na lista pelo ID
export const buscarVeiculoPorId = (id) => {
  // Utiliza o método find para procurar o veículo com ID correspondente
  return VEICULOS.find((veiculo) => veiculo.id === id);
};

// Função que exibe o modelo de um veículo com base no ID
export const exibirModeloVeiculo = (veiculoId) => {
  // Chama a função buscarVeiculoPorId para obter o veículo correspondente ao ID
  const veiculo = buscarVeiculoPorId(veiculoId);
  
  // Verifica se o veículo foi encontrado
  if (!veiculo) {
    // Lança um erro caso o veículo não seja encontrado
    throw new Error('Veículo não encontrado');
  }
  
  // Retorna o modelo do veículo encontrado
  return veiculo.modelo;
};

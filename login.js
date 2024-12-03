// Banco de dados simulado
const usuarios = [
  { username: 'admin', password: '1234', role: 'admin' },
  { username: 'user', password: 'password', role: 'user' }
];

// Função de login
export function login(username, password) {
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  if (usuario) {
    return `Login bem-sucedido (${usuario.role})`;
  } else {
    throw new Error('Usuário ou senha inválidos');
  }
}

// Função para obter permissões
export function obterPermissoes(username) {
  const usuario = usuarios.find(u => u.username === username);
  if (!usuario) {
    throw new Error('Usuário não encontrado');
  }

  // Simulação de permissões por papel
  if (usuario.role === 'admin') {
    return ['criar', 'editar', 'excluir'];
  } else if (usuario.role === 'user') {
    return ['visualizar'];
  } else {
    return [];
  }
}


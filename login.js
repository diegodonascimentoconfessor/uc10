// Lista de usuários cadastrados com username e senha
const usuarios = [
  { username: 'admin', password: '1234' }, // Usuário administrador
  { username: 'user', password: 'password' } // Usuário comum
];

// Função de login
function login(username, password) {
  // Busca um usuário na lista que corresponda ao username e password fornecidos
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  
  // Verifica se encontrou um usuário correspondente
  if (usuario) {
    return 'Login bem-sucedido'; // Retorna mensagem de sucesso se as credenciais forem válidas
  } else {
    return 'Usuário ou senha inválidos'; // Retorna mensagem de erro para credenciais inválidas
  }
}

// Exporta a função para uso em outros módulos
export { login };

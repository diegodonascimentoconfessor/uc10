
const usuarios = [
  { username: 'admin', password: '1234' },
  { username: 'user', password: 'password' }
];

// Função de login
function login(username, password) {
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  
  if (usuario) {
    return 'Login bem-sucedido';
  } else {
    return 'Usuário ou senha inválidos';
  }
}

export{login}

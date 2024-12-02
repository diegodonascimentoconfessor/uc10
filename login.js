// login.js

function login(username, password) {
    const usuarioValido = 'admin';
    const senhaValida = '1234';
  
    if (username === usuarioValido && password === senhaValida) {
      return 'Login bem-sucedido';
    } else {
      return 'Usuário ou senha inválidos';
    }
  }
  
 export{login}
  
import { login } from "../login";

describe('Testando a função de login', () => {

  test('Deve retornar "Login bem-sucedido" quando as credenciais estiverem corretas', () => {
    const resultado = login('admin', '1234');
    expect(resultado).toBe('Login bem-sucedido');
  });

  test('Deve retornar "Usuário ou senha inválidos" quando o nome de usuário estiver incorreto', () => {
    const resultado = login('usuarioErrado', '1234');
    expect(resultado).toBe('Usuário ou senha inválidos');
  });

  test('Deve retornar "Usuário ou senha inválidos" quando a senha estiver incorreta', () => {
    const resultado = login('admin', 'senhaErrada');
    expect(resultado).toBe('Usuário ou senha inválidos');
  });

  test('Deve retornar "Usuário ou senha inválidos" quando ambos estiverem incorretos', () => {
    const resultado = login('usuarioErrado', 'senhaErrada');
    expect(resultado).toBe('Usuário ou senha inválidos');
  });
});

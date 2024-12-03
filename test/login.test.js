// Importa a função login do módulo "../login"
import { login } from "../login";

// Suite de testes para verificar o sistema de login
describe('Testando a integração do sistema de login', () => {

  // Testa se o login é bem-sucedido com credenciais corretas
  test('Deve retornar "Login bem-sucedido" quando as credenciais estiverem corretas', () => {
    const resultado = login('admin', '1234'); // Credenciais válidas
    expect(resultado).toBe('Login bem-sucedido'); // Verifica se a mensagem de sucesso é retornada
  });

  // Testa se o login falha quando o nome de usuário está incorreto
  test('Deve retornar "Usuário ou senha inválidos" quando o nome de usuário estiver incorreto', () => {
    const resultado = login('usuarioErrado', '1234'); // Nome de usuário inválido
    expect(resultado).toBe('Usuário ou senha inválidos'); // Verifica se a mensagem de erro é retornada
  });

  // Testa se o login falha quando a senha está incorreta
  test('Deve retornar "Usuário ou senha inválidos" quando a senha estiver incorreta', () => {
    const resultado = login('admin', 'senhaErrada'); // Senha inválida
    expect(resultado).toBe('Usuário ou senha inválidos'); // Verifica se a mensagem de erro é retornada
  });

  // Testa se o login falha quando ambos estão incorretos
  test('Deve retornar "Usuário ou senha inválidos" quando ambos estiverem incorretos', () => {
    const resultado = login('usuarioErrado', 'senhaErrada'); // Nome de usuário e senha inválidos
    expect(resultado).toBe('Usuário ou senha inválidos'); // Verifica se a mensagem de erro é retornada
  });
});

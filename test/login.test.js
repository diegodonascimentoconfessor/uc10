import { login, obterPermissoes } from "../login";

describe('Teste integrado do sistema de login e permissões', () => {
  test('Deve permitir login e retornar permissões corretas para admin', () => {
    const resultadoLogin = login('admin', '1234');
    expect(resultadoLogin).toBe('Login bem-sucedido (admin)');

    const permissoes = obterPermissoes('admin');
    expect(permissoes).toEqual(['criar', 'editar', 'excluir']);
  });

  test('Deve permitir login e retornar permissões corretas para usuário comum', () => {
    const resultadoLogin = login('user', 'password');
    expect(resultadoLogin).toBe('Login bem-sucedido (user)');

    const permissoes = obterPermissoes('user');
    expect(permissoes).toEqual(['visualizar']);
  });

  test('Deve lançar erro ao tentar obter permissões de um usuário inexistente', () => {
    expect(() => obterPermissoes('usuarioInexistente')).toThrow('Usuário não encontrado');
  });

  test('Deve lançar erro ao realizar login com credenciais inválidas', () => {
    expect(() => login('usuarioErrado', 'senhaErrada')).toThrow('Usuário ou senha inválidos');
  });
});

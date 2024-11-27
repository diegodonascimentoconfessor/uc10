
import { contarOcorrencias } from '../retornaocorrencia'; 

describe('Função contarOcorrencias', () => {
    it('deve contar as ocorrências de uma palavra em uma string', () => {
        const str = 'eu gosto de javascript, javascript é legal';
        const palavra = 'javascript';
        const esperado = 2;
        expect(contarOcorrencias(str, palavra)).toBe(esperado);
    });

    it('deve retornar 0 quando a palavra não aparecer na string', () => {
        const str = 'javascript é legal';
        const palavra = 'node';
        const esperado = 0;
        expect(contarOcorrencias(str, palavra)).toBe(esperado);
    });

    it('deve contar as ocorrências ignorando maiúsculas e minúsculas', () => {
        const str = 'Aaa aaa Aaa';
        const palavra = 'aaa';
        const esperado = 3;
        expect(contarOcorrencias(str, palavra)).toBe(esperado);
    });
});

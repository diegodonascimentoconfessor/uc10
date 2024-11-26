// inverterPalavras.test.js
import { inverterPalavras } from '../manipulacaostring'; 

describe('Função inverterPalavras', () => {
    test('deve inverter uma frase curta', () => {
        const frase = "olá mundo";
        const esperado = "mundo olá";
        expect(inverterPalavras(frase)).toBe(esperado);
    });

    test('deve inverter uma frase com várias palavras', () => {
        const frase = "JavaScript é muito legal";
        const esperado = "legal muito é JavaScript";
        expect(inverterPalavras(frase)).toBe(esperado);
    });

    test('deve retornar a mesma palavra se a string tiver uma palavra só', () => {
        const palavra = "dev";
        const esperado = "dev";
        expect(inverterPalavras(palavra)).toBe(esperado);
    });
});

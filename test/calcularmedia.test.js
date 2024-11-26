// calcularMedia.test.js
import { calcularMedia } from '../calcularmedia'; // Ajuste o caminho se necessário

describe('Função calcularMedia', () => {
    test('deve calcular a média de números positivos', () => {
        const array = [1, 2, 3, 4];
        const esperado = 2.5;
        expect(calcularMedia(array)).toBe(esperado);
    });

    test('deve calcular a média de números negativos', () => {
        const array = [-1, -2, -3];
        const esperado = -2;
        expect(calcularMedia(array)).toBe(esperado);
    });

    test('deve retornar NaN para um array vazio', () => {
        const array = [];
        const esperado = NaN;
        expect(calcularMedia(array)).toBe(esperado);
    });
});

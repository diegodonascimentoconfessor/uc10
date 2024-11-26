// somaArray.test.js
import { somaArray } from '../somarelementos'; // Ajuste o caminho se necessário

describe('Função somaArray', () => {
    it('deve retornar a soma de um array de números positivos', () => {
        const array = [1, 2, 3, 4];
        const esperado = 10;
        expect(somaArray(array)).toBe(esperado);
    });

    it('deve retornar a soma de um array com números negativos', () => {
        const array = [-1, 2, 3];
        const esperado = 4;
        expect(somaArray(array)).toBe(esperado);
    });

    it('deve retornar 0 para um array vazio', () => {
        const array = [];
        const esperado = 0;
        expect(somaArray(array)).toBe(esperado);
    });
});

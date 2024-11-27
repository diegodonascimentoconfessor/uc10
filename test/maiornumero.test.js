
import { maiorNumero } from '../maiornumero'; // Ajuste o caminho conforme necessário

describe('Função maiorNumero', () => {
    test('deve retornar o maior número em um array de números positivos', () => {
        const array = [1, 3, 2, 4];
        const esperado = 4;
        expect(maiorNumero(array)).toBe(esperado);
    });

    it('deve retornar o maior número em um array com números negativos', () => {
        const array = [-1, -2, -3];
        const esperado = -1;
        expect(maiorNumero(array)).toBe(esperado);
    });

    it('deve retornar o único número em um array com apenas um número', () => {
        const array = [7];
        const esperado = 7;
        expect(maiorNumero(array)).toBe(esperado);
    });

    it('deve lançar um erro se o array for vazio', () => {
        expect(() => maiorNumero([])).toThrow('O argumento deve ser um array não vazio.');
    });

    it('deve lançar um erro se o argumento não for um array', () => {
        expect(() => maiorNumero(123)).toThrow('O argumento deve ser um array não vazio.');
    });

    it('deve lançar um erro se algum elemento do array não for um número', () => {
        const array = [1, 2, '3'];
        expect(() => maiorNumero(array)).toThrow('Todos os elementos do array devem ser números.');
    });
});

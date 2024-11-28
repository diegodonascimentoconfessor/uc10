
import { calcularMedia } from '../calcularmedia'; 

describe('Função calcularMedia', () => {
    it('deve calcular a média de números positivos', () => {
        const array = [1, 2, 3, 4];
        const esperado = 2.5;
        expect(calcularMedia(array)).toBe(esperado);
    });

    it('deve calcular a média de números negativos', () => {
        const array = [-1, -2, -3];
        const esperado = -2;
        expect(calcularMedia(array)).toBe(esperado);
    });

    it('deve retornar NaN para um array vazio', () => {
        const array = [];
        const esperado = NaN;
        expect(calcularMedia(array)).toBe(esperado);
    });
});

import { soma } from "../soma";

describe('Função soma', () => {
    it('deve retornar a soma de dois números positivos', () => {
        const esperado = 15;
        const retornado = soma(10, 5);

        expect(retornado).toBe(esperado);
    });

    it('deve retornar a soma de um número negativo e um número positivo', () => {
        const esperado = 3;
        const retornado = soma(-2, 5);

        expect(retornado).toBe(esperado);
    });

    it('deve retornar a soma de dois números negativos', () => {
        const esperado = -7;
        const retornado = soma(-3, -4);

        expect(retornado).toBe(esperado);
    });
});

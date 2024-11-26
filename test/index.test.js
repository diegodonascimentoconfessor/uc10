import { salariodesconto, salariototal } from "..";

describe('Cálculo Geral do Salário', () => {
    it('deve retornar o salário total', () => {
        const esperado = 1892;
        const retornado = salariototal(1412, 300, 180);

        expect(retornado).toBe(esperado);
    });

    it('deve descontar o valor do salário', () => {
        const esperado = 2600;
        const retornado = salariodesconto(3000, 400);

        expect(retornado).toBe(esperado);
    });
});

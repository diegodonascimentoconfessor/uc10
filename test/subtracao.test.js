import { subtracao } from "../subtracao";
describe('Função subtração', () => {
    it('deve retornar a subtração de dois números positivos', () => {
        const esperado = 5; 
        const retornado = subtracao(10, 5);

        expect(retornado).toBe(esperado);
    });

    it('deve retornar a subtração de um número negativo de um número positivo', () => {
        const esperado = 15; 
        const retornado = subtracao(10, -5);

        expect(retornado).toBe(esperado);
    });

    it('deve retornar a subtração de dois números negativos', () => {
        const esperado = -2; 
        const retornado = subtracao(-5, -3);

        expect(retornado).toBe(esperado);
    });
});



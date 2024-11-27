
import { numerosPrimos } from '../numeroprimos'

describe('Função numerosPrimos', () => {
    it('deve retornar os números primos até 10', () => {
        const esperado = [2, 3, 5, 7];
        expect(numerosPrimos(10)).toEqual(esperado);
    });

    it('deve retornar os números primos até 30', () => {
        const esperado = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        expect(numerosPrimos(30)).toEqual(esperado);
    });

     it('deve retornar os números primos até 97', () => {
        const esperado = [
            2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
        ];
        expect(numerosPrimos(97)).toEqual(esperado);
    });
});

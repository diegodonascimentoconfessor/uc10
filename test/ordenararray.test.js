
import { ordenarArray } from '../ordenararray'; 

describe('Função ordenarArray', () => {
    it('deve ordenar um array desordenado', () => {
        const arr = [3, 1, 4, 2];
        const esperado = [1, 2, 3, 4];
        expect(ordenarArray(arr)).toEqual(esperado);
    });

    it('deve manter um array já ordenado', () => {
        const arr = [1, 2, 3, 4];
        const esperado = [1, 2, 3, 4];
        expect(ordenarArray(arr)).toEqual(esperado);
    });

    it('deve ordenar um array com números negativos', () => {
        const arr = [3, -1, 4, -2];
        const esperado = [-2, -1, 3, 4];
        expect(ordenarArray(arr)).toEqual(esperado);
    });
});;

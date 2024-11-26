import { ehPar } from "../numeropar";
describe('Função ehPar', () => {
    it('deve retornar true para números positivos pares', () => {
        expect(ehPar(4)).toBe(true); 
    });

    it('deve retornar false para números positivos ímpares', () => {
        expect(ehPar(5)).toBe(false); 
    });

    it('deve retornar true para números negativos pares', () => {
        expect(ehPar(-6)).toBe(true); 
        
    });

    test('deve retornar false para números negativos ímpares', () => {
        expect(ehPar(-7)).toBe(false); 
    });

    it('deve retornar true para o número zero', () => {
        expect(ehPar(0)).toBe(true); 
    });
});

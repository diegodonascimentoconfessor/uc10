import { fatorial } from "../fatorial";

describe('Função fatorial', () => {
    it('deve retornar 6 para o fatorial de 3', () => {
        expect(fatorial(3)).toBe(6); 
    });

    it('deve retornar 120 para o fatorial de 5', () => {
        expect(fatorial(5)).toBe(120); 
    });

    it('deve retornar 1 para o fatorial de 0', () => {
        expect(fatorial(0)).toBe(1); 
    });
});

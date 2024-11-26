import { verificarPalindromo } from "../verificarpalindromo";
describe('Função verificarPalindromo', () => {
    test('deve retornar true para "ana"', () => {
        expect(verificarPalindromo("ana")).toBe(true);
    });

    test('deve retornar true para "radar"', () => {
        expect(verificarPalindromo("radar")).toBe(true);
    });

    test('deve retornar true para "A man a plan a canal Panama"', () => {
        expect(verificarPalindromo("A man a plan a canal Panama")).toBe(true);
    });

    test('deve retornar false para "casa"', () => {
        expect(verificarPalindromo("casa")).toBe(false);
    });
});

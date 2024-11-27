
import { celsiusParaFahrenheit } from '../temperatura'; 

describe('Função celsiusParaFahrenheit', () => {
    it('deve converter 0°C para 32°F', () => {
        const celsius = 0;
        const esperado = 32;
        expect(celsiusParaFahrenheit(celsius)).toBe(esperado);
    });

    it('deve converter 100°C para 212°F', () => {
        const celsius = 100;
        const esperado = 212;
        expect(celsiusParaFahrenheit(celsius)).toBe(esperado);
    });

    it('deve converter -10°C para 14°F', () => {
        const celsius = -10;
        const esperado = 14;
        expect(celsiusParaFahrenheit(celsius)).toBe(esperado);
    });
});

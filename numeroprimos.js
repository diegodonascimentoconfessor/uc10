// funcoes.js (ou outro nome de sua escolha)
export function numerosPrimos(ate) {
    const primos = [];

    // Função para verificar se um número é primo
    const ehPrimo = (num) => {
        if (num <= 1) return false; // 1 e números negativos não são primos
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; // se for divisível por algum número, não é primo
        }
        return true; // caso contrário, é primo
    };

    // Loop para encontrar os números primos até 'ate'
    for (let i = 2; i <= ate; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    return primos;
}

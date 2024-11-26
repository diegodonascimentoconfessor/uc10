export function maiorNumero(array) {
    if (!Array.isArray(array) || array.length === 0) {
        throw new Error('O argumento deve ser um array não vazio.');
    }
    if (!array.every(item => typeof item === 'number')) {
        throw new Error('Todos os elementos do array devem ser números.');
    }
    return Math.max(...array);
}

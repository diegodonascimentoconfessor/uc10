export function verificarPalindromo(texto) {
    const textoNormalizado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    return textoNormalizado === textoNormalizado.split('').reverse().join('');
}

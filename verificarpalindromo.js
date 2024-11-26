function verificarPalindromo(texto) {
    const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove caracteres especiais e espaços
    return textoLimpo === textoLimpo.split('').reverse().join(''); // Verifica se é igual ao reverso
}

export { verificarPalindromo };

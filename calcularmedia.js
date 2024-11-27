
 function calcularMedia(array) {
    if (array.length === 0) {
        return NaN;
    }
    const soma = array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return soma / array.length;
}

export{
    calcularMedia
}
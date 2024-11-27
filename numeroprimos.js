function numerosPrimos(ate) {
    const primos = [];

    const ehPrimo = (num) => {
        if (num <= 1) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true; 
    };

    for (let i = 2; i <= ate; i++) {
        if (ehPrimo(i)) {
            primos.push(i);
        }
    }

    return primos;
}

export{
    numerosPrimos
}
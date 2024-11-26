const salariototal = ( salario, valimentacao,vtransporte) =>{

    return salario+valimentacao +vtransporte
}

console.log(salariototal(1412,300,180))

const salariodesconto=(salario,inss) => {

    return  salario - inss
}
console.log(salariodesconto(1412,150));


export{
    salariototal,
    salariodesconto,
}
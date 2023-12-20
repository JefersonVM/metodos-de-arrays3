const array = [0, 1, 2, 3, 4];

const valorReduce = array.reduce((acumulador, valorAtual, indice, array) => {
    acumulador += valorAtual;
    return acumulador;
}, 10);

console.log(valorReduce);

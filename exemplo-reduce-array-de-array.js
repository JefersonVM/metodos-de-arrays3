const arrayDeArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
];

const valorReduce = arrayDeArray.reduce((acumulador, valorAtual, indice, array) => {
    return acumulador.concat(valorAtual);
}
);

console.log(valorReduce);
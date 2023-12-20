const numeros = [3, 20, 13, 50, 1, 4, 2, 13];


// ordem crescente

numeros.sort((primeiroElemento, segundoElemento) => {
    // if (primeiroElemento < segundoElemento) {
    //     return -1;
    // }

    // if (primeiroElemento > segundoElemento) {
    //     return 1;
    // }

    // return 0;


    //forma correta:

    return primeiroElemento - segundoElemento;
});

console.log(numeros);

// ordem decrescente

numeros.sort((primeiroElemento, segundoElemento) => {
    // if (primeiroElemento < segundoElemento) {
    //     return 1;
    // }

    // if (primeiroElemento > segundoElemento) {
    //     return -1;
    // }

    // return 0;

    //forma correta

    return segundoElemento - primeiroElemento;
});

console.log(numeros);
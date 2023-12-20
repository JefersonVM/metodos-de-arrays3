const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 100];

const maiorNumero = numeros.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}
)

console.log(maiorNumero)
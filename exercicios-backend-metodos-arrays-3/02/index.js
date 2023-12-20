const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Rio Grande do Sul",
]

const maiorString = cidades.reduce((acc, cidade) => {
    return acc.length > cidade.length ? acc : cidade
}
)

console.log(maiorString)

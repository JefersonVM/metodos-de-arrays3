const usuarios = [
    { id: 11, nome: 'Diego', idade: 23 },
    { id: 2, nome: 'Gabriel', idade: 15 },
    { id: 4, nome: 'Lucas', idade: 30 },
    { id: 1, nome: 'Lucas', idade: 30 },
    { id: 123, nome: 'Lucas', idade: 30 },
]

// Ordem crescente por id

usuarios.sort(function (a, b) {
    return a.id - b.id
})

console.log(usuarios)

// Ordem decrescente por id

usuarios.sort(function (a, b) {
    return b.id - a.id
})

console.log(usuarios)

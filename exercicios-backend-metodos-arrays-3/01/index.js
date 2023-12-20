const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera" ];

const ordemCrescente = numeros.sort((a, b) => a - b);

console.log(ordemCrescente);

const ordemDecrescente = numeros.sort((a, b) => b - a);

console.log(ordemDecrescente);

const ordemTamanho = frutas.sort((a, b) => a.length - b.length);

console.log(ordemTamanho);

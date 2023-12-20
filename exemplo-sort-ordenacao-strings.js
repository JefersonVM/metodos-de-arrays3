const pessoas = [
  "João",
  "Maria",
  "Pedro",
  "Ana",
  "Carlos",
  "José",
  "Alberto",
  "Helena",
];

// Ordenação crescente

pessoas.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(pessoas);

// Ordenação decrescente

pessoas.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(pessoas);

const array = [0, 1, 2, 3, 4];

// let somaTotal = array[0];

// for (let i = 1; i < array.length; i++) {
//   const element = array[i];
//   somaTotal += element;
// }

// console.log(somaTotal);

// let somaTotal = 0;

// for (numero of array) {
//   somaTotal += numero;
// }

// console.log(somaTotal);

const somaTotal = array.reduce((acc, curr) => acc + curr, 20);

console.log(somaTotal);

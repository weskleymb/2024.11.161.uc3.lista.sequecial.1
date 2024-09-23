// Faça um algoritmo que peça o raio de um círculo, 
// calcule e mostre sua área.
// area = pi * (raio ** 2)

// definindo a constante prompt
const prompt = require('prompt-sync')();

// pegando o raio do círculo
const raio = parseFloat(prompt('Digite o raio do círculo: '));

// calculando a área do círculo
const area = Math.PI * (raio ** 2);

// mostrando a área do círculo
console.log(`A área do círculo é ${area.toFixed(2)}`);

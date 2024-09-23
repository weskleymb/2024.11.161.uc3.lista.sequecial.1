// Faça um algoritmo que peça a temperatura em graus Fahrenheit, 
// transforme e mostre a temperatura em graus Celsius. 
// (C = 5 * ((F-32) / 9))

// definindo a constante prompt
const prompt = require('prompt-sync')();

// pegando a temperatura em Fahrenheit
const fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));

// calculando a temperatura em Celsius
const celsius = 5 * ((fahrenheit - 32) / 9);

// mostrando a temperatura em Celsius
console.log(`A temperatura em Celsius é: ${celsius.toFixed(2)}`);

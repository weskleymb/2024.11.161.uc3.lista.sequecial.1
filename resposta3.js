// Faça um algoritmo que peça dois números e imprima a soma.

const prompt = require("prompt-sync")();

const numero1 = parseInt(prompt("Informe o numero 1: "));
const numero2 = parseInt(prompt("Informe o numero 2: "));

const soma = numero1 + numero2;

console.log(`A soma dos números é ${soma}`);

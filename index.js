const { X509Certificate } = require("crypto");

const prompt = require("prompt-sync")();

// Leia os três números

var x = parseInt(prompt("Digite o número 1:"));
var y = parseInt(prompt("Digite o número 2:"));
var z = parseInt(prompt("Digite o número 3:"));

// Calcule a soma e a média

soma = x + y + z;
media = soma / 3;


// Mostre na tela o valor da soma e média

console.log("A soma é:", soma);
console.log("A média é:", media);
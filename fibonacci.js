
const num = parseInt(prompt("Digite um número:"));

let a = 0, b = 1;

while (b < num) {
  [a, b] = [b, a + b];
}

if (b === num) {
  console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${num} não pertence à sequência de Fibonacci.`);
}

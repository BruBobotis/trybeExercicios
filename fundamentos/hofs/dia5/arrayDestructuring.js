const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [number1, number2, number3] = primeNumbers;
sum(number1, number3);

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida);

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

const [impar1, impar2, impar3, par1, par2, par3, par4] = numerosPares;
console.log([par1, par2, par3, par4]);
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (numeros of numbers){
//     console.log(numeros);
// }

// var soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma = soma + numbers[index];
// }
// console.log(soma);     

// var soma = 0;
// for (let index = 0; index < numbers.length; index += 1){
//     soma = (soma + numbers[index])/numbers.length;
// }
// console.log(soma.toFixed(2));

// if (soma > 20){
//     console.log("Valor maior que 20")
// }

// else if (soma < 20){
//     console.log("Valor menor que 20")
// }
// else {
//     console.log("Deu erro ai :(")
// }

// for (let index = 0; index < numbers.length; index += 1){
//     let impar = numbers %2 != 0;
//     console.log(impar[index]);
// }

// var nova = [];
// for (let index = 1; index <= 25; index += 1){
//     nova.push(index);
// }
// for (let index = 0; index < nova.length; index += 1) {
//     console.log(nova[index] / 2);
//   };
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let lowerNumber = numbers[0];
for(let index = 1; index < numbers.length; index += 1){
    if (numbers[index] < lowerNumber){
        lowerNumber = numbers[index];
    }
}
console.log(lowerNumber);
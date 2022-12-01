// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));
function imprimeIdade() {
    for (let idade = 30; idade <= 40; idade += 1) {
        //   console.log('Idade dentro do for:', idade)
    }
}
imprimeIdade()

// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
let pessoa = {
    nome: 'Henri',
    idade: 20
}

pessoa.nome = 'Luna',
pessoa.idade = 19;
// Altere essa estrutura para corrigir o erro.
//   console.log('Nome:', pessoa.nome);
//   console.log('Idade:', pessoa.idade);

let favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
// console.log(favoriteFood);

const name = 'Adriana';
const lastName = 'Soares';
// console.log(`Olá ${name} ${lastName}!`);
function soma(a, b) {
    let resultado = a + b;
    return resultado;
}
let a = 3;
let b = 5;
// console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);

// function numeroAleatorio() {
//     return Math.random()
//   }
//   console.log(numeroAleatorio());

let numeroAleatorio = () => Math.random();
// console.log(numeroAleatorio().toFixed(4))

// function hello(nome) {
//     return `Olá, ${nome}!`
//   }
//   let nome = 'Ivan';
//   console.log(hello(nome));

// let hello = (nome) => `Olá, ${nome}!`;
// let nome = 'Ivan';
// console.log(hello(nome));

// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
//   }
//   let nome = 'Ivan';
//   let sobrenome = 'Pires';
//   console.log(nomeCompleto(nome, sobrenome));

let nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`
let nome = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

// let speed = 140;
// let speedCarro = (speed) => (speed >= 120 ? 'Você ultrapassou o limite de velocidade' : 'Você está na velocidade permitida');
// console.log(speedCarro(speed));
const pi = 3.14;
let circleArea = (raio) => {
    const pi = 3.14;
    let area = pi * raio * raio;
    console.log(`Essa é a área do circulo: ${area.toFixed(2)}`);
}
circleArea(3);
circleArea(5);

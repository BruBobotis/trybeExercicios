// const emailListInData = [
//     'roberta@email.com',
//     'paulo@email.com',
//     'anaroberta@email.com',
//     'fabiano@email.com',
//   ];
  
//   // Adicione seu código aqui
// emailListInData.forEach((email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados`);
// })

// const numbers = [19, 21, 30, 3, 45, 22, 15];

// // Adicione seu código aqui
// numbers.find((n) => {
//     console.log (n % 3 === 0 && n % 5 === 0);
// })

// const names = ['João', 'Irene', 'Fernando', 'Maria'];

// // Adicione seu código aqui
// names.find((n) => {
//     console.log(n.length === 5)
// })

// const musicas = [
//     { id: '31031685', title: 'Partita in C moll BWV 997' },
//     { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//     { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
//   ];
//   // Adicione seu código aqui
// const findMusic = musicas.find((n) => {
//     return n.id === '31031685';
// })
// console.log(findMusic);

// const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

// const hasName = (arr, name) => {
//     return arr.some((name2) => name === name2);
// };

// console.log(hasName(names, 'Ana'));
// console.log(hasName(names, 'Pedro'));

// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
// const verifyAges = (array, age) => {
//     return array.every((x) => x.age >= age)
// }
  
//   console.log(verifyAges(people, 18));
//   console.log(verifyAges(people, 14));
const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
const find = pessoas.find((pessoa) => pessoa.nome === 'Aline');
const some = pessoas.some((pessoa) => pessoa.idade > 30);
const every = pessoas.every((pessoa) => pessoa.idade > 30);
console.log(find);
console.log(some);
console.log(every);


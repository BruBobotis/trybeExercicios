const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
//   console.log(`acumulador - acc:`, acc);
//   console.log(`valorAtual - curr:`, curr);
// }, 0);

// valorItens.reduce((acc, curr) => {
//     console.log(`acc:`, acc);
//     console.log(`curr:`, curr);
//     console.log('a soma atual é', acc + curr);
  
//     return acc + curr;
//   }, 0);

const numbers = [50, 85, -30, 3, 15];

numbers.reduce((bigger, number) => bigger > number ? bigger : number);

const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ]
pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
const find = pessoas.find((pessoa) => pessoa.nome === 'Aline');
const some = pessoas.some((pessoa) => pessoa.idade === 30);
const every = pessoas.every((pessoa) => pessoa.idade > 30);
const sort = pessoas.sort((a,b) => a.idade - b.idade);
const map = pessoas.map((pessoa) => pessoa.nome);
const filter = pessoas.filter((pessoa) => pessoa.idade > 30);
const reduce = pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0);

console.log(find);
console.log(some);
console.log(every);
console.log(sort);
console.log(map);
console.log(filter);
console.log(reduce);
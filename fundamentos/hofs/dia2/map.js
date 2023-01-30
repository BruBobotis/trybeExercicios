const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`));
const find = pessoas.find((pessoa) => pessoa.nome === 'Aline');
const some = pessoas.some((pessoa) => pessoa.idade === 30);
const every = pessoas.every((pessoa) => pessoa.idade > 30);
const sort = pessoas.sort((a,b) => a.idade - b.idade);
const map = pessoas.map((pessoa) => pessoa.nome);

console.log(find);
console.log(some);
console.log(every);
console.log(sort);
console.log(map);

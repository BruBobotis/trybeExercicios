// Lista de pessoas com nome e ID
const users = [
  { id: 1, name: 'Moisés' },
  { id: 2, name: 'Satu' },
  { id: 3, name: 'Danilo' },
  { id: 4, name: 'Ander' },
  { id: 5, name: 'Jensen' },
  { id: 6, name: 'Procópio' },
  { id: 7, name: 'Willian' },
  { id: 8, name: 'Rafa' },
  { id: 9, name: 'Oliva' },
  { id: 10, name: 'Djodjo' },
];

// Gerar uma nova lista de pessoas mas apenas com pessoas cujo o ID é par
function evenUsers() {
  // Código aqui...
  const evenIds = users.filter((value) => value.id % 2 === 0);
  return evenIds;
}

const result = evenUsers();
console.log(result);
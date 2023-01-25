const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  // Adicione seu código aqui
emailListInData.forEach((email) => {
  console.log(`O email ${email} está cadastrado em nosso banco de dados`);
})

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui
numbers.find((n) => {
    console.log (n % 3 === 0 && n % 5 === 0);
})

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
names.find((n) => {
    console.log(n.length === 5)
})

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  // Adicione seu código aqui
const findMusic = musicas.find((n) => {
    return n.id === '31031685';
})
console.log(findMusic);
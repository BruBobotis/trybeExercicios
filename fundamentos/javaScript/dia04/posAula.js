// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
// };

// console.log('Bem vinda, ' + info.personagem)

// for (ex in info){
//     console.log(ex);
// }

// for (ex in info){
//     console.log(info[ex]);
// }

// let info2 ={
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };

//   for (let properties in info) {
//     if (
//       properties === 'recorrente' &&
//       info[properties] === 'Sim' &&
//       info2[properties] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[properties] + ' e ' + info2[properties]);
//     }
//   }

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//         {
//             titulo: 'O Pior Dia de Todos',
//             autor: 'Daniela Kopsch',
//             editora: 'Tordesilhas',
//         },
//         {
//             titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//             autor: 'JK Rowling',
//             editora: 'Rocco',
//         }
//     ],
// };

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' é ' + "'" + leitor.livrosFavoritos[0].titulo + "'");

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' Livros favoritos, onde ' + leitor.livrosFavoritos.length + ' é um número gerado automaticamente por código!')

// function contrario(palindromo){
//     for (index in palindromo){
//         if(palindromo[index] != palindromo[(palindromo.length -1) - index]){
//             console.log(false);
//         } else {
//             console.log(true);
//         }
//     }
// }
// contrario('arroz');

// function maior(numeros){
//     let indiceMaior = 0;
//     for (let indice in numeros){
//         if(numeros[indiceMaior] < numeros[indice]){
//             indiceMaior = indice;
//         }
//     }
//     return indiceMaior
// } console.log(maior([2, 3, 6, 7, 10, 1]));

// function menor(numeros){
//     let indiceMenor = 0;
//     for (let indice in numeros){
//         if(numeros[indiceMenor] > numeros[indice]){
//             indiceMenor = indice;
//         }
//     }
//     return indiceMenor
// } console.log(menor([2, 4, 6, 7, 10, 0, -3]));

// function maisCarac(caracteres){
//     let maisCarac = caracteres[0];
//     for (indice in caracteres){
//         if(maisCarac.length < caracteres[indice].length){
//             maisCarac = caracteres[indice];
//         }
//     }
//     return maisCarac;
// } console.log(maisCarac(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// function repeat(numeros) {
//     let repetido = 0;
//     let numero = 0;
//     let indexNumero = 0;
//     for (index in numeros){
//         let verificaNumero = numeros[index];
//         for (index2 in numeros){
//             if (verificaNumero === numeros[index2]){
//                 numero += 1;
//             }
//         }
//         if (numero > repetido){
//             repetido = numero;
//             indexNumero = index;
//         }
//         numero = 0;
//     }
//     return numeros[indexNumero];
// }
// console.log(repeat([2, 3, 2, 5, 8, 2, 3]));

function somaTudo(numeros){
    let total = 0;
    for (index = 1; index <= numeros; index += 1){
        total = total + index;
    }
    return total;
}
console.log(somaTudo(5));

// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1){
//     fatorial *= index;
//     console.log(fatorial);
// }

// let word = 'tryber';
// let teste = '';
// for (let index = 0; index < word.length; index += 1){
//         teste += word[word.length - 1 -index]
// }
// console.log(teste);

let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);
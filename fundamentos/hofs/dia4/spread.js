// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Lichia', 'Ameixa', 'Morango', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Goiaba', 'Figo', 'Mexerica'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  const returnFruits = [
    ... fruit, 
    ... additional]
  return returnFruits;  
};

console.log(fruitSalad(specialFruit, additionalItens));
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for (index in names){
    console.log('Olá ' + names[index]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (farofa in car) {
    console.log(farofa+":", car[farofa]);
}
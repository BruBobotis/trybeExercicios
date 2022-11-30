function soma(a,b){
    return(a + b)
}
function subtracao(a,b){
    return(a - b)
}
function multiplicacao(a,b){
    return(a * b)
}
function divisao(a,b){
    return(a / b)
}
function modulo(a,b){
    return(a % b)
}
console.log(soma(3,5));
console.log(subtracao(5,3));
console.log(multiplicacao(3,5));
console.log(divisao(3,5));
console.log(modulo(3,5));

function maiorNum(firstNumber, secondNumber){
    if (firstNumber > secondNumber){
        console.log('O número ' + firstNumber + ' é maior que ' + secondNumber);
    }else if (firstNumber < secondNumber){
        console.log('O número ' + secondNumber + ' é maior que ' + firstNumber);
    }else {
        console.log('Os números são iguais!');
    }
}

maiorNum(20,47)
maiorNum(243,57)
maiorNum(69,69)

function maiorNumber(firstNumber, secondNumber, thirdNumber){
    if (firstNumber > secondNumber && firstNumber > thirdNumber){
         console.log('O número ' + firstNumber + ' é maior que ' + secondNumber + ' e ' + thirdNumber);
    }else if (secondNumber > firstNumber && secondNumber > thirdNumber){
        console.log('O número ' + secondNumber + ' é maior que ' + firstNumber + ' e ' + thirdNumber);
    }else if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
        console.log('O número ' + thirdNumber + ' é maior que ' + firstNumber + ' e ' + secondNumber);
    }else {
        return 'Os números são iguais!'
    }   
}
maiorNumber(20,30,40);
maiorNumber(40,30,20);
maiorNumber(20,40,30);
maiorNumber(30,30,40);
maiorNumber(30,30,30);

function cafe(pingado){
    if(pingado > 0){
        console.log('Valor Positivo');
    }else if (pingado < 0){
        console.log('Valor Negativo');
    }else {
        console.log('O valor é zero');
    }
}
cafe(3);
cafe(-4);
cafe(0);

function triangulo(angA, angB, angC){
    let somaAngulos = angA + angB + angC;
    let positAngulos = angA > 0 && angB > 0 && angC > 0;
    if (positAngulos == true){
        if(somaAngulos === 180){
            console.log(true);
        }else {
            console.log(false);
        }
    }else {
        console.log('Ângulos Invalidos!');
    }
}
triangulo(40,60,80);
triangulo(30,60,80);
triangulo(-40,60,80);
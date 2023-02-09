// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
const resolvedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            resolve(randomNumber);
        }, 1000);
    });

const rejectedPromise = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = generateRandomNumber();
            reject(new Error(`O número ${randomNumber} é inválido.`));
        }, 1000);
    });

const randomPromise = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = generateRandomNumber();
        if (randomNumber %2 === 0) {
            resolve(randomNumber);
        } else {
            reject(new Error(`O número ${randomNumber} não é valido pois não é um número par`))
        }
    }, 1000);
    });
    
// resolvedPromise().then((resolved) => {
//     console.log(`O número aleatório gerado foi ${resolved}`)
// });

// rejectedPromise()
//     .then((rejected) => {
//     console.log(`Erro o número gerado ${rejected}`)
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

randomPromise()
    .then((resolved) => {
        console.log(`Promise resolvida. O número gerado é par: ${resolved}`)
    }).catch(error => {
        console.log(error.message);
    }) .finally(() => {
        console.log('Fim da execução da segunda promise.')
    });
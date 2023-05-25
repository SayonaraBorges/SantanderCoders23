const input = require('readline-sync')

const numero_sorteado = 5

// const numero = input.question('Qual numero voce escolhe? ') 
// input ler como String

//convertendo para numero
let numero = Number(input.question('Qual numero voce escolhe? '))

// console.log(numero, typeof numero)

// if(numero === numero_sorteado){
//     console.log('Você acertou!')
// } else{
//     console.log('Você errou!')
// }

while(numero !== numero_sorteado){
    console.log('Voce errou o numero. Tente novamente...')
    numero = Number(input.question('Qual numero voce escolhe? '))
}

console.log('Voce acertou!')



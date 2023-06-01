const input = require('readline-sync')

let num = 1
let soma = 0

while(num != 0){

    num = Number(input.question('Informe um numero: '))
    
    soma = soma + num

}

console.log(soma)

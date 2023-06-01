const input = require('readline-sync')

let f = Number(input.question('Informe a temperatura em Fahrenheit (F) '))
    
let c = ((f-32)*5)/9

console.log(`${f} em Fahrenheit é igual a ${parseInt(c)} em graus Cesius`)




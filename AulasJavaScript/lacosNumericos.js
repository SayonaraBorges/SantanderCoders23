const input = require('readline-sync')

for(let i =0; i <6; i++){
    console.log('Repetição', i)
}

for(let j =5; j >=0; j--){
    console.log('Repetição', j)
}

console.clear()

let nota
let soma=0

for(let i =1; i <=3; i++){
    nota = Number(input.question(`Informe a nota ${i} do aluno: `)) 
    //entre crases para pegar outro tipo de dado ${}
    soma = soma + nota
}
console.log(`A media do aluno é ${soma/3}.`)


const input = require('readline-sync')

let pontuacaoSuspeito = 0

let resp = ' '

function respParaPontos(resp){
    if(resp == 'SIM'){
        return pontuacaoSuspeito = pontuacaoSuspeito + 1
    }
}

console.log('---- INVESTIGAÇÃO CRIMINAL ----')

console.log('--Responda apenas [SIM - NAO]--')

// if(resp !== 'SIM' || resp !== 'NAO' || resp == ''){
//     console.log('As respostas devem ser apenas [SIM - NAO]!')
// }

resp = input.question('Mora perto da vitima? ').toUpperCase()

respParaPontos(resp)

resp = input.question('Ja trabalhou com a vitima? ').toUpperCase()

respParaPontos(resp)

resp = input.question('Telefonou para a vitima? ').toUpperCase()

respParaPontos(resp)

resp = input.question('Esteve no local do crime? ').toUpperCase()

respParaPontos(resp)

resp = input.question('Devia para a vitima? ').toUpperCase()

console.log(respParaPontos(resp))


if(pontuacaoSuspeito == 5){
    console.log('Assassino!')
}else if(pontuacaoSuspeito <5 && pontuacaoSuspeito >=3){
    console.log('Cumplice!')
}else if(pontuacaoSuspeito == 2){
    console.log('Suspeito!')
}else if(pontuacaoSuspeito<2){
    console.log('Liberado!')
}
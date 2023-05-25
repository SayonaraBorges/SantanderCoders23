function saudacao(){
    console.log('Olá, seja bem-vindo ao curso de JavaScript!!!')

}

saudacao()

console.clear()

function saudacao(nome, curso='HTML e CSS', escola, professor){
    console.log(`Olá ${nome}! Seja bem-vinda ao curso de ${curso} da ${escola}, com professor ${professor} :D`)
}

saudacao('Sayonara Borges', 'JavaScript', 'Ada', 'Walisson Silva')

console.clear()

// function soma(num1, num2){
//     console.log('Soma =', num1+num2)
// }
// soma(10,20)

function soma(num1, num2){
    return num1+num2
}

const resultado = soma(10, 20)

console.log('Média = ',resultado/2)
console.log('- - - Jokenpo - - -')

const input = require('readline-sync')

let continuar = 'S'

while(continuar === 'S'){

const jogada1 = Number(input.question('Jogador 1 - Faca sua jogada: [1] Pedra | [2] Papel | [3] Tesoura '))
const jogada2 = Number(input.question('Jogador 2 - Faca sua jogada: [1] Pedra | [2] Papel | [3] Tesoura '))

if(jogada1 == 1 && jogada2 == 2){
    console.log('Jogador 2 Venceu! PAPEL ganha de PEDRA. ')
}else if(jogada1 == 2 && jogada2 ==3){
    console.log('Jogador 2 Venceu! TESOURA ganha de PAPEL. ')
}else if(jogada1 == 3 && jogada2 ==1){
    console.log('Jogador 2 Venceu! PEDRA ganha de TESOURA. ')
}else if(jogada1 == 2 && jogada2 == 1){
    console.log('Jogador 1 Venceu! PAPEL ganha de PEDRA. ')
}else if(jogada1 == 3 && jogada2 ==2){
    console.log('Jogador 1 Venceu! TESOURA ganha de PAPEL. ')
}else if(jogada1 == 1 && jogada2 ==3){
    console.log('Jogador 1 Venceu! PEDRA ganha de TESOURA. ')
}else if( jogada1 == jogada2){
    console.log('Empate! Joguem novamente!')
}

continuar = ((input.question('Jogar novamente? [ S | N ]'))).toUpperCase();

}

const input = require('readline-sync')

console.log()


for(let i =0; i<4; i++ ){
    const x = parseFloat(input.question('Informe um numero entre 0-100: '));

    if(x>=0 && x<=25 ){
        console.log(`Entrada: ${x} | Saída: [0, 25]`)
    } else if(x>25 && x<=50){
        console.log(`Entrada: ${x} | Saída: (25, 50]`)
    } else if(x>50 && x<=75){
        console.log(`Entrada: ${x} | Saída: (50, 75]`)
    } else if(x>75 && x<=100){
        console.log(`Entrada: ${x} | Saída: (75, 100]`)
    }else {
        console.log('Fora de intervalo')
    }
}



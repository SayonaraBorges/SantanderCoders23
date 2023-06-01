
const arrayA = [3, 2, 6]

const arrayB = [5, 3, 4]

let soma = 0

function produtoEscalar(){
    for(let i=0; i <3; i++){
        soma = soma + (arrayA[i]*arrayB[i])
    }

    return soma
}

console.log(produtoEscalar())
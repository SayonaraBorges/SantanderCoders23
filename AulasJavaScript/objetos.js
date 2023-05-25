let pessoa = {
    nome: 'Sayonara', //nome = chave do objeto
    idade: 31
}

console.log(pessoa)

console.log(pessoa['nome'])
console.log(pessoa.idade)

pessoa.altura = 1.74

console.clear()

console.log(pessoa)

console.clear()

pessoa.estadoCivil = 'Divorciada'

console.log(pessoa)

delete pessoa.estadoCivil

console.log(pessoa)

console.clear()

for (let chave in pessoa){
    console.log(chave)
}



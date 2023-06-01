const input = require('readline-sync')

let resp = 0

let pessoa = {
    nome: '',
    idade: 0,
    email: '',
    cpf: '',
}

let cadastrados = []

function novoCadastro(){
    pessoa.nome = input.question('Informe o nome: ')
    pessoa.idade = Number(input.question('Informe a idade: '))
    pessoa.email = input.question('Informe o email: ')
    pessoa.cpf = input.question('Informe o CPF: ')
    cadastrados.push(pessoa)
    return console.log('Cadastro realizado com suscesso!')
}

while(resp != 3){
    resp = Number(input.question('Digite 1-Cadastrar novo usuario; 2-Imprimir usuarios cadastrados; 3-Sair '))

    if(resp == 1){
       novoCadastro()
    }
    if(resp == 2){
        console.log(cadastrados.length)
    }
}

console.log('Programa encerrado!')
// COERÇÃO (CONVERSÃO) DE TIPOS

//COERÇÃO EXPLÍCITA - manual

const num =10
console.log(num, typeof num)

const numEmFormatoDeString = String(num)
console.log(numEmFormatoDeString, typeof numEmFormatoDeString)

console.log(Number('123456'))
console.log(parseFloat('2323.24'))
console.log(parseInt(2.5))
console.log(Boolean(0))
console.log(Boolean(2))

console.clear()

//COERÇÃO IMPLÍCITA - automática

console.log('10' + 1) //concatena
console.log('10' - 1) //converte e realiza a operação
console.log(10 * '3') //converte e realiza a operação
console.log(10 * 'abcd') //NaN - Not a Number

//outros exemplos
let n = 1+'1'

n=n-1

console.log(n)
console.log(2+3+4+'5')
console.log('5'+2+3+4)
console.log('10'-'4'-'3'-2+'5')







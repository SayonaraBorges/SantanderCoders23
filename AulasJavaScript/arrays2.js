const arr1 = ['A', 'B', 'C', 'D', 'E']
let arr2 = []

console.log(arr1.slice(0,2)) //pega ate o indice-1
console.log(arr1.slice(2)) //do indice 2 em diante

console.clear()

console.log('Antes de adicionar: ', arr2)

arr2.push('F', 'G', 'H', 'I')
//adiciona elementos na ordem, ou seja, no final
console.log('Depois de adicionar: ', arr2)

console.clear()

arr2.unshift('e')

console.log('Depois de adicionar com unshift: ', arr2)

console.clear()

const elementoRemovido = arr2.pop()
//remove ultimo elemento
console.log('Depois de remover com pop: ', arr2)
console.log('Elemento removido ', elementoRemovido)

arr2.shift()
//remove o primeiro elemento
console.log('Depois de remover com shift: ', arr2)

console.clear()

console.log(arr2.concat(arr1))

let indiceDoElemento = arr2.indexOf('G')
console.log(indiceDoElemento)

console.clear()

let arr3 = ['a', 'b', 'a', 'c', 'd', 'a', 'f', 'a']

console.log(arr3.indexOf('d'))
console.log(arr3.lastIndexOf('a'))

console.clear()

console.log(arr1.includes('F')) //contém?

console.clear()

console.log('Array1:           ', arr1)
console.log('Array1 invertido: ', arr1.reverse())



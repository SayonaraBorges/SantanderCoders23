let arr = ['Sayonara', 31, 1.74, true]

console.log(arr)

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])

console.log('Tamanho do array: ',arr.length)

console.clear()

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

console.clear()

for(let elemento of arr){
    console.log(elemento)
}

console.clear()

for(let indice in arr){
    console.log(indice, arr[indice])
}
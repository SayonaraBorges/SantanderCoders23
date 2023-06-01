const input = require('readline-sync')

const x1 = Number(input.question("Digite a coordenada x do primeiro ponto: "));
const y1 = Number(input.question("Digite a coordenada y do primeiro ponto: "));
const x2 = Number(input.question("Digite a coordenada x do segundo ponto: "));
const y2 = Number(input.question("Digite a coordenada y do segundo ponto: "));

const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(`A distância euclidiana entre os pontos (${x1},${y1}) e (${x2},${y2}) é ${distancia.toFixed(4)}`);
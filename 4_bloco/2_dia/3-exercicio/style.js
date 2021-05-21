let numeros = [10, 52, 9, 12, 13, 70, 19, 24, 63, 99];
let soma = 0;

for(let index = 0; index < numeros.length; index += 1) {
 soma += numeros[index];
}

let media = soma / numeros.length

console.log(media)
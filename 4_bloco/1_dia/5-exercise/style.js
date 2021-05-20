// EXERCÍCIO 5

let a = -60;
let b = -60;
let c = 60;
let somaABC = a + b + c;

if (somaABC < 0) {
    console.log("Erro fatal") 
} else if(somaABC > 0 && somaABC == 180) {
    console.log(true);
} else if(somaABC > 0 && somaABC != 180) {
    console.log(false);
}
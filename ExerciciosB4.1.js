// ============================ DIA 4.1 - PRIMEIROS PASSOS =========================================== //

// 1)Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b , definidas no começo 
// com os valores que serão operados.

// 1.1) Adição

const Sum = (a, b) => {
  return a + b;
}

// 1.2) Subtração

const Subtraction = (a, b) => {
  return a - b;
}

// 1.3) Multiplicação 

const Multiplication = (a, b) => {
  return a * b;
}

// 1.4) Divisão

const Division = (a, b) => {
  return a * b;
}

// 1.5) Módulo 

const Module = (a, b) => {
  return a % b;
}


// 2) Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.

const TernaryBiggestNumber = (a, b) => {
  return a > b ? a : b;
}

// 3) Faça um programa que retorne o maior de três números. 
// Defina no começo do programa três constantes com os valores que serão comparados.

const IfBiggestNumber = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// 4) Faça um programa que, dado um valor definido numa constante,
// retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const isValue = (value) => {
  if(value > 0) {
    return  'O valor é positivo'
  } else if (value < 0) {
    return 'O valor é negativo'
  } else return 'O valor é zero'
}

// 5) 
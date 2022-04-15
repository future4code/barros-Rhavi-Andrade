// interpretação de código:
// exercicio 1: 
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
// // false
// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
// //false
// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado)
// //false
// console.log("d. ", typeof resultado)
// //boolean?

// //exercicio 2


// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// //primeiroNumerosegundoNumero
// //o prompt vai guardar o numero como STRING, e a soma de 2 STRINGS é a concatenação das duas, ou seja, se a pessoa digitar 2 e 10, a variavel soma vai mostrar 210.

// //exercicio 3
// /* mudando para:
// let primeiroNumero = parseInt(prompt("digite um numero!"))
// let segundoNumero = parseInt(prompt("digite um numero!"))

// const soma = primeiroNumero + segundoNumero
// */

// // escrita de código:
//1
// const suaIdade = parseInt(prompt("digite a sua idade"))
// const idadeAmigo = parseInt(prompt("qual a idade do seu melhor amigo"))

// console.log("Sua idade é maior do que a do seu melhor amigo?")
// console.log(suaIdade > idadeAmigo)

// console.log(suaIdade - idadeAmigo)

// //2 
// let numeroPar = parseInt(prompt("digite um numero PAR"))
// console.log(numeroPar % 2)

// //c) todo numero par vai ter % 2 = 0
// //d) todo numero IMPAR vai ter % 2 = 1

// //3 

// const suaIdade3 = parseInt(prompt("digite sua idade novamente"))

// let suaIdade3Meses = suaIdade3 * 12
// let suaIdade3Dias = suaIdade3 * 365
// let suaIdade3Horas = suaIdade * (365 * 24)

// console.log("sua idade em meses:", suaIdade3Meses)
// console.log("sua idade em dias:", suaIdade3Dias)
// console.log("sua idade em horas:", suaIdade3Horas)

// //4

// const num1 = parseInt(prompt("digite um numero aleatório"))
// const num2 = parseInt(prompt("digite outro numero aleatório"))

// console.log("O primeiro numero é maior que o segundo?", num1 > num2)
// console.log("O primeiro numero é igual ao segundo?", num1 == num2)
// console.log("O primeiro numero é divisivel pelo segundo?", (num1 / num2))
// console.log("O segundo numero é divisivel pelo segundo?", (num2 / num1))


//challenge
//1)
let X
let grauC = parseInt(prompt("digite uma temperatura em C"))
let grauF = (grauC * (9 / 5)) + 32
let grauK = grauC + 273.15
console.log("77 graus Fahrenheit são", ((77 - 32) * (5 / 9)) + 273.15, "Kelvin")

console.log("80 graus Celcius são", (80 * (9 / 5) + 32), "graus Fahrenheit")

//console.log("30 graus celcius são", (30 * (9 / 5) + 32), "graus Fahrenheit", "e", (30 - 32) * (5 / 9) + 273.15, "Kelvin")

console.log(grauC, "graus celcius são", (grauC * (9 / 5) + 32), "graus Fahrenheit", "e", (grauC + 273.15, "Kelvin"))

console.log(grauC, "graus celcius são", grauF, "graus fahrenheit e", grauK, "Kelvin")

//2)

let contaDeLuz = 280 * 0.05
console.log("a conta de luz é de ", contaDeLuz, "reais")
console.log("a conta de luz com deconto é de", contaDeLuz * 0.85, "reais")

//3
//a)

console.log("20lbs equivalem a ", (20 / 2.205), "kilogramas")

//b) 

console.log("10.5 oz quivalem a", (10.5 / 35, 274), "kilogramas")

//c) 
console.log("100mi equivalem a", (100 * 1609), "metros")

//d)
console.log("50ft equivalem a", (50 * 3.281), "metros")

//e)
console.log("103.56gal equivalem a", (103.56 * 4.546), "litros")

//f)

console.log("450xic equivalem a", (450 * 0.15), "litros")

//g)

let gal = parseInt(prompt("digite galões para converter em Litros"))

console.log(gal, "litros equivalem a", (gal * 4.546), "litros")
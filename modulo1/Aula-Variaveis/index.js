//exercicio 1

// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

/* vai aparecer no console:
10
10, 5
*/

//exercicio 2

// let a = 10
// let b = 20
// c = a
// b = c
// a = b

// console.log(a, b, c)
/* vai aparecer no console:
10, 10, 10
*/

//exercicio 3

// let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t / p} por hora`)


/* a variavel p deveria se chamar horasTrabalhoDia
a variavel t deveria se chamar dinheiroDia
*/



//1
let nome
let idade

console.log(typeof (nome))
console.log(typeof (idade))

nome = prompt("qual seu nome?")
idade = prompt("quantos anos você tem?")
console.log(typeof (nome))
console.log(typeof (idade))

console.log("olá", nome, "você tem", idade, "anos!")

//2a
let roupaAzul = true
let tenisBranco = false
let oculosArranhado = true
//2b
console.log("você está usando roupa azul hoje?", roupaAzul)
console.log("você tem um tênis branco?", tenisBranco)
console.log("seu óculos tá todo zuado?", oculosArranhado)


//3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores
let c
c = b
b = a
a = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10


let Z = prompt("digite um numero")
let Y = prompt("digite outro numero")
let X
X = Z + Y
W = Z * Y

console.log("a soma dos dois numeros é", X)
console.log("o produto dos dois numeros é", W)


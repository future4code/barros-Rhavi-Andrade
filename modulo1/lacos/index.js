//exercicios de interpretação de código:
//1
// o código está rodando um loop que adiciona 1 ao valor de i, e o soma com o valor "valor" até que i seja maior que 5. ( 0+0, 0+1, 1+2, 3+3, 6+4) e o valor impresso no console é 10.

//2 a) 19 21 23 25 27 30
// b) sim, o for é suficiente, para imprimir o index do array, precisa colocar: console.log(lista.indexOf(numero)) dentro do for

//3:

// se o usuario digitar 4:
// *
// **
// ***
// ****



//exercícios de escrita de código:
//1
// let bichinhos = Number(prompt("quantos pets você tem?"))
// let pets = []
// if (bichinhos == 0) {
//     console.log("que pena, você pode adotar um pet!")
// }
// else {
//     let i = 0
//     while (i < bichinhos) {
//         pets.push(prompt(`Digite o nome do ${i + 1}° pet`))
//         i++
//     }
//     console.log(pets)
// }


// //2
// const arrayOriginal = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let b of arrayOriginal) {
//     console.log(b)
// }

// for (let b of arrayOriginal) {
//     console.log(b / 10)
// }


// let novoArray = []
// for (numero of arrayOriginal) {

//     if (numero % 2 == 0) {
//         novoArray.push(numero)
//     }

// }
// console.log(novoArray);

// let arrayEspelho = []
// for (numero of arrayOriginal) {
//     arrayEspelho.push(`o elemento do index ${arrayOriginal.indexOf(numero)} é ${numero}`)
// }
// console.log(arrayEspelho);

// let max = arrayOriginal[0]
// for (numero of arrayOriginal) {
//     if (numero >= max) {
//         max = numero
//     }

// }
// let min = arrayOriginal[0]
// for (numero of arrayOriginal) {
//     if (numero <= min) {
//         min = numero
//     }

// }
// console.log(`o maior numero do array é ${max} e o menor é ${min}`);
// OU 
//console.log(`o maior número do array é ${Math.max(...arrayOriginal)} e o menor é ${Math.min(...arrayOriginal)}`)

// DESAFIO:

let numPensando = Number(prompt("PLAYER1: escolha um numero para ser adivinhado pelo PLAYER2"))
let numChute
let i = 1
while (numChute != numPensando) {

    numChute = Number(prompt("PLAYER2: Chute um numero!"))
    if (numChute < numPensando) {
        console.log(`O numero chutado foi: ${numChute}`)
        console.log("Errou! o numero é maior!")
    }
    if (numChute > numPensando) {
        console.log(`O numero chutado foi: ${numChute}`)
        console.log("Errou! o numero é menor!")

    }
    if (numChute == numPensando) {
        console.log(`O numero chutado foi: ${numChute}`)
        console.log(`Acertou!!!
        O numero de tentativas foi: ${i}`)
    }
    i = i + 1
}
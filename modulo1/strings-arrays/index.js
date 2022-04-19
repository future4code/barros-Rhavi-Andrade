// // Exercícios de interpratação de código:
// // 1)
// let array
// console.log('a. ', array)
// // a. undefined
// array = null
// console.log('b. ', array)
// // b. null
// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// //c. 11
// let i = 0
// console.log('d. ', array[i])
// //d. 3
// array[i + 1] = 19
// console.log('e. ', array)
// //e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
// const valor = array[i + 6]
// console.log('f. ', valor)
// //f. 9 (ou talvez erro? uma const pode ser parte de um array? e se o array mudar?)

// // 2)
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// SUBI NUM ONIBUS EM MIRRROCOS 28


// //1)
// let emailDoUsuario = prompt("digite seu e-mail")
// let nomeDoUsuario = prompt("Digite seu nome")
// if (emailDoUsuario.includes("@")) {
//     console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o) ${nomeDoUsuario}`)

// }
// else (console.log("e-mail inválido"))

// //2)
// let comidasFavoritas = ["strogonoffe", "pesto", "pizza", "lasanha", "hamburguer"]

// //a)
// console.log(comidasFavoritas)

// //b)
// console.log(`estas são as minhas comidas preferidas: \n ${comidasFavoritas[0]} \n ${comidasFavoritas[1]} \n ${comidasFavoritas[2]} \n ${comidasFavoritas[3]} \n ${comidasFavoritas[4]}`)

// //c)
// comidasFavoritas[1] = prompt("Qual a sua comida favorita?")
// console.log(comidasFavoritas)

//3) 
//a) 

let listaDeTarefas = []

//b)
let tarefa1 = prompt("Digite a primeira tarefa do dia")
listaDeTarefas.push(tarefa1)
let tarefa2 = prompt("Digite a segunda tarefa do dia")
listaDeTarefas.push(tarefa2)
let tarefa3 = prompt("Digite a terceira tarefa do dia")
listaDeTarefas.push(tarefa3)
//c)
console.log(listaDeTarefas)
//d) 
listaDeTarefas.splice(parseInt(prompt("digite qual das tarefas já foi concluida"), 1))
console.log(listaDeTarefas)
//bateria do notebook acabando :( esqueci o carregador no trabalho
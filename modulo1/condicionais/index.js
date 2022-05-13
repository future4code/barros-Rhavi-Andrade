// exercícios de interpretação de código:
// 1)
// a) o codigo pede um numero para o usuario, transforma o que o usuario digitou em um numero, caso tenha sido uma string, depois verificar se o resto da divisão do numero por 2 é 0. se for, digita passou no teste, se não for, digita não passou no tsete.

//     b) todos os numeros pares tem resto de divisão por 2 = 0, exceto 0.
// c) todos os numeros impares.

// 2) a) o cogido serve para que a pessoa digite a fruta, e o programa retorna o preço específico para aquela fruta.
//     b) o preço da fruta macã é R$ 2.25
// c) acredito que o preço seria colocado em 5.5 pelo usuario ter digitado pêra, mas logo em seguida seria mudado para 5, pois sem o break o codigo também rodaria o default. no final o programa diria que o preço é 5.

// 3) a) a primeira linha garante que o que o usuario digitou é transformado em numero.
//     b) se digitar 10, a mensagem vai ser "Essa mensagem é secreta!!!" 
// se digitar - 10, o console vai mostrar um erro, pois mensagem não foi declarado.

//     c) haverá erro caso o usuario digite um numero menor que 0, porque a variavel mensagem foi declarada apenas no escopo do if, e não no escopo global.


//exercícios de escrita de código:
//1)

// let idade = Number(prompt("Digite a sua idade"))

// if (idade >= 18) {
//     console.log("você pode dirigir");
// }
// else {
//     console.log("você não pode dirigir");
// }

//2)
//a) 
// let turno = prompt("Digite o turno da sua aula (M, V ou N)")
// turnoUpper = turno.toUpperCase()
// if (turnoUpper == 'M') {
//     console.log("Bom dia!");
// }
// if (turnoUpper == 'V') {
//     console.log("Boa tarde!");
// }
// if (turnoUpper == 'N') {
//     console.log("Boa noite!!");
// }



//3) 
// let idadeSwitchCase = (prompt("Digite o turno da sua aula (M, V ou N), again"))
// idadeSwitchCaseUpper = idadeSwitchCase.toUpperCase()
// switch (idadeSwitchCaseUpper) {
//     case 'M':
//         console.log("Bom dia!case");
//         break

//     case 'V':
//         console.log("Boa tarde!case");
//         break

//     case 'N':
//         console.log("Boa noite!case");
//         break
// }

//4)

// const filmeGenero = prompt("Qual o genero do filme escolhido?")
// const filmePreco = Number(prompt("qual o preço do ingresso?"))

// filmeGeneroUpper = filmeGenero.toUpperCase()
// if (filmeGeneroUpper === "FANTASIA" && filmePreco <= 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :( ")
// }

// DESAFIO

//1)
// const filmeGenero = prompt("Qual o genero do filme escolhido?")
// const filmePreco = Number(prompt("qual o preço do ingresso?"))

// filmeGeneroUpper = filmeGenero.toUpperCase()
// if (filmeGeneroUpper === "FANTASIA" && filmePreco <= 15) {
//     let lanchinho = prompt("Qual lanchinho você vai levar?")

//     console.log("Bom filme!")
//     console.log(`Aproveite seu${lanchinho}!`)
// } else {
//     console.log("Escolha outro filme :( ")
// }
//2)
// tabela de preços:
let semiFinais = [1320, 880, 550, 220]
let desTerceiro = [660, 440, 330, 170]
let final = [1980, 1320, 880, 330]




let nomeCompleto = prompt("Digite seu nome Completo")
let tipoJogo = prompt(`Digite o tipo de jogo:
IN = Internacional
DO = Doméstico`)
let etapaJogo = prompt(`Digite a etapa do jogo:
SF = Semi-Final
DT = Decisão de terceiro lugar
FI = Final`)

let valorUnitario




if (tipoJogo === "DO") {
    tipoJogo = "Doméstico"
}


let categoria = prompt(`Digite a Categoria: 1 a 4`)
let numIngresso = Number(prompt("Digite a quantidade de ingressos"))


if (etapaJogo === "SF") {
    valorUnitario = semiFinais[categoria - 1]
}
if (etapaJogo === "DT") {
    valorUnitario = desTerceiro[categoria - 1]
}
if (etapaJogo === "FI") {
    valorUnitario = final[categoria - 1]
}

let dollar = "R$"

if (tipoJogo === "IN") {
    let tipoJogo = "Internacional"
    valorUnitario = valorUnitario / 4.1
    dollar = "$"
}
let valorTotal = valorUnitario * numIngresso




console.log(`
   ---Dados da Compra---
Nome do cliente:${nomeCompleto}
Tipo do jogo:${tipoJogo}
Etapa do jogo:${etapaJogo}
Categoria: ${categoria}
Quantidade de ingressos: ${numIngresso}
-----Valores-----
Valor do Ingresso: ${dollar}${valorUnitario}
Valor total: ${dollar}${valorTotal}`)
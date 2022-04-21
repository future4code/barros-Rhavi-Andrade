//exercicios de interpretação de código
//1.)

//a)
//10
//50

//b no console não apareceria nada, mas o computador fez o calculo, só não mostrou ou guardou o resultado em lugar nenhum.

//2)
//a) esta função verifica se existe a palavra cenoura, com maiuscula ou minuscula (transofrmando tudo em minuscula antes de verificar), e retorna true se tiver.

//b)
//i.true
//ii.true
//iii.true


// //1)a)
// identificacao = function () {
//     console.log("Eu sou Rhavi, tenho 31 anos, moro em Belo Horuzonte, e sou estudante")
// }

// identificacao()
// //b)

// identiInfo = function (nome, idade, endereco, profissao) {
//     console.log(`Olá, eu sou o(a) ${nome}, tenho ${idade}, moro em ${endereco}, e sou ${profissao}`)
// }

// console.log(identiInfo("Rhavi", 32, "BH", "tecnico de informatica"))

// //2
// //a)
// invocarResultado = function (num1, parametro2) {
//     return num1 + parametro2
// }
// console.log(invocarResultado(10, 5))
// //b

// comparacao = function (num3, num4) {
//     return num3 >= num4
// }

// console.log(comparacao(10, 42))

// //c
// isPar = function (num5) {
//     return num5 % 2 == 0
// }
// console.log(isPar(5))

// //d
// stringLenguetiMaisucula = function (string1) {
//     let respostaArray = [string1.length, string1.toUpperCase()]
//     return console.log(respostaArray)

// }

// stringLenguetiMaisucula("helena esta dormindo")

// //3.)

// let numerator1 = parseInt(prompt("Digite um numero"))
// let numerator2 = parseInt(prompt("Digite outro numero"))

// somarFunc = function (num1, num2) {
//     return num1 + num2
// }
// diferencaFunc = function (num1, num2) {
//     return num1 - num2
// }
// multiplicaFunc = function (num1, num2) {
//     return num1 * num2
// }
// divisaFunc = function (num1, num2) {
//     return num1 / num2
// }

// console.log(somarFunc(numerator1, numerator2), diferencaFunc(numerator1, numerator2), multiplicaFunc(numerator1, numerator2), divisaFunc(numerator1, numerator2))


//                  **DESAFIOS**

//1 


// nomdafunc = function (parametro) {
//     return console.log(parametro)
// }

// nomedafunc = (parametro) => {
//     return console.log(parametro)
//}

arrowfunk1 = (parametro) => console.log(parametro)

arrowfunk2 = (val1, val2) => {
    let soma = val1 + val2
    return arrowfunk1(soma)
}

arrowfunk2(10, 32)


//2

pythagoraFunk = (cateto1, cateto2) => {
    let hipoteFunk = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2))
    return hipoteFunk
}
console.log(pythagoraFunk(3, 4))






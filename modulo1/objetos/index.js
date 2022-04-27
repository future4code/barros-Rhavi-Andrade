//Exercícios de interpretação de código

//1:
//a)
//Matheus Nachtergaele
//Virginia Cavendish
//canal: "Globo"
//horario: "14h"

/* const filme = {
    nome: "Auto da Compadecida",
    ano: 2000,
    elenco: [
        "Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
        "Virginia Cavendish"
    ],
    transmissoesHoje: [
        { canal: "Telecine", horario: "21h" },
        { canal: "Canal Brasil", horario: "19h" },
        { canal: "Globo", horario: "14h" }
    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
 */

//a)
// nome: "Juca"
// idade: 3
// raca: "SRD"
// nome: "Juba"
// idade: 3
// raca: "SRD"
// nome: "Jubo"
// idade: 3
// raca: "SRD"
//b) a sintaxe dos ... herda todas os atributos e métodos do objeto nomeado

//3 a)
// false
// undefined

// b) o valor undefined foi impresso porque o objeto PESSOA não tem o atributo chamado altura

//Exercícios de escrita de código:

// const pessoa = {
//     nome: "Renato",
//     apelidos: ["Chub", "Cabo Pecanha", "Chubstancias Eternas"]
// }

// function nomesApelidos(objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
// }

// nomesApelidos(pessoa)

// //b) 

// const pessoa2 = {
//     ...pessoa,
//     apelidos: ["Pai da Helena", "Crakudo das bike", "primo do Tuta"]
// }

// nomesApelidos(pessoa2)

//2)

// const dog = {
//     nome: "Appa",
//     idade: 1,
//     profissao: "destruidor profissional de brinquedos"

// }

// const pato = {
//     nome: "patolino",
//     idade: 84,
//     profissao: "caçador de coelhos",
// }

// function criadorDeArray(objeto) {
//     info = [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
//     return console.log(info);
// }

// criadorDeArray(pato)
// criadorDeArray(dog)


//3) 

const carrinho = []

let fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
let fruta2 = {
    nome: "Maçã",
    disponibilidade: true
}
let fruta3 = {
    nome: "Uva",
    disponibilidade: true
}

function botaCarrinho(fruta) {
    carrinho.push(fruta)
}

botaCarrinho(fruta1)
botaCarrinho(fruta2)
botaCarrinho(fruta3)

console.log(carrinho);

//DESAFIO:

// const questionario = {
//     nome: "",
//     idade: "",
//     profissao: "",
// }

// function perguntas(objeto) {
//     questionario.nome = prompt("what is your name?")
//     questionario.idade = prompt("what is your age?")
//     questionario.profissao = prompt("what is your job?")
// }

// perguntas(questionario)
// console.log(questionario);
// console.log(typeof (questionario))

//2

// const filme1 = {
//     nome: "Wizard of Oz",
//     lancamento: 2008,
// }
// const filme2 = {
//     nome: "Ironman",
//     lancamento: 2008,
// }

// function filmeCompara(nome1, nome2) {
//     console.log(nome1.lancamento < nome2.lancamento)
//     console.log(nome1.lancamento == nome2.lancamento)
// }

// filmeCompara(filme1, filme2)


//3
function comprou(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade

}

comprou(fruta1)

console.log(fruta1)
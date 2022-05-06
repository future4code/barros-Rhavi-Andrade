// exercicios de interpretação de código
//1 a) vai imprimir um outro array com as mesmas características do primeiro

//2 a) vai imprimir um array com apenas os nomes do primeiro array

//3 a) vai imprimir um array novo com os itens do objeto que não tem "chijo" 



//1
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//a
const dogNome = pets.map((pets) => {
    return pets.nome
})
console.log(dogNome);

//b
const dogSalsicha = pets.filter((item, index, array) => {
    return item.raca == "Salsicha"
})
console.log(dogSalsicha);

//c

const poodle = pets.filter((item, index, array) => {
    return item.raca == "Poodle"

})

console.log(poodle)
const poodleMessage = poodle.map((nome, index, array) => {
    console.log(`você ${nome}`)
})

//???


//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a
const nomeLista = produtos.map((produtos) => {
    return produtos.nome
})
console.log(nomeLista)
//b

function desconto(produtoDesconto,)
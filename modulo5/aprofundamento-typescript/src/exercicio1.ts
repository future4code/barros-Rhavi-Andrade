
let meuNumero: number | string = 30 // usamos | para o valor ser number ou string


type Pessoa = { nome: string, idade: number, corFavorita: string }


enum corFavorita { cinza = "cinza", brancoEscuro = "Branco Escuro", brancoClaro = "Branco Claro" }

const cachorro: Pessoa = { nome: "Appa", idade: 2, corFavorita: "cinza" }
const primo: Pessoa = { nome: "Chub", idade: 37, corFavorita: corFavorita.brancoClaro }



console.table(primo)
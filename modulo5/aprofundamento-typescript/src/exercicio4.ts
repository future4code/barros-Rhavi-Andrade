type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// para transpilar usaremos o comando tsc exercicio4.ts no terminal

// sim, se estiver na pasta src teremos que mudar os parametros no arquivo tsconfig.json

// sim, o comando tsc sem parametros converte todos os arquivos .ts em js.
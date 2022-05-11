// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    //return array.reverse()

    //desafio
    let novoArray = []
    for (let i = array.length - 1; i >= 0; i--) {

        novoArray.push(array[i]);

    }
    return novoArray

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //return array.sort(function (a, b) { return a - b })

    //desafio
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                var x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
        }
    }
    return array
}



// EXERCÍCIO 04
function retornaNumerosPares(array) {
    /* const pares = array.filter(numero => numero % 2 == 0)
    return pares */

    //desafio
    arrayPar = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayPar.push(array[i])
        }


    }
    return arrayPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    arrayElevado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            arrayElevado.push(array[i] ** 2)
        }
    }
    return arrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let x = 0
    for (let i = 0; i < array.length; i++) {

        if (array[i] > x)
            x = array[i]
    }
    return x
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

    banana = {
        maiorNumero: "",
        maiorDivisivelPorMenor: "",
        diferenca: "",
    }
    let menorNumero
    if (num1 > num2) {
        banana.maiorNumero = num1
        menorNumero = num2
    }
    else {
        banana.maiorNumero = num2
        menorNumero = num1
    }
    if (banana.maiorNumero % menorNumero == 0) {
        banana.maiorDivisivelPorMenor = true
    }
    else { banana.maiorDivisivelPorMenor = false }

    banana.diferenca = banana.maiorNumero - menorNumero

    return banana
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}
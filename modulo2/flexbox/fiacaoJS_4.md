```js
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let numero = 0
  for (let i = 0; i >= arrayDeNumeros.length; i++){
    if (arrayDeNumeros[i] === numeroEscolhido){
      numero++
    }
  }
  if (numero = 0){
    return "Número não encontrado"
  }

  //o site ficou crashando, funcionou no python tutor.
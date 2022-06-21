```js
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    let novoArray = []
    
    let i = 0
for (i = 0; i<animais.length; i++){
  novoArray[i] = animais[i].nome
}
return novoArray

}
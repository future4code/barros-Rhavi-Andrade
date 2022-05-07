/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")
if (confirm("quer começar uma partida nova?")) {
   blackJackAndHookers()
}
else {
   alert("Adeus")
   console.log("O jogo acabou")
   //window.close()

}

function blackJackAndHookers() {


   const player1c1 = comprarCarta()
   const player1c2 = comprarCarta()
   const player2c1 = comprarCarta()
   const player2c2 = comprarCarta()


   somaPlayer = player1c1.valor + player1c2.valor
   somaComputador = player2c1.valor + player2c2.valor

   console.log(`Usuário - Cartas: ${player1c1.texto} ${player1c2.texto} - Pontuação: ${somaPlayer}`)
   console.log(`Computador - Cartas: ${player2c1.texto} ${player2c2.texto} - Pontuação: ${somaComputador}`)

   if (somaPlayer > somaComputador) {
      console.log("O usuário Ganhou!");
   }
   if (somaComputador > somaPlayer) {
      console.log("O computador Ganhou!")
   }
   if (somaComputador == somaPlayer) {
      console.log("Empate!")
   }
}
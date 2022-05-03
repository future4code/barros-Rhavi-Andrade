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
   console.log("Vez do jogador")

   const player1c1 = comprarCarta()
   const player1c2 = comprarCarta()
   const player2c1 = comprarCarta()
   const player2c2 = comprarCarta()
   if ((player1c1.valor == 11) && (player1c2.valor == 11)) {
      blackJackAndHookers()

   }
   else {
      if (confirm(`Suas cartas são:
           ${player1c1.texto} e ${player1c2.texto}
    a carta revelada do computador é:
           ${player2c1.texto}
    deseja comprar mais uma carta?`)) {
         const player1c3 = comprarCarta()
         let playerScore = player1c1.valor + player1c2.valor + player1c3.valor
         console.log(playerScore)
         if (playerScore > 21) {

         }



         if (confirm(`suas cartas são:
       ${player1c1.texto}, ${player1c2.texto} e ${player1c3.texto}
       a carta revelada do computador é:
           ${player2c1.texto}`)) {


         }
      }

   }
}

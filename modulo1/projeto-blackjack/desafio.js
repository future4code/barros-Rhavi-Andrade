// /**
//  * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
//  * 
//  * 
//  * 
//  */

const playerCartas = []
const computerCartas = []
playerCartas.push(comprarCarta())
computerCartas.push(comprarCarta())
computerCartas.push(comprarCarta())
let computerTotal = computerCartas[0].valor + computerCartas[1].valor



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
   playerCartas.push(comprarCarta())
   if (playerCartas[0].valor == 11 && playerCartas[1].valor == 11) {
      alert("dois As, recomeçando a partida")
      location.reload();
   }
   let playerHand = playerCartas.map((carta) => {
      return carta.texto
   })

   let valorCartas = playerCartas.map((carta) => {
      return carta.valor


   })
   let valorPlayer = valorCartas.reduce((partialSum, a) => partialSum + a, 0);


   function computerTurn() {
      while (valorPlayer > computerTotal && valorPlayer < 21) {
         let valorCartasPc = computerCartas.map((carta) => {
            return carta.valor;
         });
         computerTotal = valorCartasPc.reduce((partialSum, a) => partialSum + a, 0);
         computerCartas.push(comprarCarta());
      }
      return computerTotal
   }
   if (valorPlayer == 21) {
      alert("Blackjack! você venceu!")
   }
   if (valorPlayer > 21) {
      alert(`Você estourou, fez ${valorPlayer} pontos!
      O computador fez ${computerTurn()} pontos`);
   }
   if (valorPlayer < 21) {
      if (confirm(`Suas cartas: ${playerHand} TOTAL ${valorPlayer}
        Carta do computador: ${computerCartas[0].texto}
        Deseja comprar mais uma?`)) {
         blackJackAndHookers();
      }
      else {
         if (computerTurn() > valorPlayer && computerTurn() <= 21) {
            alert(
               `O COMPUTADOR FEZ ${computerTotal} PONTOS, VOCÊ PERDEU COM ${valorPlayer}`
            );
         }
      }

   }
   if (computerTurn() == valorPlayer) {
      alert(`Empataram, ambos fizeram ${computerTotal}`)
   }
   if (computerTurn() < valorPlayer) {
      alert(
         `O computador fez ${computerTotal} pontos, você venceu com ${valorPlayer}`
      );
   }
   if (computerTurn() > 21 && valorPlayer < 21) {
      alert(
         `O computador estourou e fez ${valorPc} pontos. você fez ${valorPlayer}`)
   }
}
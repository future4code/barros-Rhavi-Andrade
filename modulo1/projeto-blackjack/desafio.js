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
   playerCartas.push(comprarCarta())
   computerCartas.push(comprarCarta())
   //8


   while ((playerCartas[0].valor == 11) && (playerCartas[1].valor == 11)) {
      playerCartas[0] = comprarCarta()
      playerCartas[1] = comprarCarta()
      console.log("loopei")
   }

   while (confirm("Deseja comprar mais uma carta?")) {
      console.log("a carta do computador é")
      console.log(computerCartas[0].texto)
      const mesaplayer = playerCartas.map(() => {
         return console.log(playerCartas.texto)
      }

   }
}



// const playerCartas = []
// playerCartas.push(comprarCarta())

// playerCartas.push(comprarCarta())

// console.log(playerCartas)

// console.log(playerCartas[0].valor)
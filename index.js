let player = {
name: "Adeola",
chips: 1000
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
messageEl = document.getElementById('message-el')
sumEl = document.getElementById('sum-el')
cardsEl = document.getElementById('cards-el')
playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ": $" + player.chips
//create a function, getRandomCard(),that always return 5
function getRandomCard(){
var y = Math.floor(Math.random() *11) + 1
if (y === 1){
return 11
} else if (y > 10){
return 10
}
else {
return y
}
}

function startGame() {
let isAlive = true
let firstCard = getRandomCard() 
let secondCard = getRandomCard() 
cards = [firstCard, secondCard]
sum = firstCard + secondCard
  renderGame()
}


function renderGame() {
  //render out firstCard and secondCard
  cardsEl.textContent = "Cards: "
  //render out all the cards we have
for (let i=0; i < cards.length; i++){
cardsEl.textContent +=cards[i] + " "
}

  sumEl.textContent = "Sum: " + sum
  
  if (sum <= 20) {
    message = "Would you like to draw a new card"
    isAlive = true
    hasBlackJack = false
  } else if (sum === 21) {
    message = "Congratulations! You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
if (isAlive === true && hasBlackJack === false){
  let thirdCard = getRandomCard()
 sum +=thirdCard
  cards.push(thirdCard);
  console.log(cards)
  renderGame()
  }
}


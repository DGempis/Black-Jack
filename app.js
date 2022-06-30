// Cards Variables
let firstCard = 3
let secondCard = 11
let thirdCard = 5
let cards = []

// Blackjack Booleans
let hasBlackJack = false
let isAlive = false

// All Variables <-> HTML assigned
let messageEl = document.getElementById("message-ele") // Want to play a round?
let cardsEl = document.getElementById("cards-ele") // Cards:
let sumEl = document.getElementById("sum-ele")     // Sum: 
let startBtn = document.getElementById("start-ele")
let newCardBtn = document.getElementById("new-card-ele")

message = ""

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    sumEl.textContent += sum
    renderGame()
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber > 10){
    return 10
} else if (randomNumber === 1){
    return 11
} else {
    return randomNumber
}
}

function newCard(){
    let thirdCard = randomCard()
    cards.push(thirdCard)
    cardsEl.textContent += cards[i] + " "
    sum += thirdCard
    sumEl.textContent = `Sum: ${sum}`

    if (sum < 21){
        hasBlackJack = false
        isAlive = true
        message = "Do you want to draw another card?"
    } else if (sum <= 21){
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else {
        hasBlackJack = false
        message = "You lose."
    }
    messageEl.textContent = message
}

function renderGame(){
    for (i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21){
        hasBlackJack = false
        isAlive = true
        message = "Do you want to draw another card?"
    } else if (sum <= 21){
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else {
        hasBlackJack = false
        message = "You lose."
    }
    messageEl.textContent = message
}

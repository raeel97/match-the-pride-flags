document.addEventListener('DOMContentLoaded', () => {

const cardList = [
    { name: 'pride-flag', img: '../images/pride-flag.png' }, 
    { name: 'pride-flag', img: '../images/pride-flag.png' }, 
    { name: 'bi-flag', img: '../images/bi-flag.png' }, 
    { name: 'bi-flag', img: '../images/bi-flag.png' }, 
    { name: 'intersex-flag', img: '../images/intersex-flag.png' },
    { name: 'intersex-flag', img: '../images/intersex-flag.png' },
    { name: 'asexual-flag', img: '../images/asexual-flag.png' }, 
    { name: 'asexual-flag', img: '../images/asexual-flag.png' }, 
    { name: 'pansexual-flag', img: '../images/pansexual-flag.png' },
    { name: 'pansexual-flag', img: '../images/pansexual-flag.png' },  
    { name: 'trans-flag', img: '../images/trans-flag.png' },
    { name: 'trans-flag', img: '../images/trans-flag.png' },
]

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// Create card layout 
function createBoard(){
    for (let i = 0; i < cardList.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', './assets/images/blank.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
    }
}
// Check cards for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosenId[0] === cardsChosenId[1]){
        alert('You found a match')
        cards[OptionOneId].setAttribute('src', './assets/images/matched.png')
        cards[OptionTwoId].setAttribute('src', './assets/images/matched.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[OptionOneId].setAttribute('src', './assets/images/blank.png')
        cards[OptionTwoId].setAttribute('src', './assets/images/blank.png')
        alert('Sorry try again!')
    } 
    cardsChosen = []
    cardsChosenId = []
    resultDisplay
}
// Create flip function to flip cards
function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardList[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardList[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }  
}


createBoard()
})


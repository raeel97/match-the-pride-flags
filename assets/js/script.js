document.addEventListener('DOMContentLoaded', () => {

const cardList = [
    { name: 'pride-flag', img: './assets/images/pride-flag.png' }, 
    { name: 'pride-flag', img: './assets/images/pride-flag.png' }, 
    { name: 'bi-flag', img: './assets/images/bi-flag.png' }, 
    { name: 'bi-flag', img: './assets/images/bi-flag.png' }, 
    { name: 'intersex-flag', img: './assets/images/intersex-flag.png' },
    { name: 'intersex-flag', img: './assets/images/intersex-flag.png' },
    { name: 'asexual-flag', img: './assets/images/asexual-flag.png' }, 
    { name: 'asexual-flag', img: './assets/images/asexual-flag.png' }, 
    { name: 'pansexual-flag', img: './assets/images/pansexual-flag.png' },
    { name: 'pansexual-flag', img: './assets/images/pansexual-flag.png' },  
    { name: 'trans-flag', img: './assets/images/trans-flag.png' },
    { name: 'trans-flag', img: './assets/images/trans-flag.png' },
]
cardList.sort(() =>0.5 - Math.random())
const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

// Create card layout 
function createBoard(){
    for (let i = 0; i < cardList.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', './assets/images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// Check cards for matches
function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','./assets/images/blank.png')
        cards[optionTwoId].setAttribute('src','./assets/images/blank.png')
        alert('You have clicked the same image')
    } 
    else if (cardsChosenId[0] === cardsChosenId[1]){
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
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardList.length/2){
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
}
// Create flip function to flip cards
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardList[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardList[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }  
}


createBoard()
})


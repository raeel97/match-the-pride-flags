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

// Create card layout 
function createBoard(){
    for (let i = 0; i < cardList.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', './assets/images/blank.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
    }
}

createBoard()
})
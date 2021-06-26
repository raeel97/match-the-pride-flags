document.addEventListener('DOMContentLoaded', () => {


    // Created an array with 2 tiles for each flag 
    const cardList = [
        {
            name: 'pride-flag',
            img: './assets/images/pride-flag.png'
        },
        {
            name: 'pride-flag',
            img: './assets/images/pride-flag.png'
        },
        {
            name: 'bi-flag',
            img: './assets/images/bi-flag.png'
        },
        {
            name: 'bi-flag',
            img: './assets/images/bi-flag.png'
        },
        {
            name: 'intersex-flag',
            img: './assets/images/intersex-flag.png'
        },
        {
            name: 'intersex-flag',
            img: './assets/images/intersex-flag.png'
        },
        {
            name: 'asexual-flag',
            img: './assets/images/asexual-flag.png'
        },
        {
            name: 'asexual-flag',
            img: './assets/images/asexual-flag.png'
        },
        {
            name: 'pansexual-flag',
            img: './assets/images/pansexual-flag.png'
        },
        {
            name: 'pansexual-flag',
            img: './assets/images/pansexual-flag.png'
        },
        {
            name: 'trans-flag',
            img: './assets/images/trans-flag.png'
        },
        {
            name: 'trans-flag',
            img: './assets/images/trans-flag.png'
        },
    ]
    cardList.sort(() => 0.5 - Math.random()) //Sort method is used to in conjunction with the Math.random function to shuffle the tiles

    const grid = document.querySelector(".grid") //Selects the div in the html with .grid class and assigns it to the variable grid
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [] // Creates a variable named cardsChosen and assigns it a value of an empty array
    let cardsChosenId = [] // Creates a variable named cardsChosenId and assigns it a value of an empty array
    let cardsWon = [] // Creates a variable named cardsWon and assigns it a value of an empty array

    /* Create card layout by using a for loop to iterate through the cardList array and create a img element in the html
     with a src attribute that links to my blank tile photo and a data id attribute with a numerical value for each img element. 
     Then it "listens" for the click of the img and in response calls the flipCard function. The for loop then creates a child node
     of card for the parent node "grid".
    */
    function createBoard() {
        for (let i = 0; i < cardList.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', './assets/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    var wiggleWarning = document.getElementById('game-warning');

    function wiggleCard(wiggleTwo){
        wiggleTwo.classList.add("wiggle"); 
        setTimeout(function(){wiggleTwo.classList.remove("wiggle");}, 2000);
        
        wiggleWarning.innerHTML = "You can't click on the same tile twice doll!"
        setTimeout(function(){wiggleWarning.innerHTML = "";}, 2000);
    }

    function matchFound(matchAlert){
        wiggleWarning.innerHTML = "You found a match! Shantay you stay!";
        setTimeout(function(){wiggleWarning.innerHTML = "";}, 3000);
    }

    function mismatch(mismatchAlert){
        wiggleWarning.innerHTML = "A queen never gives up, try again!";
        setTimeout(function(){wiggleWarning.innerHTML = "";}, 2000);
    }


  

    // Check cards for matches. This is done by creating a function called checkForMatch. 
    function checkForMatch() {
        const cards = document.querySelectorAll('img') // A variable of cards is assigned the value of all img elements
        const optionOneId = cardsChosenId[0] // A variable of optionOneId is assigned the value of the first item in the cardsChosenId array. This is the first card that has been clicked
        const optionTwoId = cardsChosenId[1] // A variable of optionTwoId is assigned the value of the second item in the cardsChosenId array. This is the second card that has been clicked

        // An if statment in the if else statement is used to determine if the same image has been clicked twice. This is achieved by checking 
        // if the values of optionOneId and optionTwoId are strictly equal (The same item in the array), if its true, the card is 'flipped' back 
        // over by reassigning it a blank image again. An alert is then sent to the browser informing the user that they clicked the same image
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', './assets/images/blank.png')
            cards[optionTwoId].setAttribute('src', './assets/images/blank.png')
            let wiggleTwo = cards[optionTwoId];
            wiggleCard(wiggleTwo)
        } //if the if part of the if else statement is false, the next part the code run is the else if which checks to see if the tiles have the same value (name)
        // if its true, an alert is sent to the browser informing the user that they have a matching pair and both cardsChosen[0] and CardsChosen[1] have their src 
        // attribute reassigned to a matched image. It then removes the event listener thats waiting for the user to click on the tile so it can call the flip function. 
        // This prevents the user from selecting matched cards. The names in the cardsChosen array are then pished into the cardsWon array. 
        else if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneId].setAttribute('src', './assets/images/matched.png')
            cards[optionTwoId].setAttribute('src', './assets/images/matched.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
            let matchAlert = cards[optionTwoId];
            matchFound(matchAlert)
        } else { // If the if and else if are false, the else part of the statmenet will run signally that there is a mismatch in the selected tiles. This will result 
            //if its true, the card is 'flipped' back over by reassigning it a blank image again and alerting the user of the mismatch. 
            cards[optionOneId].setAttribute('src', './assets/images/blank.png')
            cards[optionTwoId].setAttribute('src', './assets/images/blank.png')
            let mismatchAlert = cards[optionTwoId];
            mismatch(mismatchAlert)
        }
        cardsChosen = [] // A variable of cardsChosen is assigned the value of an empty array
        cardsChosenId = [] // A variable of cardsChosenId is assigned the value of an empty array
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardList.length/2) {
            alert('Congratulations, you found them all!')
        }
    }
    // Create flip function to flip cards. This is done by assigning a variable of cardId with a value of the data-id attribute in the window
    // cardId datatype value in the cardList array is then utilized as a key and pushed into the cardChosen array. The cardId value is then pushed 
    // into the cardsChosenId array.
    //
    // The checkForMatch function is then called if the values in the cardsChosen array are equal to 2. it takes 500 milliseconds for this to execute
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardList[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardList[cardId].img)
        if (cardsChosen.length ===2) {
            setTimeout(checkForMatch, 350)
        }
    }


    createBoard() // Calling the createBoard function
    

    
})
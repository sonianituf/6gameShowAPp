
// create variables
let keyboard = document.getElementById('qwerty');
let keyBtns = document.querySelectorAll('.keyrow button');
let letters = document.getElementsByClassName('letter');
let phrase = document.getElementById('phrase');
const startG = document.querySelector('.btn__reset');
const overlayStart = document.getElementById('overlay');
const hearts = document.querySelectorAll('img[src = "images/liveHeart.png');
let missed = 0;
// create phrases array
let phrases = ['html was easy', 
                'css was a bit tricky',
                 'javascript is complex', 
                 'coding is fun logic', 
                 'always learn new things' ];
// add event listener to the “Start Game” button to hide the start screen overlay
startG.addEventListener('click', function(e)  {
    overlay.style.display = 'none';
});

//create a getRandomPhraseAsArray function
function getRandomPhraseAsArray(arr) {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i].split(''); 
}
// getRandomPhraseAsArray(phrases);

//Create an addPhraseToDisplay Function
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('LI'); /* create li elements */
        const ul = document.querySelector('#phrase ul');
        li.textContent = arr[i];
          if (li.textContent === '') {
           li.className = 'space'; 
            } else {
           li.className = 'letter';
            }
        ul.appendChild(li);/* append LI created */
    }
}
// call addPhraseToDisplay function with getRandomPhraseAsArray result as parameter
const phrasesArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phrasesArray);

    //create a Check letter function
function checkLetter(button) { 
    if(button.className === '.letter'){ 
    //store all the of the `.letter` elements inside checkLetter
    let match = null; //create a variable to store if a match is found and give it the value of null
        for (let i = 0; i < li.length; i += 1) { //loop through all of the li elements
            if (button.textContent === li[i].textContent ) { //create a conditional that compares the text of the button parameter to the text of the li element at the index of the loop
                li[i].classList.add('show'); //if they match, add the 'show' class name to the li
                match = li[i].textContent; //if they match, store the button text in the match variable
            }
        }
    return match;
    }
}
     
//Add an Event Listener to the Keyboard
keyboard.addEventListener('click', (event) => { //create an event listener for the qwerty element that listens for the 'click' event
     //use a conditional to filter out clicks that don't happen on the buttons or if the button already has the 'chosen' class
    if (event.target.tagName === 'BUTTON') {
       event.target.classList.add('chosen'); //Add the 'chosen' class to the button that was pressed
       let correctGuess = checkLetter(event.target);//Call the checkLetter function and assign it to a variable

    //If the checkLetter function does not find a letter, remove one of the heart images and increment the 'missed' counter
    if (correctGuess === null) {
        hearts[missed].src = 'images/lostHeart.png';
        missed += 1;
        }
        event.target.disabled = true;
    }
    checkWin();
});
//Create a checkWin function

function checkWin() {
    const letter = document.getElementsByClassName('letter'); //Create a variable to store the li elements that have the same class name as 'letter'
    const show = document.getElementsByClassName('show'); //Create a variable to store the li elements that have the same class name as 'show'
    if (letter.length === show.length) { //Check if the length of the 2 variable are the same. If they are, display the win overlay
        overlay.className = 'win'; //Create the win overlay by adding the 'win' class to the start overlay
        overlay.innerHTML = '<h1>"The successful warrior is the average person, with laser-like focus"</h1>'; //Change the headline text of the start overlay to show a person won
        overlay.style.display = 'flex'; //Change the display property of the overlay to 'flex'
        
    } else if (missed > 4) { //Check if the misssed counter is greater than 4. If they are, display the lose overlay
        overlay.className = 'lose'; //Create the lose overlay by adding the 'lose' class to the start overlay
        overlay.innerHTML = '<h1>"Forget about winning and losing. Forget about pride and pain"<h1>'; //Change the headline text of the start overlay to show a person lost
        overlay.style.display = 'flex'; //Change the display property of the overlay to 'flex'
    }
}


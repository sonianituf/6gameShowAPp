    /* 2 declare variables */

const overlay = document.getElementById('overlay');
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase'); 
const btn__reset = document.getElementsByClassName('btn__reset')[0];
let currentPhrase; 
let missed = 0;
// 4 create phrases array, small caps, no punct
const phrases = ['html was easy',  
                'css was a bit tricky',
                 'javascript is complex', 
                 'coding is fun logic', 
                 'always learn new things' ];

/* 3 add event listener to start btn */
btn__reset.addEventListener('click', (e) => {
    // initialize missed to 0
    missed = 0;
    /* reset game when out of hearts */
    let imgReplace = document.querySelectorAll('.tries img');
    imgReplace.forEach(imgReplace => {
        imgReplace.src = 'images/liveHeart.png';
    });
    /* reset phrase  */
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    /* enable the keyboard buttons, in order to reset the game, for each button in the keyboard, 
    remove the dissabled  and chosen attributes added in step 8 */
    const qwertyButtons = qwerty.querySelectorAll('button');
    qwertyButtons.forEach(button => {
        button.removeAttribute('disabled');
        button.classList.remove('chosen');
        button.disabled = false;
    });
    // call the function randomPhraseArray
    const phraseArray = getRandomPhraseAsArray(phrases);
    // call function addPhrase to display the new phrase
    addPhraseToDisplay(phraseArray);
    // hide overlay display
overlay.style.display = 'none';
});


/* 5 create a getRandomPhraseAsArray function and return the new array in split characters*/
function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() *arr.length)].split('');
}

/* 6 create an addPhraseToDisplay function */
function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
    // loop to add space or letter to the list items 
    for (let i = 0; i < arr.length; i += 1) {
        // create list items
        let li = document.createElement('li'); 
        // set the text content of li to the corespondind array index
        li.textContent = arr[i];
        // add list items to ul phrase
        ul.appendChild(li);
          if (arr[i] === ' ') {
            //   if a space is clicked, add class space
           li.className = 'space'; 
            }
            // otherwise, add class letter
             else {
           li.className = 'letter';
            }
    }
}

/* 7 create a checkLetter function. */
function checkLetter (qwertyButton){
    // select all elements with class letter
    let li = document.getElementsByClassName('letter');
    // declare a match and set it to null
    let match = null;
    // loop through all elements with class letter
        for (let i = 0; i < li.length; i += 1) {
        // if the letter and the button clicked(text cont) are a match, add show
            if (li[i].textContent === qwertyButton.textContent) {
                li[i].classList.add('show');
                // store the letter that matched in variable
                match = li[i].textContent;
            } else{
                // else, the letter is marked null
                li[i].classList.add('null');
            }
        }
        // once the letter is checked, retuned the match
    return match;
}
/* 8 Add an event listener to the keyboard buttons */

qwerty.addEventListener('click', (e) => {
    // declare button as the event target
    let button = e.target;
    // Pass the button to the checkLetter function, and store the letter returned inside of a variable called letterFound
    let letterFound = checkLetter(button);
    // check the value of the letterFound variable.
    // if the pressed element is a button
            if (button.tagName === "BUTTON") {
                //  add a chosen class 
                button.classList.add('chosen');
                // set it to disable so  buttons on keyboard can't be pressed twice
                button.disabled = true;
                // and if letterfound is null, then replace live heart with lost heart
                if (letterFound === null) {
                    const imgReplace = document.getElementsByTagName('img');
                    imgReplace[missed].src = 'images/lostHeart.png';
                    //  increase the missed count by 1.
                    missed += 1;
                }
            }
            // 10.2 call checkwin to see if the game was won
    checkWin();
});

/* 10.1 create the checkWin f */
function checkWin() {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    const title = document.querySelector('.title');
    // if the number of letters with class “show” is equal to the number of letters with class “letters”
    if (show.length === letter.length) {
        //headline for win
        title.innerHTML = 'Fantastic!';
        overlay.className = 'win';
        overlay.style.display = "flex";
        
        //add reset button
        btn__reset.textContent = "Play again?";
    } 
    // when missed = 5
        else if (missed == 5) {
        //headline for lose
        title.innerHTML = 'Lady Luck smiles not upon you...';
        overlay.className ='lose';
        overlay.style.display = "flex";
        //add reset button
        btn__reset.textContent = "Try again?";
    }
}



    /* variables */

const overlayStart = document.getElementById('overlay');/* start display */
const qwerty = document.getElementById('qwerty');/* keyboard div */
let phrase = document.getElementById('phrase'); /* random phrase div */
let currentPhrase; /* pharase on display atm */
let missed = 0;/* missed var initialized to 0 */
const startBtn = document.querySelector('.btn__reset');/* select the start btn */

/* for checkletter function */
let li = document.getElementsByClassName('letter'); /* all elements with class letter */
// let match = null;/* declare match and set to null */
    
let phrases = ['html was easy',  /* 4 create phrases array */
                'css was a bit tricky',
                 'javascript is complex', 
                 'coding is fun logic', 
                 'always learn new things' ];

/* reset */
function resetGame () {
    /* when click on try again, return me to the statrGame display  */
    startBtn.addEventListener('click', (e) =>{
        if (e.currentTarget.className === "win" && "lose"){
            return overlayStart;
            // overlayStart.style = document.getElementById('overlay');
        } else if (e.textContent !== "Try again"){

        }
    });
}
/* 3 attach event listener to “StartGame” btn to hide start screen overlay.*/
startBtn.addEventListener('click', function(e)  {
    startBtn.textContent ='Start Game';
    overlayStart.style.display = 'none';
    resetGame();

          
});


/* 5 create a getRandomPhraseAsArray function */
function getRandomPhraseAsArray(arr) {
    let i = Math.floor(Math.random() * arr.length);
    currentPhrase = arr[i].split('');
    return currentPhrase; 
}
getRandomPhraseAsArray(phrases);

/* 6 create an addPhraseToDisplay function */
function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
    for (let i = 0; i < arr.length; i += 1) {
        let li = document.createElement('LI'); 
        li.textContent = arr[i];
        ul.appendChild(li);
          if (arr[i] === ' ') {
           li.className = 'space'; 
            } else {
           li.className = 'letter';
            }
    }
}
/* // call addPhraseToDisplay function with getRandomPhraseAsArray result as parameter */
const phrasesArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phrasesArray);

/* 7 create a checkLetter function. */
function checkLetter (qwertyButton){
    // let li = document.getElementsByClassName('letter');
    let match = null;
        for (let i = 0; i < li.length; i += 1) {
            if (li[i].textContent === qwertyButton.textContent) {
                li[i].classList.add('show');
                match = li[i].textContent;
            } else if (li[i].textContent !== qwertyButton.textContent) {
                li[i].classList.add('null');
            }
        }
    return match;
}
/* 8 Add an event listener to the keyboard. */

qwerty.addEventListener('click', (e) => {
    
    let button = e.target;
    if (button.tagName === "BUTTON") {
        button.classList.add('chosen');
        button.disabled = true;
    } else {
        button.disabled = false;
    }
        /* 9 Count the missed guesses in the game. */
    let letterFound = checkLetter(button);
               /* replace hearts if letterFound is null */    
         if (letterFound === null && button.tagName === "BUTTON") {
           let imgReplace = document.getElementsByTagName('img');
           /* do i need a for each loop? */
            imgReplace[missed].src = "images/lostHeart.png";
           missed += 1;
        } 

/*  call the checkWin */
checkWin(); 

/* create the checkWin f */
function checkWin() {
    let letter = document.getElementsByClassName('letter');
    let show = document.getElementsByClassName('show');
    const title = document.querySelector('.title');
    if (show.length === letter.length) {
        //headline for win
        title.innerHTML = 'Fantastic!';
        overlayStart.classList.add('win');
        overlayStart.style.display = "flex";
        // overlayStart.style.display = "show";
        //add reset button
        startBtn.textContent = "Try again";
    } else if (missed == 5) {
        //headline for lose
        title.innerHTML = 'LadyLuck smiles not upon you';
        overlayStart.classList.add('lose');
        overlayStart.style.display = "flex";
        //add reset button
        startBtn.textContent = "Try, try, try again?";
    }
}

});


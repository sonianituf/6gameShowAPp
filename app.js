/* variables */
const overlayStart = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');/* keyboard div */
let phrase = document.getElementById('phrase'); /* random phrase div */
let currentPhrase; /* pharase on display atm */
let missed = 0;/* missed var initialized to 0 */
const startBtn = document.querySelector('.btn__reset');/* select the start btn */
    
let phrases = ['html was easy',  /* create phrases array */
                'css was a bit tricky',
                 'javascript is complex', 
                 'coding is fun logic', 
                 'always learn new things' ];
/* attach event listener to “StartGame” btn to hide start screen overlay.*/
startBtn.addEventListener('click', function(e)  {
    overlayStart.style.display = 'none';
});

/* create a getRandomPhraseAsArray function */
function getRandomPhraseAsArray(arr) {
    let i = Math.floor(Math.random() * arr.length);
    currentPhrase = arr[i].split('');
    return currentPhrase; 
}
getRandomPhraseAsArray(phrases);

/* create an addPhraseToDisplay function */
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        const li = document.createElement('LI'); 
        const ul = document.querySelector('#phrase ul');
        li.textContent = arr[i];
        ul.appendChild(li);
          if (li.textContent === '') {
           li.className = 'space'; 
            } else {
           li.className = 'letter';
            }
    }
}
/* // call addPhraseToDisplay function with getRandomPhraseAsArray result as parameter */
const phrasesArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phrasesArray);
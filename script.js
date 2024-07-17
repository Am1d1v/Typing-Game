

const word = document.querySelector('#word');
const text = document.querySelector('#text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endgameEl = document.querySelector('#end-game-container');
const settingsBtn = document.querySelector('#settings-btn');
const settings = document.querySelector('#settings');
const settingsForm = document.querySelector('#settings-form');
const defficultySelect = document.querySelector('#difficulty');


// List of words
const wordsSet = [
    'airplane',
    'ball',
    'silver',
    'air',
    'black',
    'pink',
    'white',
    'letter',
    'message'
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Get a random word from array
function getRandomWord(){
    return wordsSet[Math.floor(Math.random() * wordsSet.length)]
}

// Add word to DOM
function addWordToDOM(){
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
addWordToDOM();

// Inserted text event
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        // Increase score by 1
        score += 1;

        addWordToDOM();

        // Clear input field
        e.target.value = '';
        
    }
})
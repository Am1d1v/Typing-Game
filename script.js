

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

// Difficulty level
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// Set difficulty select value
defficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

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

// Update score
function updateScore(){
    scoreEl.innerHTML = score;
}

// Focus on input text on start
text.focus();

// Timer counting dowm
const timeInterval = setInterval(() => {
    // Decrease time by 1
    time--;
    
    timeEl.innerHTML = `${time}s`;

    if(time <=0){
        clearInterval(timeInterval);
        time = 0;

        // End Game
        gameOver();
    }

}, 1000);

// Game Over. Show end screen
function gameOver(){

    endgameEl.style.display = 'flex';

    endgameEl.innerHTML = `
        <h1>Time ran out</h1>
        <p>Your final score is ${score}</p>
        <button onClick="location.reload()" />Reload
    `;
}

// Inserted text event
text.addEventListener('input', (e) => {
    const insertedText = e.target.value;

    if(insertedText === randomWord){
        // Increase score by 1
        score += 1;
        updateScore();
        
        addWordToDOM();

        // Clear input field
        e.target.value = '';

        // Add time if words match. Additional time depends on level of difficulty
        switch (difficulty) {
            case 'easy':
                time += 5;    
                break;
            case 'medium':
                time += 3;    
                break;
            case 'hard':
                time += 1;    
                break;
        }
        
    }
});

// Show/Hide difficult setting
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settings.addEventListener('change', (event) => {
    difficulty = event.target.value;
    
    // Set difficulty to localStorage
    localStorage.setItem('difficulty', difficulty);
});
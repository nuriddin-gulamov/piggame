// Using Strict Mode
"use strict";

// Objects
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const currentPlayer = document.querySelector(".player--active");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScoree = document.querySelector(".player--active .current-score");  

// Game info
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// Functions
function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
};

// New game
btnNew.onclick = function () {
    location.reload();
};

// Rolling Dice Functionality
btnRoll.onclick = function () {
    if (playing) {
        let number = Math.round(Math.random() * 6);
        if (number < 1) number = number + 1;
        dice.classList.remove("hidden");
        dice.setAttribute("src", `./img/dice-${number}.png`);
        if (number !== 1) {
            currentScore += number;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else switchPlayer();
    }
};

// Holding the score
btnHold.onclick = function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {  
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            dice.classList.add("hidden");
        } else switchPlayer();
    }
}
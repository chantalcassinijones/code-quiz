//A start button that when clicked a timer starts 
//and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, 
//it should display their score and give the user the ability to save their initials and their score

// calling elements needed and creating variables

var startButton = document.querySelector('.start-button');
var timerElement = document.querySelector('#time');

var win = false;
var timer;
var timerCount;

// The startGame function is called when the start button is clicked
function startGame() {
    win = false;
    timerCount = 100;
    startTimer()
  }

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (win && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }
  // event listener to start button to call startGame function on click
  startButton.addEventListener("click", startGame);
    
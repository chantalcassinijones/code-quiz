//and the first question appears.
//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.
//When the game ends, 
//it should display their score and give the user the ability to save their initials and their score

// calling elements needed and creating variables

var startButton = document.querySelector('#start-button');
var timerElement = document.querySelector('#time');
var questionTitle = document.querySelector('#question-title');
 var multipleChoices = document.querySelector('#choices');
//var questions = document.querySelector('#questions');

var win = false;
var timer;
var timerCount;
var correctAnswer;
var currentQuestionIndex = 0;

 //The startGame function is called when the start button is clicked and 
 //two things happen: countdown starts and 1st question is displayed 
function startQuiz() {
  //hides the start screen and shows the first question
  document.querySelector('#start-screen').classList.add('hide');
  document.querySelector('#questions').classList.remove('hide');
  //sets the starting time
   timerCount = 75;
   //starts the timer function
    startTimer();
    askQuestion();
  }

 //The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    //Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        //  if win condition is met
        if (win && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
        if (correctAnswer !== true) {
          timer = setInterval(function() {
            timerCount-10;
            timerElement.textContent = timerCount;
          })
        }
      }
      //  if time has run out game over
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  //the askQuestion function asks questions each time a question is answered
  function askQuestion() {
  }

  // function to handle answers- check for correct and wrong answer
  // move to the next question 
  //end the quiz 

  function handleAnswers() {

  }
    

    

  
  // event listener to start button to call startGame function on click
  startButton.addEventListener("click", startQuiz);
    
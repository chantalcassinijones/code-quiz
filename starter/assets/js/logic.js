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


var win = false;
var timer ;
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
    askQuestion(currentQuestionIndex);
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
      }
      
      //  if time has run out game over
      if (timerCount <= 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000);
  }

  //the askQuestion function asks questions each time a question is answered
  function askQuestion(questionIndex) {
      // Clear previous question and choices
  questionTitle.textContent = '';
  multipleChoices.innerHTML = '';

  // Display the question
  questionTitle.textContent = myQuestions[questionIndex].question;

  // Create and append the choices
  var answers = myQuestions[questionIndex].answers;
//iterating over the multiple choice answers for each question
    for (var option in answers) {
     var button = document.createElement('button'); //create a button to make choices selectable
      button.textContent = answers[option];
      button.setAttribute('value', option);
      multipleChoices.appendChild(button);
  }
    
  }


  // function to handle answers 
  //function handleAnswers() {
    //var userAnswer = document.querySelector('button[value=]');
    //var correctAnswer = myQuestions(currentQuestionIndex).correctAnswer;
//check for right or wrong answer
    //if (userAnswer === correctAnswer) {
      
      
    //} else {
      //timeLeft-=10;
      
    //}
//continue to next question or end quiz
currentQuestionIndex ++;
    if (currentQuestionIndex < myQuestions.length) {
      askQuestion(currentQuestionIndex);
      
    } else {
      endQuiz()
    }

  //}

  function endQuiz() {

    clearInterval = timer
    // Hide the question section and show the end screen
  document.querySelector('#questions').classList.add('hide');
  document.querySelector('#end-screen').classList.remove('hide');

  // Calculate the final score
  var finalScore = timerCount;

  // Display the final score
  document.querySelector('#final-score').textContent = finalScore;
 }


  
    

    

  
  // event listeners to start functions
  startButton.addEventListener("click", startQuiz);
  button.addEventListener('click', handleAnswers);
    
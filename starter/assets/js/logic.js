// calling elements needed and creating global variables

var startButton = document.querySelector('#start-button');
var timerElement = document.querySelector('#time');
var questionTitle = document.querySelector('#question-title');
var multipleChoices = document.querySelector('#choices');
var feedback = document.querySelector('#feedback');
var submitButton = document.querySelector('#submit');
var initials = document.querySelector('#initials');
var highscores = document.querySelector('#highscores');

var timerCount;
var timer;
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
      //  if time has run out game over
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
      }
    }, 1000); 
  }

  //function to display questions and choices 
  function askQuestion(questionIndex) {
      // Clear previous question and choices
    questionTitle.textContent = '';
    multipleChoices.innerHTML = '';
  // Display the question
  questionTitle.textContent = myQuestions[questionIndex].question;
// Create button for each choice and append 
  var answers = myQuestions[questionIndex].answers;
   for(var option in answers) {
     var button = document.createElement('button'); 
      button.textContent = answers[option];
      button.setAttribute('value', option);
      button.classList.add('answer-button');
      multipleChoices.appendChild(button);
  } 
  // select button and iterate so that when an answer button is clicked handleAnswer function is called
  var answerButtons = document.querySelectorAll('.answer-button');
  answerButtons.forEach(button => {
    button.addEventListener ('click', handleAnswers);
  });

  }


  // function to handle answers 
  function handleAnswers() {
   var userAnswer = this.value;
    //check if answer is correct 
    checkAnswer(userAnswer);
   currentQuestionIndex ++;
   //continue to next question or end quiz
    if (currentQuestionIndex === myQuestions.length) {
      endQuiz();
    } else {
    askQuestion(currentQuestionIndex);
  }
  }
 //function to check if answer is right or wrong
  function checkAnswer(userAnswer) {
    //clears previous feedback
    feedback.textContent = '';
    var correctAnswer = myQuestions[currentQuestionIndex].correctAnswer;
   if (userAnswer === correctAnswer) {
      giveFeedback('Correct!');
    } else {
     giveFeedback('Wrong!');
      // Subtract 10 from the timer 
      timerCount -= 10;
    }
  }
  
  //function to allow feedback to show
  function giveFeedback(message) {
    // show the feedback section
    document.querySelector('#feedback').classList.remove('hide');
    feedback.textContent = message;
  }
  
//function to end quiz, timer and final score
 function endQuiz() {
  clearInterval(timer);
    // Hide the question section and show the end screen
  document.querySelector('#questions').classList.add('hide');
  document.querySelector('#end-screen').classList.remove('hide');
// Calculate the final score
  var finalScore = timerCount;
// Display the final score
  document.querySelector('#final-score').textContent = finalScore;
 }

 // Function to remember and save the highscore in local storage
function saveHighscore() {
  var finalScore = timerCount;
  // Store the highscore in the browser's local storage
  localStorage.setItem('highscore', finalScore);
  localStorage.setItem('initials', initials.value);
}
// event listeners to start functions
  startButton.addEventListener('click', startQuiz);
  submitButton.addEventListener('click', saveHighscore);
  
  
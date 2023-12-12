//var highscores = []
var initials = document.querySelector('#initials');
var highscores = document.querySelector('#highscores');

// Function to display the highscore
function showHighscore() {
    // Get the highscore from local storage
    var highscore = localStorage.getItem("highscore");
    var initial = localStorage.getItem("initials");
  // Display the highscore and initials 
    highscores.textContent = highscore;
    initials.textContent = initial;
  }
  // Call the showHighscore function when the page loads
   showHighscore(); 
  
  // Add event listener to the clear button
  document.querySelector("#clear").addEventListener("click", function() {
  // Clear the highscore from local storage
  localStorage.removeItem("highscore");
  //Clear the highscore display
  highscores.textContent = "";
  })
    

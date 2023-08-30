// i want to create a list
// i want to be able to add to the list automatically
var highScores = document.getElementById("high-scores");
console.log(highScores);

var scoresList = document.getElementById("scoreInfo");
highScores.append(scoresList);
console.log(scoresList);

var listItem = document.createElement("li");
scoresList.append(listItem);
console.log(listItem);

// var initials = localStorage.getItem("initalsInput");
// var highScore = localStorage.getItem("timeScore");

// this function is going to show us what the users info was but in the highscores.html
function renderMessage() {
  var initials = localStorage.getItem("initalsInput");
  var highScore = localStorage.getItem("timeScore");
  console.log(initials);
  console.log(highScore);
}
renderMessage();

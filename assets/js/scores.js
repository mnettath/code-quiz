// i want to create a list
// i want to be able to add to the list automatically
var highScores = document.getElementsByName("initialsInput");
console.log(highScores);

var scoresList = document.getElementsByName("timeScore");
highScores.append(scoresList);
console.log(scoresList);

var listItem = document.createElement("li");
scoresList.append(listItem);
console.log(listItem);

var initials = localStorage.getItem("initalsInput");
var highScore = localStorage.getItem("timeScore");

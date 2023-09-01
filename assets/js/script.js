//create references to to the HTML elements
var startButton = document.getElementById("start-btn");
var timerDisplay = document.getElementById("timerDisplay");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("result");
var submitButton = document.getElementById("submit");
var initials = document.getElementById("initials");

var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: "Alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["Quotes", "Curly brackets", "Parentheses", "Square brackets"],
    correctAnswer: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "Numbers and strings",
      "Other arrays",
      "Booleans",
      "All of the above",
    ],
    correctAnswer: "All of the above",
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
    correctAnswer: "Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "Terminal / bash", "For loops", "Console.log"],
    correctAnswer: "Console.log",
  },
];

var currentQuestionIndex = 0;
var currentQ;

// START SECTION
var timeScore = 100;
var timeInterval;

//start timer/quiz
function startQuiz() {
  startSection.classList.add("hide");
  quizSection.classList.remove("hide");
  timeInterval = setInterval(function () {
    timeScore--;
    timerDisplay.textContent = timeScore + " SECONDS REMAINING";

    if (timeScore === 0) {
      timerDisplay.textContent = timeScore;
      gameOver();
    }
  }, 1000);
  displayQuestion();
}

//create a function that displays time
function displayMessage() {
  var timeUp = 0;
  var timeInt = setInterval(function () {
    if (time < 0) {
      clearInterval(timeInt);
    } else {
      timerDisplay.textContent = time;
    }
  });
}

//QUIZ SECTION
//create a function to display the current question and choices
function displayQuestion() {
  currentQ = questions[currentQuestionIndex];
  questionElement.textContent = currentQ.question;
  choicesElement.textContent = " ";
  for (let i = 0; i < currentQ.choices.length; i++) {
    const choice = currentQ.choices[i];
    var li = document.createElement("li");
    li.setAttribute("class", "choice");
    li.setAttribute("data-choice", choice);
    li.textContent = choice;
    li.addEventListener("click", answerSel);
    choicesElement.append(li);
  }
}
function answerSel(event) {
  // value of choice is stored in data attribute
  // i need to grab the value of the data attribute from the li
  // so i can check user choice vs the actual current questions index i .answers

  var chosenEl = event.target;
  console.log(chosenEl);

  var userChoice = chosenEl.dataset.choice;
  console.log(userChoice);
  console.log(currentQ.correctAnswer);

  //check if answer is correct -- > check user choice with correct (if statement)
  if (userChoice != currentQ.correctAnswer) {
    console.log("You are incorrect");
    timeScore -= 15;
    var incorrect = document.createElement("p");
    // incorrect.textContent = "Incorrect";
    quizSection.appendChild(incorrect);
    console.log(incorrect);
  } else if (userChoice === currentQ.correctAnswer) {
    console.log("You are correct");
    var correct = document.createElement("p");
    // correct.textContent = "Correct";
    quizSection.appendChild(correct); // unable to append this to the question or choices elements, it wouldn't show up. Also keeps all the answers up
    console.log(correct);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length && timeScore > 0) {
    displayQuestion();
  } else {
    gameOver();
  }
}

// end the quiz and show the results section, display the final score
function gameOver() {
  quizSection.classList.add("hide");
  resultSection.classList.remove("hide");
  clearInterval(timeInterval);

  var finalScore = document.createElement("p");
  finalScore.textContent = "Your final score is " + timeScore;
  resultSection.append(finalScore);
}

// create the results h2 element
var resultTitle = document.createElement("h2");
resultTitle.textContent = "Results";
resultSection.append(resultTitle);

// create the results form element
var form = document.createElement("form");
resultSection.append(form);

var initialsInput = document.createElement("label");
initialsInput.textContent = "Enter initials:";
form.append(initialsInput);

var initialsInput = document.createElement("input");
initialsInput.setAttribute("type", "text");
form.append(initialsInput);
//store score information in results page and sort them in descending order
//add event listener for start button
startButton.addEventListener("click", startQuiz);
//store score in local storage and present it back into another form -->
//scores:
//initials:
//key value --> high scores --> array of objects that look the same in their key structure
//loop for rendering each high score
// localStorage.setItem;
//separate pages for quiz and high scores

// this function is listening for the submit button to be clicked and then it puts the user information into local storage

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  if (initials !== "") {
    var scoresArr = JSON.parse(localStorage.getItem("inputData")) || [];

    var inputData = {
      initialsInput: initialsInput.value,
      timeScore: timeScore.valueOf(),
    };

    scoresArr.push(inputData);

    console.log(scoresArr);

    localStorage.setItem("inputData", JSON.stringify(scoresArr));

    for (i = 0; i < scoresArr.length; i++) {
      var parsed = scoresArr[i];
      console.log(parsed);
    }

    for (i = 0; i < scoresArr.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = `${parsed.initialsInput}: ${parsed.timeScore}`;
      console.log(listItem);
    }
  }
  // stringified
  // JSON.parse: turns back into an array of object
  // var local.stage.getItem(inputData)
  // console log this (should be an arary of objects)
  //itarate through the array of objects
  // for loop to dynamically update the text
  // and append
});

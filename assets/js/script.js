//create references to to the HTML elements
var startButton = document.getElementById("start-btn");
var timerDisplay = document.getElementById("timerDisplay");
var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var submitButton = document.getElementById("submit");
var startSection = document.getElementById("start");
var quizSection = document.getElementById("quiz");
var resultSection = document.getElementById("result");
var initials = document.getElementById("initials");
//define variables and objects for questions
//array of objects
var questions = [
  {
    question: "question 1",
    choices: ["words", "words", "words", "words"],
    correctAnswer: 0,
  },
  {
    question: "question 2",
    choices: ["words", "words", "words", "words"],
    correctAnswer: 3,
  },
  {
    question: "question 3",
    choices: ["words", "words", "words", "words"],
    correctAnswer: 1,
  },
  {
    question: "question 4",
    choices: ["words", "words", "words", "words"],
    correctAnswer: 4,
  },
  {
    question: "question 5",
    choices: ["words", "words", "words", "words"],
    correctAnswer: 2,
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
    timerDisplay.textContent = timeScore + " seconds remaining";

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
    li.setAttribute("id", i);
    li.textContent = choice;
    li.addEventListener("click", answerSel);
    choicesElement.append(li);
  }
}
function answerSel(event) {
  var userChoice = event.target.id;
  console.log(userChoice);
  //check if answer is correct -- > check user choice with correct (if statement)
  if (userChoice != currentQ.correctAnswer) {
    timeScore -= 15;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length && timeScore > 0) {
    displayQuestion();
  } else {
    gameOver();
  }
}
function gameOver() {
  quizSection.classList.add("hide");
  resultSection.classList.remove("hide");
  clearInterval(timeInterval);
}

//store score information in results page and sort them in descending order
//add event listener for start button
startButton.addEventListener("click", startQuiz);
//store score in local storage and present it back into another form -->
//scores:
//initials:
//key value --> high scores --> array of objects that look the same in their key structure
//loop for rendering each high score
localStorage.setItem;
//separate pages for quiz and high scores

// VARIABLES
var questions = [
  {
    title: "What is your favorite color?",
    choices: ["red", "green", "blue"],
    answer: ["red"],
  },
  {
    title: "What is your favorite animal?",
    choices: ["tiger", "monkey", "snake"],
    answer: ["tiger"],
  },
  {
    title: "What is your favorite flower?",
    choices: ["rose", "sunflower", "tulip"],
    answer: ["rose"],
  },
];

console.log(questions[1]);

// i want to create a variable for question1
var question1 = document.querySelector("#question1");
console.log(question1);

var question2 = document.querySelector("#question2");
console.log(question2);

var question3 = document.querySelector("#question3");

var start = document.querySelector("#start");

var quiz = document.querySelector("#quiz");

//FUNCTIONS

function hideQuiz2() {
  quiz.style.visibility = "hidden";
}
hideQuiz2();

start.addEventListener("click", function () {
  start.style.visibility = "hidden";
  quiz.style.visibility = "visible";
});

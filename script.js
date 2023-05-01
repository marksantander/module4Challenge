const quizData = [
  {
    question: "What is the GitBash chek command?",
    choices: ["Git Sataus", "G Status", "Git Stat", "Status"],
    answer: "Git Status"
  },
  {
    question: "What best describes a for loop?",
    choices: ["A wheel", "A function", "An Element", "A loop is structure that allows code to execute"],
    answer: "A loop is structure that allows code to execute"
  },
  {
    question: "What does DOM stand for?",
    choices: ["Due on Monday", "Domination", "Document Object Model", "Fuji"],
    answer: "Document Object Model"
  },
  {
    question: "Arrays in Javascript can be used to store______?",
    choices: ["Numbers and Strings", "Other Arrays", "booleans", "all of the above"],
    answer: "all of the above"
  }
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const submitBtn = document.getElementById("submitQuiz");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;

loadQuestion();
startTimer();

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  choicesEl.innerHTML = "";

  currentQuestion.choices.forEach(function (choice) {
    const choiceEl = document.createElement("button");
    choiceEl.textContent = choice;
    choiceEl.addEventListener("click", function () {
      checkAnswer(choice);
    });
    choicesEl.appendChild(choiceEl);
  });
}

function checkAnswer(choice) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (choice === currentQuestion.answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === quizData.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function showResult() {
  questionEl.style.display = "none";
  choicesEl.style.display = "none";
  submitBtn.style.display = "none";
  resultEl.textContent = ["Not correct", "Correct"]
  clearInterval(timerInterval);
}

let timeRemaining = 75;
let timerID;

function startTimer() {
  timerInterval = setInterval(function() {
    timeRemaining--;
    timerEl.textContent = `Time Remaining: ${timeRemaining}`;
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      showResult();
    }
  }, 1000);
}
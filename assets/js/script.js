// Set quiz variables
var questionEl = document.querySelector("#question-holder");
var answerEls = document.querySelectorAll(".answer");
var startBtn = document.querySelector(".start-button");
var currentQuestionIndex = 0;
var score = 0;
var timerEl = document.querySelector("#timer");
var timerInterval;
var timeLeft = 75;
var highScores = [];
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// quiz questions and answers 
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with_______?",
        answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        correctAnswer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store_______?",
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        correctAnswer: "All of the Above"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        correctAnswer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        correctAnswer: "Console.log"
    },
];

// set timer
function startTimer() {
    timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time left: " + timeLeft;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

// show question
function showQuestion() {
    var question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    for (var i = 0; i < answerEls.length; i++) {
        answerEls[i].textContent = question.answers[i];
        answerEls[i].addEventListener("click", selectAnswer);
    }
}

// select answer
function selectAnswer() {
    if (this.textContent === questions[currentQuestionIndex].correctAnswer) {
        score++;
    } else {
        timeLeft -= 10;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// end quiz
function endQuiz() {
    clearInterval(timerInterval);
    var finalScore = score * timeLeft;
    alert("Your final score is " + finalScore);
    document.getElementById("initials-form").style.display = "block";
}

// event listener for submit button
var submitBtn = document.getElementById("submit-score");
submitBtn.addEventListener("click", function() {
  var initials = document.getElementById("initials").value;
  var scoreData = { initials: initials, score: score * timeLeft };
  highScores.push(scoreData);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href = "./highscores.html";
});


// start quiz
function startQuiz() {
    startTimer();
    showQuestion();
}

// event listener for start button
var startBtn = document.querySelector(".start-button");
startBtn.addEventListener("click", startQuiz);

// event listener to hide start button after start and hide answers until started
startBtn.addEventListener("click", function() {
    // hide the start button
    startBtn.style.display = "none";
    // show the answer buttons
    answerEls.forEach(function(button) {
        button.style.display = "block";
    });
});

// quiz questions and answers 
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAnswer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed with_______?",
        answers: ["Quotes", "Curly Brackets", "Parenthesis", "Square Brackets"],
        correctAnswer: ""
    },
    {
        question: "Arrays in JavaScript can be used to store_______?",
        answers: ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"],
        correctAnswer: ""
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answers: ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
        correctAnswer: ""
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/Bash", "For Loops", "Console.log"],
        correctAnswer: ""
    },
];

// Set quiz variables
let currentQuestionIndex = 0;
let timeRemaining = 75;
let score = 0;
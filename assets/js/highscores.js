var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// event listener for clear button on high score page
var clearBtn = document.getElementById("clear-scores");
clearBtn.addEventListener("click", function() {
    highScores = [];
    localStorage.removeItem("highScores");
    updateHighScoresList();
});

updateHighScoresList();
// var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
// if (storedHighScores !== null) {
//     highScores = storedHighScores;
// }

// function updateHighScoresList() {
//     var highScoresList = document.getElementById("high-scores-list");
//     highScoresList.innerHTML = "";
//     for (var i = 0; i < highScores.length; i++) {
//         var highScore = highScores[i];
//         var listItem = document.createElement("li");
//         listItem.textContent = highScore.initials + " - " + highScore.score;
//         highScoresList.appendChild(listItem);
//     }
// }

// load high scores from local storage
var storedHighScores = JSON.parse(localStorage.getItem("highScores"));
if (storedHighScores !== null) {
    highScores = storedHighScores;
}

// save high scores to local storage
function saveHighScores() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

// add high score to list and save to local storage
function addHighScore(initials, score) {
    highScores.push({ initials: initials, score: score });
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });
    if (highScores.length > 10) {
        highScores.pop();
    }
    saveHighScores();
    updateHighScoresList();
}

// function updateHighScoresList() {
//     var highScoresList = document.getElementById("high-scores-list");
//     highScoresList.innerHTML = "";
//     for (var i = 0; i < highScores.length; i++) {
//         var li = document.createElement("li");
//         li.textContent = highScores[i].initials + " - " + highScores[i].score;
//         highScoresList.appendChild(li);
//     }
// }

function updateHighScoresList() {
    var highScoresList = document.getElementById("high-scores-list");
    highScoresList.innerHTML = "";
  
    // sort high scores in descending order
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    // add each high score to the list
    for (var i = 0; i < highScores.length; i++) {
      var li = document.createElement("li");
      li.textContent = highScores[i].initials + " - " + highScores[i].score;
      highScoresList.appendChild(li);
    }
  }
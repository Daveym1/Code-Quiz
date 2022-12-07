var scoreList = document.getElementById("highscores");
var highScore = JSON.parse(localStorage.getItem("newScore"));
var clearBtn = document.getElementById("clear");

// for (var i = 0; i < highScore.length; i++) {
//     const newLocal = document.getElementById("highscores").appendChild(newLi);
// }
var newLi = document.createElement("li");
scoreList.appendChild(newLi);
// newLi.textContent = JSON.parse(localStorage.getItem("newScore"));
newLi.textContent = highScore.name + " - " + highScore.score;

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    newLi.textContent = '';
})


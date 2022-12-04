var button = document.getElementById("start");
var timerCount = document.getElementById("time");
var questionContainer = document.getElementById("questions")
var questionDiv = document.getElementById("question-title");
var question = localStorage.setItem("questions", JSON.stringify(questions));
var startScreen = document.getElementById("start-screen");
// Pseudo Code

//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

    //Set up an event listener for the start button.
        // 1. When clicked the timer starts.

button.addEventListener("click", function(){
    timerCount.innerHTML = 10;
    var countdown = setInterval(function(){
        timerCount.innerHTML--;

        if (timerCount.innerHTML == 0){
            console.log("Time's up");
            clearInterval(countdown);
        }
    }, 1000)

startScreen.classList.add("hide");
document.getElementById("question-title").classList.remove("hide");

})

console.log(question);


        // 2. The first question is displayed. and #start-screen is hidden




// Questions contain buttons for each answer.

    // Below the question will be four buttons containing possible answers

// When answer is clicked, the next question appears

    //If the answer was correct the correct sound plays
    //If the answer was incorrect the incorrect sound plays
    //The result is stored in local storage to be retrieved at the end of the quiz?
    //The next question is displayed
    
// If the answer clicked was incorrect then subtract time from the clock

    //Decide on an amount of time to deduct if the answer is wrong, probably 10 seconds

// The quiz should end when all questions are answered or the timer reaches 0.

    //If all questions are answered correctly within the time limit, the remaining time will be the players score.

// When the game ends, it should display their score and give the user the ability to save their initials and their score

    //A prompt or form will display, showing players score and asking to input their initials. 
    //Their score will then be displayed alongside their initials on the high score page
    //Will need to put their initials and score in local storage and retrieve it on high score page
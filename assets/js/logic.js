var button = document.getElementById("start");
var timerCount = document.getElementById("time");
var questionContainer = document.getElementById("questions")
var questionDiv = document.getElementById("question-title");
var question = localStorage.setItem("questions", JSON.stringify(questions));
var startScreen = document.getElementById("start-screen");
var endScreen = document.getElementById("end-screen");
var choices = document.getElementById("choices");
var questionIndex = 0;
var userChoices = questions[questionIndex].Choices;
var countdown = 0;
var currentTime = timerCount;
var seconds = 60;
var finalScore = document.getElementById("final-score");
var feedback = document.getElementById("feedback");
var choicesList = document.createElement("ol");
var listItems = document.createElement("li");
var correctAudio = new Audio("assets/sfx/correct.wav");
var incorrectAudio = new Audio("assets/sfx/incorrect.wav");

// Pseudo Code

//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

    //Set up an event listener for the start button.
        // 1. When clicked the timer starts.

button.addEventListener("click", function(){
    timerCount.innerHTML = seconds;
    var countdown = setInterval(function(){
        timerCount.innerHTML--;

        if (timerCount.innerHTML == 0){
            console.log("Time's up");
            clearInterval(countdown);
        }
        renderQuestions(questionIndex);
    }, 1000)
    
    startScreen.classList.add("hide");
    document.getElementById("question-title").classList.remove("hide");
    questionContainer.classList.remove("hide");
})


// 2. The first question is displayed. and #start-screen is hidden

function renderQuestions(questionIndex){

    questionDiv.innerHTML = "";

for (i = 0; i < questions.length; i++){
    questionDiv.textContent = questions[questionIndex].Question;
    var userChoices = questions[questionIndex].Choices;

    var choicesList = document.createElement("ol");
    
    
    // Questions contain buttons for each answer.

    userChoices.forEach(function (newItem) {
        var listItems = document.createElement("button");
        listItems.textContent = newItem;
        questionDiv.appendChild(choicesList);
        choicesList.appendChild(listItems);
        listItems.addEventListener("click", (compare));

    });
}
}

// function to compare answer with options

function compare(event){
    var element = event.target;

    if (element.matches("button")) {
       
        // Correct condition 
        if (element.textContent == questions[questionIndex].Answer) {
            feedback.innerHTML = "Correct";
            correctAudio.play();
        }else{
            timerCount.innerHTML -= 5;
            feedback.innerHTML = "Incorrect";
            incorrectAudio.play();
            
        }
            
             questionIndex++;

             // correct/incorrect feedback

            feedback.setAttribute("class", "feedback");
            setTimeout(function() {
            feedback.setAttribute("class", "feedback hide");
            }, 500);
             

        if (questionIndex >= questions.length){
            clearInterval(countdown);
            endQuiz();
        }
        } 
    }
    

    function endQuiz(){
        console.log("Score: " + timerCount);
        startScreen.classList.add("hide");
        document.getElementById("question-title").classList.add("hide");
        questionContainer.classList.add("hide");
        endScreen.classList.remove("hide");
        finalScore.innerHTML = timerCount;
        console.log("The end");
    }

// choices.appendChild(choicesList);
// choicesList.appendChild(createListItems());
// choicesList.appendChild(createListItems());
// choicesList.appendChild(createListItems());
// choicesList.appendChild(createListItems());















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

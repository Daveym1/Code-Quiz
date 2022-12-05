var button = document.getElementById("start");
var timerCount = document.getElementById("time");
var questionContainer = document.getElementById("questions")
var questionDiv = document.getElementById("question-title");
var question = localStorage.setItem("questions", JSON.stringify(questions));
var startScreen = document.getElementById("start-screen");
var choices = document.getElementById("choices");
var questionIndex = 0;
var userChoices = questions[questionIndex].Choices;

    var choicesList = document.createElement("ol");
    var listItems = document.createElement("li");

// Pseudo Code

//Create a code quiz that contains the following requirements:

// A start button that when clicked a timer starts and the first question appears.

    //Set up an event listener for the start button.
        // 1. When clicked the timer starts.

button.addEventListener("click", function(){
    timerCount.innerHTML = 60;
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

for (i = 0; i < questions.length; i++){
    questionDiv.textContent = questions[0].Question;
    var userChoices = questions[questionIndex].Choices;

    var choicesList = document.createElement("ol");
    
    
    // function createListItems() {
    //     // var listItems = document.createElement("li");
    //     // var btn = document.createElement("button");
    //     btn.textContent = userChoices;
    //     return listItems, btn;
    // }
    
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
            console.log("correct");
             // Correct condition 
             questionIndex++;
        } 

    }
    }









choices.appendChild(choicesList);
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

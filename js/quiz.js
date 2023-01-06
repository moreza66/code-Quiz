// Global DOM variables

// Know the status of the quiz. Quiz is not running = false , running = true
const startButton = document.getElementById("start-button");
// Total questions in quiz
const questionContainer = document.getElementById("question-container");
// End Of Quiz
const endScreen = document.getElementById("end-Screen");
//Score Detail
const scoreScreen = document.getElementById("score-screen");
//High Score
const highScores = document.getElementById("high-score");

const question = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
// Initials entered by user
const initialList = document.getElementById("initials-list");
// The number of high scores to be shown
const highScoresList = document.getElementById("view-high-list");
const listHighScoreEl = document.getElementById("high-score-list");
// The correct answer of current question
const correctAnswer = document.getElementById("correct");
// The wrong answer of current question
const wrongAnswer = document.getElementById("wrong");
//lets have fun!!
const startGameBtn = document.querySelector("#start-game-btn");
const backButton = document.querySelector("#go-back");
//Clean the local storage
const refreshButton = document.querySelector("#clear-high-scores");
const timerScreen = document.querySelector("#timer");

// The score
let score = 0; 
// Interval variable
let timer;
let gameover;
// Time left for test
timerScreen .innerText=0;

let HighScores = [];
let questionsShuffle;
let questionIndex = 0;

// The array of questions for the quiz.
const questions = [
    {question: "Which one of the following is used to save the style of a webpage?",
    answer: "2. CSS",
    choices: [{choice: "1. Javascript"}, {choice: "2. CSS"}, {choice: "3. HTML"}, {choice: "4. MYSQL"}]
    },

    {question: "Which of the following is not a CSS library?",
    answer: "4. jQuery",
    choices: [{choice: "1. Tailwind"}, {choice: "2. bootstrap"}, {choice: "3. materialise"}, {choice: "4. jQuery"}]
    },

    {question: "Which type can obly store numbers & decimals in Javascript?",
    answer: "4. none of the above",
    choices: [{choice: "1. numbers"}, {choice: "2. strings"}, {choice: "3. booleans"}, {choice: "4. none of the above"}]
    },

    {question: "What file need an alteration when we have a typo shown on website?",
    answer: "3. HTML",
    choices: [{choice: "1. CSS"}, {choice: "2. cJavascript"}, {choice: "3. HTML"}, {choice: "4. JSON"}]
    },

    {question: "Which one of the following is able to use as a database to store data?",
    answer: "4. All of the above",
    choices: [{choice: "1. NoSQL"}, {choice: "2. mySQL"}, {choice: "3. MongoDB"}, {choice: "4. All of the above"}]
    },

    {question: "What does HTML stand for?",
    answer: "2. Hyper Text Markup Language",
    choices: [{choice: "1. Hyper Training Marking Language"}, {choice: "2. Hyper Text Markup Language"}, {choice: "3. Hyper Text Marketing Language"}, {choice: "4. Hyper Text Markup Leveler"}]
    },
];

 // Clear the CodingQuizChallenge Info page - Helper code to call the startQuiz()
  // Begin the quiz! Good luck!
const setTime = function() {
    timer = 60;
//Initialize the display timer at default value
let timercheck = setInterval(function() {
    timerScreen .innerText = timer;
    timer--

    if (gameover) {
        clearInterval(timercheck)
    }

    if (timer < 0) {
        showScore()
        timerScreen .innerText = 0
        clearInterval(timercheck)
    }

    }, 1000)
}

// This function starts the quiz
let startGame = function() {
    startButton.classList.add("hide");
    startButton.classList.remove("show");
    questionContainer.classList.remove("hide");
    questionContainer.classList.add("show");

   //Random questions
    questionsShuffle = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
}

// This displays each question.
let setQuestion = function() {
    resetAnswers()
    displayQuestion(questionsShuffle[questionIndex])
}


let resetAnswers = function() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    };
};

//Display result - answer correct or wrong
const displayQuestion = function(index) {
    question.innerText = index.question
    for (let i = 0; i < index.choices.length; i++) {
        let answerbutton = document.createElement("button")
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add("btn")
        answerbutton.classList.add("answerbtn")
        answerbutton.addEventListener("click", answerCheck)
        answerButtons.appendChild(answerbutton)
    }
};

let answerCorrect = function() {
    if (correctAnswer.className = "hide") {
        correctAnswer.classList.remove("hide")
        correctAnswer.classList.add("banner")
        wrongAnswer.classList.remove("banner")
        wrongAnswer.classList.add("hide")
    }
}

let answerWrong = function() {
    if (wrongAnswer.className = "hide") {
        wrongAnswer.classList.remove("hide")
        wrongAnswer.classList.add("banner")
        correctAnswer.classList.add("hide")
    }
}

const answerCheck = function(event) {
    let selectedAnswer = event.target 
    if (questionsShuffle[questionIndex].answer === selectedAnswer.innerText) {
        answerCorrect()
        score = score + 10
    }
// Time to be subtracted if user enters wrong answer to any question
    else {
        answerWrong()
        score = score - 5;
        timer = timer - 5;
    };

questionIndex++
    if (questionsShuffle.length > questionIndex + 1) {
        setQuestion()
    }
    else {
        gameover = "true";
        showScore();
    }
}

const showScore = function() {
    questionContainer.classList.add("hide");
    endScreen.classList.remove("hide");
    endScreen.classList.add("show");

    const scoreDisplay = document.createElement("p")
    scoreDisplay.innerText = ("Your final score is " + score + ".");
    scoreScreen.appendChild(scoreDisplay);
}


const createHighScore = function(event) {
    event.preventDefault()
    let initials = document.querySelector("#initials").value;
    if (!initials) {
        alert("You must  enter your initials.");
        return;
    }

    initialList.reset();

    const HighScore = {
        initials: initials,
        score: score
    }

    HighScores.push(HighScore);
    HighScores.sort((a, b) => {return b.score-a.score});

while (listHighScoreEl.firstChild) {
    listHighScoreEl.removeChild(listHighScoreEl.firstChild)
}

for (let i = 0; i < HighScores.length; i++ ) {
    let highscoreEl = document.createElement("li");
    highscoreEl.className = "high-score";
    highscoreEl.innerHTML = HighScores[i].initials + " - " + HighScores[i].score;
    listHighScoreEl.appendChild(highscoreEl);
}

saveHighScore();
displayHighScores();

}


const  saveHighScore = function() {
    localStorage.setItem("HighScores", JSON.stringify(HighScores))
}

const loadHighScore  = function() {
    let loadedHighScores = localStorage.getItem("HighScores")
    if (!loadedHighScores) {
        return false;
    }

    loadedHighScores = JSON.parse(loadedHighScores);
    loadedHighScores.sort((a,b) => {return b.score-a.score})

    for (let i = 0; i < loadedHighScores.length; i++) {
        let highscoreEl = document.createElement("li");
        highscoreEl.className = "high-score";
        highscoreEl.innerText = loadedHighScores[i].initials + " - " + loadedHighScores[i].score;
        listHighScoreEl.appendChild(highscoreEl);

        HighScores.push(loadedHighScores[i]);
    }
}

//Function to build FibalHighScores page using DOM methods
const displayHighScores = function() {

    highScores.classList.remove("hide");
    highScores.classList.add("show");
    gameover = "true"

    if (endScreen.className = "show") {
        endScreen.classList.remove("show");
        endScreen.classList.add("hide");
    }

    if (startButton.className = "show") {
        startButton.classList.remove("show");
        startButton.classList.add("hide");
    }

    if (questionContainer.className = "show") {
        questionContainer.classList.remove("show");
        questionContainer.classList.add("hide");
    }

    if (correctAnswer.className = "show") {
        correctAnswer.classList.remove("show");
        correctAnswer.classList.add("hide");
    }

    if (wrongAnswer.className = "show") {
        wrongAnswer.classList.remove("show");
        wrongAnswer.classList.add("hide");
    }
}


const renderStartPage = function() {
    highScores.classList.add("hide")
    highScores.classList.remove("show")
    startButton.classList.remove("hide")
    startButton.classList.add("show")
    scoreScreen.removeChild(scoreScreen.lastChild)
    questionIndex = 0
    gameover = ""
    timerScreen .textContent = 0;
    score = 0

    if (correctAnswer.className = "show") {
        correctAnswer.classList.remove("show");
        correctAnswer.classList.add("hide");
    }

    if (wrongAnswer.className = "show") {
        wrongAnswer.classList.remove("show");
        wrongAnswer.classList.add("hide");
    }
}


const clearHighScores = function() {
    HighScores = [];

    while (listHighScoreEl.firstChild) {
        listHighScoreEl.removeChild(listHighScoreEl.firstChild);
    }

    localStorage.clear(HighScores);
}

loadHighScore()

// Function to take back to the original page - Click Goback button
startGameBtn.addEventListener("click", startGame);

initialList.addEventListener("submit", createHighScore);

highScoresList.addEventListener("click", displayHighScores);

backButton.addEventListener("click", renderStartPage);

refreshButton.addEventListener("click", clearHighScores);
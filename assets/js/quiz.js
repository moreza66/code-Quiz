const stopWatch = document.querySelector("#timer");


let score = 0; 
let timer;
let gameover;
stopWatch.innerText=0;
let HighScores = [];
let randomlyQuestions;
let questionIndex = 0;
 
const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const choices = document.getElementById("")

startButton.addEventListener('click', startGame)
function startGame() {
    console.log('started')
}

//Question and answers
const questions = [
    {question: "Which one of the following is used to save the style of a webpage?",
    answer: "2. CSS",
    choices: {
       1: "Javascript",
       2: "CSS",
       3: "HTML", 
       4: "MYSQL"}
    },

    {question: "Which of the following is not a CSS library?",
    answer: "4. jQuery",
    choices: {
        1: "Tailwind", 
        2: "bootstrap", 
        3: "materialise", 
        4: "jQuery"}
    },

    {question: "Which type can obly store numbers & decimals in Javascript?",
    answer: "4. none of the above",
    choices: {
        1: "numbers", 
        2: "strings", 
        3: "booleans", 
        4: "none of the above"}
    },

    {question: "What file need an alteration when we have a typo shown on website?",
    answer: "3. HTML",
    choices: {
        1: "CSS", 
        2: "Javascript", 
        3: "HTML", 
        4: "JSON",}
    },

    {question: "Which one of the following is able to use as a database to store data?",
    answer: "4. All of the above",
    choices: {
        1: "NoSQL", 
        2: "mySQL", 
        3: "MongoDB", 
        4: "All of the above"}
    },

    {question: "What does HTML stand for?",
    answer: "2. Hyper Text Markup Language",
    choices: {
        1: "Hyper Training Marking Language", 
        2: "Hyper Text Markup Language", 
        3: "Hyper Text Marketing Language", 
        4: "Hyper Text Markup Leveler"}
    },
];





const setTimer = function(duration) {
    let timer = duration;
    let gameover = false;

    let interval = setInterval(function() {
        timer--;
        console.log(timer);

        if (timer <= 0) {
            gameover = true;
            clearInterval(interval);
            console.log("Game Over");
        }
    }, 1000);
}

setTimer(60); // starts a 60-second timer



const showTimer = document.querySelector("#timer");

let score = 0; 
let timer;
let gameover;
showTimer.innerText= 0;
let HighScores = [];
let randomlyQuestions;
let questionIndex = 0;
 
const startButton = document.getElementById("start-button");

//hide and show question container 
const questionContainer = document.getElementById("question-container");

//display question
const displayQuestion = document.getElementById('question-content')
//Display choises 
var choiceOne = document.getElementById("btn1");
var choiceTwo = document.getElementById("btn2");
var choiceThree = document.getElementById("btn3");
var choiceFourth = document.getElementById("btn4");
const answerButtons = document.getElementById("answer-buttons");
const choices = document.getElementById("")

startButton.addEventListener('click', startGame)
function startGame() {
    console.log('started')
    setTimer(60);
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    currentQuestionIndex = 0
    setNextQuestion()
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

const setNextQuestion = () => { 
    showQuestion()
}
const showQuestion = () => {
    for(let i=0; i<= questions.length; i++) {
        displayQuestion.innerText = questions[i].question;
        choiceOne.innerText = questions[i].choices[1]
        choiceTwo.innerText = questions[i].choices[2]
        choiceThree.innerText = questions[i].choices[3]
        choiceFourth.innerText = questions[i].choices[4]
   
    }
}




const setTimer = (duration) => {
    let timer = duration;
    let gameover = false;

    let interval = setInterval(function() {
        timer--;
        showTimer.innerText= timer;
        console.log(timer);

        if (timer <= 0) {
            gameover = true;
            clearInterval(interval);
            console.log("Game Over");
        }
    }, 1000);
}


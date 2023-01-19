

const config = {
    defaultScore: 0,
    defaultTime: 50, // seconds
    wrongAnswer: 10, // seconds
    scoreForAnswer: 10,
    totalQuestion: 5,
  };

//Question and answers
const questions = [
    {question: "Which one of the following is used to save the style of a webpage?",
    answers:[
        ["Javascript",false], 
        ["CSS",true],
        ["HTML",false ],
        ["MYSQL",false],

    ],
     },

    {question: "Which of the following is not a CSS library?",
    answers: [
        ["Tailwind", false]
        ["bootstrap", false] 
        ["materialise", false]
        ["jQuery",true],
    ],
    },
    {
        question: "Which type can obly store numbers & decimals in Javascript?",
        answers: [
          ["numbers", false],
          ["strings", false],
          ["booleans", false],
          ["none of the above", true],
        ],
      },
      {
        question: "What file need an alteration when we have a typo shown on website?",
        answers: [
          ["CSS", false],
          ["Javascript", false],
          ["HTML", true],
          ["JSON", false],
        ],
      },
      {
        question: "Which one of the following is able to use as a database to store data?",
        answers: [
          ["NoSQL", false],
          ["mySQL", false],
          ["MongoDB", false],
          ["All of the above", true],
        ],
      },
      {
        question: "What does HTML stand for?",
        answers: [
          ["Hyper Training Marking Language", false],
          ["Hyper Text Markup Language",, true],
          ["Hyper Text Marketing Language", false],
          ["Hyper Text Markup Leveler", false],
        ],
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


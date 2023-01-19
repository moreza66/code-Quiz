

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
let currentTimer = config.defaultTime;
let currentScore = config.defaultScore;
let currentQuestion = 0;
let _timer = null;

const secondsFormat = (t) => {
  let minutes = 0,
    seconds = 0;
  minutes = parseInt(t / 60)
    .toString()
    .padStart(2, "0");
  seconds = (t - parseInt(t / 60) * 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const setTimer = (seconds) => {
    document.getElementById("timer").textContent = secondsFormat(seconds);
  };

  const startTimer = () => {
    _timer = setInterval(() => {
      if (currentTimer <= 0) {
        stopTimer();
      } else {
        currentTimer--;
        setTimer(currentTimer);
      }
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(_timer);
    setTimeout(() => {
      document.getElementsByClassName("questions")[0].classList.add("hide");
      document.getElementsByClassName("addScore")[0].classList.remove("hide");
      document.getElementsByClassName("finalScore")[0].textContent = currentScore
    }, 2000);
  };

  //This code defines two functions: setScore and addScore
  const setScore = (score) =>
  document.getElementById("score").textContent = score;
const addScore = (score) => {
  currentScore += score;
  setScore(currentScore);
};

const checkAnswer = (ans) => {
    if (currentTimer <= 0) return stopTimer();
    if (ans.getAttribute("data-correct") === "1") {
      ans.classList.add("ansCorrect");
      addScore(config.scoreForAnswer);
    } else {
      ans.classList.add("ansWrong");
      document
        .querySelector("div.questions div.answers div[data-correct='1']")
        .classList.add("ansCorrect");
      currentTimer -= config.wrongAnswer;
    }
    setTimeout(() => {
        setQuestion();
      }, 500);
    };


    // set the next question in a quiz
    const setQuestion = () => {
        if (currentQuestion >= config.totalQuestion) {
          stopTimer();
          return;
        }
        document.getElementsByClassName("question")[0].textContent =
          questions[currentQuestion].question;
        document.getElementsByClassName("answers")[0].textContent = "";
        questions[currentQuestion].answers
          .sort((a, b) => 0.5 - Math.random())
          .forEach((answer) => {
            const ans = document.createElement("div");
            ans.innerHTML = answer[0];
            ans.setAttribute("data-correct", answer[1] ? "1" : "0");
            ans.setAttribute("onclick", "checkAnswer(this)");
            document.getElementsByClassName("answers")[0].append(ans);
          });
        currentQuestion++;
      };

      // retrieve stored scores from the browser's local storage
      const restoreScores = () => {
        const scores = localStorage.getItem("scores");
        if (scores) return JSON.parse(scores);
        return [];
      };

      //add new scores to the browser's local storage
      const addToStorage = (name, score) => {
        const scores = restoreScores();
        scores.push([name, score]);
        localStorage.setItem("scores", JSON.stringify(scores));
      };

      //clear the scores from the browser's local storage
      const clearStorage = () => localStorage.removeItem("scores");

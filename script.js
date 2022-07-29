//Remember variables
//




class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
     if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++
     }
     this.questionIndex++;
    }

    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}

//Create your question class
class Question {
    constructor(text,choices,answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

//Your Questions 
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
       // show question
       let questionElement =document.getElementById("Question");
       questionElement.innerHTML = quiz.getQuestionIndex().text;

       // show options
       let choices = quiz.getQuestionIndex().choices;
       for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice + i");
            choiceElement.innerHTML = choices[i];
            guess("button" + i, choices[i]);
       }

       showProgress();
    }
};

//Create Guess Function 
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

//show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
    'Question ${currentQuestionNumber} of ${quiz.questions.length}';
}

//Show score 
function showScores() {
 let quizEndHTML =
 `
 <h1>Quiz Completed</h1>
 <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
 <div class="quiz-repeat">
     <a href="index.html">Take Quiz Again</a>
 </div>
 `;
 let quizElement = document.getElementById("quiz");
 quizElement.innerHTML = quizEndHTML;
}

//Create your quiz questions 
let questions = [
new Question(
    "What does LIFO stand for?", ["Lizard In Forest Output", "Luke I'm Finally Out", "Lady Is Fine Okay", "Last In First Out"], "Last In First Out"
),
new Question(
    "What is the short way of saying HyperText Markup Language?", ["HTML", "ABCD", "1234", "LRUD"], "HTML"
),
new Question(
    "In a computer, where does most processing take place in?", ["Start Button", "CPU", "Desktop", "When you unplug your computer"], "CPU"
),
new Question(
    "Who is the Father of Computers?", ["Steve Jobs", "Bill Gates", "Charles Babbage", "Steve Wozniak"], "Charles Babbage"
),

];

//initialize the quiz 
let quiz = new Quiz(questions);

//display questions
displayQuestion();

//Create a time variable
let time = 10;
let appTime = time * 60 * 60;
appTime = appTime / 60;

let countdown = document.getElementById("countdown");

function countdownStart() {
    let countTime = setInterval(function(){
      if (countTime <= 0) {
        clearInterval(countTime);
        showScores();

      } else {
        countTime--;
        let sec = Math.floor(appTime % 60);
        let min = Math.floor(appTime / 60) % 60;
        countdown.innerHTML = `TIME: ${min} : ${sec}`;
      }
    }, 1000);
}

startCountdown();

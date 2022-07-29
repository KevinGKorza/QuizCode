//Remember variables
//Remember your functions
//Remember to cry 
//Remember your classes


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
 return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
 if(this.getQuestionIndex().isCorrectAnswer(answer)) {
     this.score++;
 }

 this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
 return this.questionIndex === this.questions.length;
}

function Question(text, choices, answer) {
 this.text = text;
 this.choices = choices;
 this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
 return this.answer === choice;
}

function displayQuestion() {
if(quiz.isEnded()) {
 showScores();
}
else {
 let questionElement = document.getElementById("Question");
 questionElement.innerHTML = quiz.getQuestionIndex().text;

 let choices = quiz.getQuestionIndex().choices;
 for(let i = 0; i < choices.length; i++) {
     let choiceElement =document.getElementById("choice" + i);
     choiceElement.innerHTML = choices[i];
     guess("button" + i, choices[i]);
 }
 showProgress();
}

};

function guess(id, guess) {
 let button = document.getElementById(id);
 button.onclick = function() {
     quiz.guess(guess);
     displayQuestion();
 }
};

function showProgress() {
 let currentQuestionNumber = quiz.questionIndex + 1;
 let ProgressElement = document.getElementById("progress");
 ProgressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

function showScores() {
 let quizEndHTML =
 `
 <h1>Quiz Completed</h1>
 <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
 <div class="quiz-repeat">
     <a href="index.html">Take The Quiz Again</a>
 </div>

 `;
 let quizElement = document.getElementById("App");
 quizElement.innerHTML = quizEndHTML;
};

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

let time = 10;
let appMinutes = time * 60 * 60;
let appTime = appMinutes / 60;

let counting = document.getElementById("countdown");
function startCountdown() {
 let appTimer = setInterval(function(){
     if(appTime <= 0) {
         clearInterval(appTimer);
         showScores();
     } else {
         appTime--;
         let sec = Math.floor(appTime % 60);
         let min = Math.floor(appTime / 60) % 60;
         counting.innerHTML = `TIME: ${min} : ${sec}`; 
     }
 },1000);
}

startCountdown();

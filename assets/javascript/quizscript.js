//variables

var currentQuestion = 0;
var score = 0;
// questions is defined in app.js file as array
var totalQuestions = questions.length;

var container = document.getElementById('quiz-container');
var questionElement = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('results');
var timers = document.getElementById('timer')


//OnLoad Timer
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (--timer < 0) {

      container.style.display = 'none';
      resultCont.style.display = '';
      resultCont.textContent = 'Your Score: ' + score;
      timers.style.display = 'none';
      return;
          

      }
  }, 1000);
}

jQuery(function ($) {
  var oneMinute = 60,
      display = $('#timer');
  startTimer(oneMinute, display);
});

// Method to load question
function loadQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;

};

function loadNextQuestion () {
  //If no option is selected
  var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
      alert('Please select your answer!');
      return;
    }
  //If Option IS selected
  var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
      score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if (currentQuestion == totalQuestions - 1){
      nextButton.textContent = 'Finish';
    }
    if (currentQuestion == totalQuestions - 1){
      timers.style.display = 'none';
      container.style.display = 'none';
      resultCont.style.display = '';
      resultCont.textContent = 'Your Score: ' + score;
      return;
      
    
    }

    loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion);



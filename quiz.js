const questions = [{
  question: "Nazwa zmiennej nie może zaczynać się od:",
  answers: {
    a: "dolara",
    b: "cyfry",
    c: "dużej litery"
  },
  correctAnswer: "b"
},
{
  question: "function square(number) {\r\n return number * number; \r\n } \r\nto przykład:",
  answers: {
    a: "deklaracji funkcji",
    b: "wywołania funkcji",
    c: "domknięcia funkcji"
  },
  correctAnswer: "a"
},
{
  question: "Który operator porównuje dwa operandy z uwzględnieniem ich typu?",
  answers: {
    a: "==",
    b: "!=",
    c: "==="
  },
  correctAnswer: "c"
},
{
  question: "Inna nazwa języka JavaScript to:",
  answers: {
    a: "ActionScript",
    b: "Java",
    c: "ECMAScript"
  },
  correctAnswer: "c"
}
];

// show next question
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener("click", showNextQuestion);
let currentQuestion = 0;
let correctAnswers = 0;

// show result
const resultButton = document.getElementById('result-btn');
resultButton.addEventListener("click", showResult);
resultButton.style.display = 'none';

// start quiz
const lastButton = document.getElementById('last-btn');
lastButton.addEventListener('click', startQuiz);
lastButton.style.display = 'none';

// show correct answer
const showAnswerButton = document.getElementById('answer-btn');
showAnswerButton.addEventListener('click', showCorrectAnswer);

// timer
let myTimer,
  timerDisplay = document.querySelector('#time');

function startTimer() {
  let minutes,
    seconds,
    duration = 300;

  function timer() {
    duration--;
    minutes = (duration / 60) | 0;
    seconds = (duration % 60) | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `Zostało ${minutes} : ${seconds} żeby zakończyć Quiz!`;

    if (duration <= 0) {
      clearInterval(myTimer);
      showResultOnTimeOut();
    }
  }

  timer();
  myTimer = clearInterval(myTimer);
  myTimer = setInterval(timer, 1000);
}

function stopTimer() {
  clearInterval(myTimer);
}

// show question
function showQuestion(i) {
  let paragraph = document.querySelector('main p');
  paragraph.textContent = questions[i].question;
  showAnswers(i);
}

//show answers
function showAnswers(questionIndex) {
  const q = questions[questionIndex];
  const option1 = document.getElementById('answer1_label');
  const option2 = document.getElementById('answer2_label');
  const option3 = document.getElementById('answer3_label');
  option1.innerHTML = `<input type = "radio" id = "answer1" name = "answer" value = "a" >
                      </input> <span class="label-text">${q.answers.a}</span>
                      <span class="checkmark"></span>`;
  option2.innerHTML = `<input type = "radio" id = "answer2" name = "answer" value = "b" > </input>
                      <span class="label-text">${q.answers.b} </span>
                      <span class="checkmark"></span>`;
  option3.innerHTML = `<input type = "radio" id = "answer3" name = "answer" value = "c" > </input>
                      <span class="label-text">${q.answers.c} </span><span class="checkmark"></span>`;
}

function showNextQuestion() {
  verify();
  currentQuestion += 1;
  showQuestion(currentQuestion);
  showAnswerButton.style.display = 'block';

  if (currentQuestion === questions.length - 1) {
    nextButton.style.display = 'none';
    resultButton.style.display = 'block';
  }
}

// show answer for current question
function showCorrectAnswer() {
  let correctAnswerLetter = questions[currentQuestion].correctAnswer;
  let radioButtons = document.getElementsByName("answer");
  [...radioButtons].map( item => {
     if (item.value === correctAnswerLetter ) {
       item.checked = true;
       correctAnswers--;
     }
   });

  showAnswerButton.style.display = 'none';
}

// verify currentQuestion. if it's correct increase correctAnswers counter
function verify() {
  let currentAnswer = document.querySelector('input[name=answer]:checked').value;
  if (currentAnswer && questions[currentQuestion].correctAnswer === currentAnswer) {
    correctAnswers++;

  }
}

function showResult() {
  verify();

  let titleText = 'Koniec Quizu!';
  let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `
      <p>${titleText}</p>
      <p>${contentText}</p>
    `;

  resultButton.style.display = 'none';
  lastButton.style.display = 'block';
  stopTimer();
  timerDisplay.style.display = 'none';
  showAnswerButton.style.display = 'none';
}

function startQuiz() {
  correctAnswers = 0;
  timerDisplay.style.display = 'block';
  showAnswerButton.style.display = 'block';
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `

  <p>treść pytania</p>
  <radiogroup class="answers">
    <label id="answer1_label"><input type="radio" id="answer1" name="answer" value="a"/>odpowiedź pierwsza</label>
    <label id="answer2_label"><input type="radio" id="answer2" name="answer" value="b"/>odpowiedź druga</label>
    <label id="answer3_label"><input type="radio" id="answer3" name="answer" value="c"/>odpowiedź trzecia</label>
  </radiogroup>
  <p></p>
  `;

  currentQuestion = 0;
  lastButton.style.display = 'none';
  nextButton.style.display = 'block';
  showQuestion(currentQuestion);
  startTimer();
}

function showResultOnTimeOut() {
  let titleText = 'Skończył się czas. Koniec Quizu!';
  let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `
      <p>${titleText}</p>
      <p>${contentText}</p>
    `;

  nextButton.style.display = 'none';
  resultButton.style.display = 'none';
  lastButton.style.display = 'block';
  showAnswerButton.style.display = 'none';
  timerDisplay.style.display = 'none';
}

startQuiz();

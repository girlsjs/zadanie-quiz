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
},
{
  question: "Która z poniższych metod wywołuje funkcję dla każdego elementu tablicy?",
  answers: {
    a: "forEach()",
    b: "each()",
    c: "withEach()"
  },
  correctAnswer: "a"
},
{
  question: "W jaki sposób komentujemy linię w JavaScript:",
  answers: {
    a: "<--To jest komentarz -->",
    b: "// To jest komentarz",
    c: "** To jest komentarz **"
  },
  correctAnswer: "b"
},
{
  question: "Przykład prawidłowej składni instrukcji if to:",
  answers: {
    a: "if i==5 then",
    b: "if i=5",
    c: "if(i==5)"
  },
  correctAnswer: "c"
},
{
  question: "Które ze zdarzeń ma miejsce podczas kliknięcia elementu HTML?:",
  answers: {
    a: "onclick",
    b: "ondrop",
    c: "onmouseclick"
  },
  correctAnswer: "a"
},
{
  question: "Które słowo kluczowe uniemożliwia ponowną deklarację?:",
  answers: {
    a: "let",
    b: "const",
    c: "var"
  },
  correctAnswer: "b"
},
{
  question: "Jak wybrać z dokumentu pierwszy element o klasie 'top':",
  answers: {
    a: "document.querySelector('.top');",
    b: "document.querySelectorAll('.top)",
    c: "document.querySelector('top')"
  },
  correctAnswer: "a"
}
];

//INFORMATION PANEL
function next(i) {
  const step = document.getElementById(`step${i}`);
  const isActive = document.querySelector(".is-active");
  isActive && isActive.classList.remove("is-active");
  isActive && isActive.classList.add("is-complete");
  step && step.classList.add("is-active");
}
//END INFORMATION PANEL

// show next question
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener("click", showNextQuestion);
let currentQuestion = 0;
let correctAnswers = 0;

// show result
const resultButton = document.getElementById('result-btn');
resultButton.addEventListener("click", function () {
  showResult('Koniec Quizu!', true)
}, false);
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
      showResult('Skończył się czas. Koniec Quizu!', false);
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
  next(i);
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
  [...radioButtons].map(item => {
    if (item.value === correctAnswerLetter) {
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

function showResult(titleText, callVerify) {
  if (callVerify) {
    verify();
    stopTimer();
  }

  renderResultText(titleText);
  manageButtonsDisplay();
  let step = document.getElementById(`step${currentQuestion}`);
  step.classList.add("is-complete");
  step.classList.remove("is-active");
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
  renderProgressSteps();
  currentQuestion = 0;
  lastButton.style.display = 'none';
  nextButton.style.display = 'block';
  let completeSteps = document.getElementsByClassName('is-complete');
  completeSteps && Array.from(completeSteps).forEach(el => el.classList.remove('is-complete'));
  showQuestion(currentQuestion);
  startTimer();
}

function renderResultText(titleText) {
  let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `
      <p>${titleText}</p>
      <p>${contentText}</p>
    `;
}

function manageButtonsDisplay() {
  resultButton.style.display = 'none';
  lastButton.style.display = 'block';
  showAnswerButton.style.display = 'none';
  timerDisplay.style.display = 'none';
  nextButton.style.display = 'none';
}

function renderProgressSteps() {
  const progressStep = document.getElementsByClassName('progress-step');

  if (progressStep.length >= questions.length) {
    Array.from(progressStep).forEach(el => el.remove());
  }

  let progressContainer = document.getElementById('progress');
  for (let i = 0; i < questions.length; i++) {
    progressContainer.innerHTML += `<div id='step${i}' class="progress-step"></div>`;
  }
}

startQuiz();

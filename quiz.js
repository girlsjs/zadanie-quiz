const questions = [
  {
    question: "Nazwa zmiennej nie może zaczynać się od:",
    answers: {
      a: "dolara",
      b: "cyfry",
      c: "dużej litery"
    },
    correctAnswer: "b"
  },
  {
    question:
      "function square(number) {\r\n return number * number; \r\n } \r\nto przykład:",
    answers: {
      a: "deklaracji funkcji",
      b: "wywołania funkcji",
      c: "domknięcia funkcji"
    },
    correctAnswer: "a"
  },
  {
    question:
      "Który operator porównuje dwa operandy z uwzględnieniem ich typu?",
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

// show question
function showQuestion(i) {
  let paragraph = document.querySelector('main p');
  paragraph.textContent = questions[i].question;
}

// show next question
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener("click", showNextQuestion);
let currentQuestion = 0;
let correctAnswers = 0;

const resultButton = document.getElementById('result-btn');
resultButton.addEventListener("click", showResult);
resultButton.style.display = 'none';


function showNextQuestion() {
  verify();
  showQuestion(currentQuestion + 1);
  currentQuestion += 1;
  if (currentQuestion === questions.length - 1) {
    nextButton.style.display = 'none';

    resultButton.style.display = 'block';
    showResult();
  } else {
    nextButton.style.display = 'block';
  }

}

// verify currentQuestion. if it's correct increase correctAnswers counter
function verify() {
  let currentAnswer = document.querySelector('input[name=answer]:checked').value;
  if (currentAnswer && questions[currentQuestion].correctAnswer === currentAnswer) {
    correctAnswers++;
  }
}

function showResult() {

  let titleText = 'Koniec Quizu!';
  let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `
      <p>${titleText}</p>
      <p>${contentText}</p>
      <button id="last-btn" class="btn">Jeszcze raz</button>
    `;
  const lastButton = document.getElementById('last-btn');
  lastButton.addEventListener('click', startQuiz);

}

function startQuiz() {
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = `
    <p>treść pytania</p>
    <radiogroup class="answers">         
    </radiogroup>
    <button id="next-btn" class="btn">Dalej</button>
    `
  const nextButton = document.getElementById('next-btn');
  nextButton.addEventListener("click", showNextQuestion);

  currentQuestion = 0;
  showQuestion(currentQuestion);
  ;
}

startQuiz();



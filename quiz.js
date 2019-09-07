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
  var currentQuestion = 0;
  
  function showNextQuestion() {
    showQuestion(currentQuestion + 1);
    currentQuestion += 1;
    if (currentQuestion === questions.length - 1) {
      nextButton.style.display = 'none';

    } else {
      nextButton.style.display = 'block';
    }
  }

  function showResult() {

    let correctAnswers = 3;
    let titleText = 'Koniec Quizu!';
    let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

    const mainElement = document.querySelector('main');
    mainElement.innerHTML= `
      <p>${titleText}</p>
      <p>${contentText}</p>
    `;
  }

  //INFORMATION PANEL
let step = 'step1';

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const step4 = document.getElementById('step4');

function next() {
  if (step === 'step1') {
    step = 'step2';
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");

  } else if (step === 'step2') {
    step = 'step3';
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");

  } else if (step === 'step3') {
    step = 'step4';
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");

  } else if (step === 'step4') {
    step = 'complete';
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");

  } else if (step === 'complete') {
    step = 'step1';
    step4.classList.remove("is-complete");
    step3.classList.remove("is-complete");
    step2.classList.remove("is-complete");
    step1.classList.remove("is-complete");

    step1.classList.add("is-active");
  }
}
//END INFORMATION PANEL
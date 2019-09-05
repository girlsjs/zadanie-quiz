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
    var paragraph = document.querySelector('main p');
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

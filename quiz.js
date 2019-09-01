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

  function showQuestion(i) {
    var paragraph = document.querySelector('main p');
    paragraph.textContent = questions[i].question;
  }

  function showResult() {
    var mainElement = document.querySelector('main');

    while (mainElement.hasChildNodes()) {
      mainElement.removeChild(mainElement.firstChild);
   }

    var titleElement = document.createElement('P');
    var titleText = document.createTextNode('Koniec Quizu!'); 
    titleElement.appendChild(titleText);
    mainElement.appendChild(titleElement);

    var contentElement = document.createElement('P');
    var correctAnswers = 3;
    var contentText = document.createTextNode('Odpowiedziałaś dobrze na ' + correctAnswers + ' z ' + questions.length + ' pytań.');
    contentElement.appendChild(contentText);
    mainElement.appendChild(contentText);
  }
  
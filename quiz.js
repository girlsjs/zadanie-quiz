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

  function showQuestion() {
    quest=questions[0].question;
    ansA=questions[0].answers.a;
    ansB=questions[0].answers.b;
    ansC=questions[0].answers.c;

    const elementHeader= document.querySelector('main p');
    elementHeader.innerHTML+="<p class=\"question\">"+quest+"</p>";

    const element1= document.querySelector('#answer1_label .answer');
    element1.innerHTML +=ansA;

    const element2= document.querySelector('#answer2_label .answer');
    element2.innerHTML +=ansB;

    const element3= document.querySelector('#answer3_label .answer');
    element3.innerHTML +=ansC;
  }

showQuestion();
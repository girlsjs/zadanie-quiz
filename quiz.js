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

  let currentQuestion = 0;
  
  function showNextQuestion() {
    showQuestion(currentQuestion + 1);
    currentQuestion += 1;
    if (currentQuestion === questions.length - 1) {
      nextButton.style.display = 'none';
      showResult();
    } else {
      nextButton.style.display = 'block';
    }
    setAnswerHint('');
    showAnswerButton.style.display = 'block';
  }

  // show answer for current question
  function showCorrectAnswer() {
    let correctAnswer = questions[currentQuestion].correctAnswer;
    setAnswerHint(correctAnswer);
    showAnswerButton.style.display = 'none';
  }

  function setAnswerHint(answerText) {
    let answerParagraph = document.querySelectorAll('main p')[1];
    answerParagraph.textContent = answerText;
  }

  
  function showResult() {

    let correctAnswers = 3;
    let titleText = 'Koniec Quizu!';
    let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

    const mainElement = document.querySelector('main');
    mainElement.innerHTML= `
      <p>${titleText}</p>
      <p>${contentText}</p>
      <button id="last-btn" class="last">Jeszcze raz</button>
    `;
    const lastButton = document.getElementById('last-btn');
    lastButton.addEventListener('click', startQuiz);

  }

  function startQuiz(){
     const mainElement = document.querySelector('main');
    mainElement.innerHTML= `
    <p>treść pytania</p>
    <radiogroup class="answers">         
    </radiogroup>
    <button id="next-btn" class="next">Dalej</button>
    `
    const nextButton = document.getElementById('next-btn');
    nextButton.addEventListener("click", showNextQuestion);
    const showAnswerButton = document.getElementById('answer-btn');
    showAnswerButton.addEventListener("click", showCorrectAnswer);
        
    currentQuestion= 0; 
    showQuestion(currentQuestion);
    ;
  }
  
  startQuiz();



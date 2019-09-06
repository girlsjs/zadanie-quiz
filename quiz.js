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
      showResult();
    } else {
      nextButton.style.display = 'block';
    }
    
  }
  const lastButton = document.createElement("BUTTON");
    lastButton.innerHTML = "Jeszcze raz";
    document.querySelector('div').appendChild(lastButton);
    lastButton.classList.add("next");
    lastButton.addEventListener('click', startQuiz);
    lastButton.style.display = 'none';
  
  function showResult() {

    let correctAnswers = 3;
    let titleText = 'Koniec Quizu!';
    let contentText = `Odpowiedziałaś dobrze na ${correctAnswers} z ${questions.length} pytań.`;

    const mainElement = document.querySelector('main');
    mainElement.innerHTML= `
      <p>${titleText}</p>
      <p>${contentText}</p>
    `;
    lastButton.style.display = 'block';
 
  }

  function startQuiz(){
     const mainElement = document.querySelector('main');
    mainElement.innerHTML= `
    <p>treść pytania</p>
    <radiogroup class="answers">         
        <label id="answer1_label"><input type="radio" id="answer1" name="answer" value="a"/>odpowiedź pierwsza</label>
        <label id="answer2_label"><input type="radio" id="answer2" name="answer" value="b"/>odpowiedź druga</label>
        <label id="answer3_label"></label><input type="radio" id="answer3" name="answer" value="c"/>odpowiedź trzecia</label>
    </radiogroup>
    `
    currentQuestion= 0; 
    showQuestion(currentQuestion);
    nextButton.style.display = 'block';
    lastButton.style.display = 'none';    
    ;
  }
  
  startQuiz();

  // Do ekranu końcowego (showResult) dodać przycisk ponownego rozpoczęcia quizu (“Jeszcze raz” czy “Od nowa”, “Restart”, nie mam więcej pomysłów)
  //  i powiązać go z funkcją startQuiz




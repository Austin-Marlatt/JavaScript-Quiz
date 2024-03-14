// assigned html elements to variables
const startButton = document.getElementById("start-button");
const submitButton = document.getElementById("submit-button");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const timer = document.getElementById("timer");
const finalScore = document.getElementById("final-score");
const initialEntry = document.getElementById("initial-entry");

// sets starting time, store variable saying the test is not complete
let countDown = 90;
let testFinished = false;

// array to store questions
const questions = [
  "Which HTML elments lets you link a JavaScipt file?",
  "How do you write 'Hello World' in an alert?",
  "How do you call a function in JavaScript?",
  "Which is the proper syntax to start an IF statement?",
  "How do you add a comment in JavaScript?",
  "How do you write an array in JavaScript?",
];

// arrays to store answers to each question
const answers1 = [
  "<script>", 
  "<link>", 
  "<js>", 
  "<scripting>"
];
const answers2 = [
  "alert('Hello World');",
  "alert.textcontent = 'Hello World'",
  "alertbox('Hello World');",
  "msg('Hello World');",
];
const answers3 = [
  "myFunction()",
  "call myFunction()",
  "function myFunction()",
  "run myFunction()",
];
const answers4 = [
  "if (i >= 10)",
  "if (i >= 10) then",
  "if i >= 10",
  "if i >= 10 then",
];
const answers5 = [
  "//comment", 
  "/comment/", 
  "<!--comment--!>", 
  "!comment!"
];
const answers6 = [
  "let letters = ['x','y','z']",
  "array letters = ['x','y','z']",
  "let letters('x','y','z');",
  "let letters = 'x','y','z'",
];

// function to run when last question is answered
function testEnd() {
  // global variable used again on script:js; 107 to stop timer
  testFinished = true;

  // removes timer
  timer.setAttribute("class", "hide");

  // displays final score
  finalScore.textContent = "Your final score is: " + countDown;

  // removes "hide" class from input area
  let saveScore = document.getElementById("save-score");
  saveScore.removeAttribute("class");
}

// function to run when "submit" button is pressed
function saveHighScore() {
// variable to store inititals input, trim to remove unwanted spaces
  let initials = initialEntry.value.trim();

  // checks if this array has been stored in local storage already, creates new array if not
  let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

  // object to store user initials / score
  let userScore = {
    initials: initials,
    score: countDown,
  };

  // adds new object to end of array
  highScores.push(userScore);

  // commits new array to local storage
  window.localStorage.setItem("highScores", JSON.stringify(highScores));

// lists previous highscores
  for (let i = 0; i < highScores.length; i++) {
    let scoreList = answers.appendChild(document.createElement("li"));
    scoreList.textContent =
      highScores[i].initials + " - " + highScores[i].score;
  }
}

// holds an interval timer
function timerInterval() {
  let timeLimit = setInterval(function () {
    // if test has been finished, stop the timer
    if (testFinished === true) {
      clearInterval(timeLimit);
    }
    // checks if countDown >= 1, if true, writes the current value then decrements
    if (countDown >= 1) {
      timer.textContent = countDown;
      countDown--;
      // when countdown < 1, sets timer to 0, clears the interval, alerts the user, and clears the page
    } else {
      timer.textContent = "0";
      clearInterval(timeLimit);
      question.setAttribute("class", "hide");
      answers.setAttribute("class", "hide");
      alert("Test Failed"); 
    }
    // 1000ms = 1s
  }, 1000);
}

// function to run on "start" button click
startButton.addEventListener("click", function () {
  question1();
  timerInterval();
  // hides start button
  startButton.setAttribute("class", "hide");
});

// function to run on "submit" button click
submitButton.addEventListener("click", function () {
  saveHighScore();
});

// function to run when the test starts, when answered, runs the next question function
function question1() {
  // writes the current question
  question.textContent = questions[0];

  // itteratres through the matching answer array and lists them by dynamically creating elements
  for (let i = 0; i < answers1.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers1[i]);
  }

  // function runs when any answer is selected
  function answerCheck(x) {
    // checks if selected answer is correct
    x.addEventListener("click", function (e) {
      if (e.target.value === answers1[0]) {
        // itterates through written list and removes it
        for (let i = 0; i < answers1.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        // runs the next question function
        question2();
      } else {
        for (let i = 0; i < answers1.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        question2();
        // wrong answer deducts 10 seconds from timer
        countDown = countDown - 10;
      }
    });
  }

  // assigns event listeners to all options
  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}

// same as question1()
function question2() {
  question.textContent = questions[1];

  for (let i = 0; i < answers2.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers2[i]);
  }

  function answerCheck(x) {
    x.addEventListener("click", function (e) {
      if (e.target.value === answers2[0]) {
        for (let i = 0; i < answers2.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        question3();
      } else {
        for (let i = 0; i < answers2.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        countDown = countDown - 10;
        question3();
      }
    });
  }

  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}

// same as question1()
function question3() {
  question.textContent = questions[2];

  for (let i = 0; i < answers3.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers3[i]);
  }

  function answerCheck(x) {
    x.addEventListener("click", function (e) {
      if (e.target.value === answers3[0]) {
        for (let i = 0; i < answers3.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        question4();
      } else {
        for (let i = 0; i < answers3.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        countDown = countDown - 10;
        question4();
      }
    });
  }

  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}

// same as question1()
function question4() {
  question.textContent = questions[3];

  for (let i = 0; i < answers4.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    // option.textContent = answers1[i];
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers4[i]);
  }

  function answerCheck(x) {
    x.addEventListener("click", function (e) {
      if (e.target.value === answers4[0]) {
        for (let i = 0; i < answers4.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        question5();
      } else {
        for (let i = 0; i < answers4.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        countDown = countDown - 10;
        question5();
      }
    });
  }

  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}

// same as question1()
function question5() {
  question.textContent = questions[4];

  for (let i = 0; i < answers5.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers5[i]);
  }

  function answerCheck(x) {
    x.addEventListener("click", function (e) {
      if (e.target.value === answers5[0]) {
        for (let i = 0; i < answers5.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        question6();
      } else {
        for (let i = 0; i < answers5.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
        }
        countDown = countDown - 10;
        question6();
      }
    });
  }

  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}

// same as question1(), exept runs testEnd when answered
function question6() {
  question.textContent = questions[5];

  for (let i = 0; i < answers6.length; i++) {
    answers
      .appendChild(document.createElement("li"))
      .setAttribute("id", "o" + i);
    const option = document.getElementById("o" + i);
    option
      .appendChild(document.createElement("input"))
      .setAttribute("id", "ob" + i);
    const optionButton = document.getElementById("ob" + i);
    optionButton.setAttribute("type", "button");
    optionButton.setAttribute("value", answers6[i]);
  }

  function answerCheck(x) {
    x.addEventListener("click", function (e) {
      if (e.target.value === answers6[0]) {
        for (let i = 0; i < answers6.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
          question.remove();
        }
        // runs function to end the test
        testEnd();
      } else {
        for (let i = 0; i < answers6.length; i++) {
          const element = document.getElementById("o" + i);
          element.remove();
          question.remove();
        }
        countDown = countDown - 10;
        // runs function to end the test
        testEnd();
      }
    });
  }

  answerCheck(document.getElementById("ob0"));
  answerCheck(document.getElementById("ob1"));
  answerCheck(document.getElementById("ob2"));
  answerCheck(document.getElementById("ob3"));
}
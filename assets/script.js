// assigned html elements to variables
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const timer = document.getElementById("timer");

// score is set to 0 on page load
score = 0;

// object to store scores
const userscores = {
    // signature: signature,
    score: score
};

// array to store questions
const questions = ["Which HTML elments lets you link a JavaScipt file?","How do you write 'Hello World' in an alert?","How do you call a function in JavaScript?","Which is the proper syntax to start an IF statement?","How do you add a comment in JavaScript?","How do you write an array in JavaScript?"]

// arrays to store answers to each question
const answers1  = ["<script>","<link>","<js>","<scripting>"];
const answers2  = ["alert('Hello World');","alert.textcontent = 'Hello World'","alertbox('Hello World');","msg('Hello World');"];
const answers3  = ["myFunction()","call myFunction()","function myFunction()","run myFunction()"];
const answers4  = ["if (i >= 10)","if (i >= 10) then","if i >= 10","if i >= 10 then"];
const answers5  = ["//comment","/comment/","<!--comment--!>","!comment!"];
const answers6  = ["let letters = ['x','y','z']","array letters = ['x','y','z']","let letters('x','y','z');","let letters = 'x','y','z'"];

    // function that holds a interval timer
function timerInterval() {
    // starts at 60
    let countDown = 60;

    // checks if countDown >= 1, if true, writes the current value then decrements
    let timeLimit = setInterval(function() {
        if (countDown >= 1) {
            timer.textContent = countDown;
            countDown--;
    // when countdown < 1, clears the text in the timer and clears the interval
        } else {
            timer.textContent = "";
            clearInterval(timeLimit);
            alert("Test Failed");
        }
// 1000ms = 1s, 60s = 1m
    }, 1000);
};

// listens for a click on the button element before starting the timer
startButton.addEventListener("click", function() {
    testStart();
    timerInterval();
});

function testStart() {

    question.textContent = questions[0];

    for (let i=0; i < answers1.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","a"+i);
        let ansr = document.getElementById("a"+i);
        ansr.textContent = answers1[i];
    };

}

answers.addEventListener("click", function(event) {
    if(event.target.textContent === answers1[0] || answers2[0] || answers3[0] || answers4[0] || answers5[0] || answers6[0]) {
        score++;
        
    }
})
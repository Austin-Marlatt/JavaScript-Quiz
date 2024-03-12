// assigned html elements to variables
const startButton = document.getElementById("start-button");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const timer = document.getElementById("timer");
const finalScore = document.getElementById("final-score");

// sets starting time, store variable saying the test is not complete
let countDown = 90;
let testFinished = false;


// array to store questions
const questions = ["Which HTML elments lets you link a JavaScipt file?","How do you write 'Hello World' in an alert?","How do you call a function in JavaScript?","Which is the proper syntax to start an IF statement?","How do you add a comment in JavaScript?","How do you write an array in JavaScript?"]

// arrays to store answers to each question
const answers1  = ["<script>","<link>","<js>","<scripting>"];
const answers2  = ["alert('Hello World');","alert.textcontent = 'Hello World'","alertbox('Hello World');","msg('Hello World');"];
const answers3  = ["myFunction()","call myFunction()","function myFunction()","run myFunction()"];
const answers4  = ["if (i >= 10)","if (i >= 10) then","if i >= 10","if i >= 10 then"];
const answers5  = ["//comment","/comment/","<!--comment--!>","!comment!"];
const answers6  = ["let letters = ['x','y','z']","array letters = ['x','y','z']","let letters('x','y','z');","let letters = 'x','y','z'"];

function testEnd() {

    testFinished = true;
    

    finalScore.textContent = "Your final score is: " + countDown;

    let initialPrompt = finalScore.appendChild(document.createElement("p"));
    initialPrompt.textContent = "Enter Initials: ";

    let initialEntry = initialPrompt.appendChild(document.createElement("input")).setAttribute("type", "text");

    let initials = initialEntry.value.trim();

    let highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    let userScore = {
        initials: initials,
        score: finalScore,
    };

    highScores.push(userScore);
    window.localStorage.setItem("highScores", JSON.stringify("highScores"));



}

// function that holds a interval timer
function timerInterval() {



    let timeLimit = setInterval(function() {
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
};

// listens for a click on the button element before starting the timer and test
startButton.addEventListener("click", function() {
    question1();
    timerInterval();
});



function question1() {

    question.textContent = questions[0];

    for (let i=0; i < answers1.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers1[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {
    
            if (e.target.value === answers1[0]) {

                for (let i=0; i < answers1.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                question2();
                } else {
                    for (let i=0; i < answers1.length; i++) {
                        const element = document.getElementById("o"+i);
                        element.remove();
                    }
                question2();
                countDown = countDown-10;
            } 

        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));

}

function question2() {
    question.textContent = questions[1];

    for (let i=0; i < answers2.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers2[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {
    
            if (e.target.value === answers2[0]) {

                for (let i=0; i < answers2.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                question3();
            } else {
                for (let i=0; i < answers2.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                countDown = countDown-10;
                question3();
            } 
    
        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));
}

function question3() {
    question.textContent = questions[2];

    for (let i=0; i < answers3.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers3[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {

            if (e.target.value === answers3[0]) {

                for (let i=0; i < answers3.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                question4();
            } else {
                for (let i=0; i < answers3.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                countDown = countDown-10;
                question4();
            } 

        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));
}

function question4() {
    question.textContent = questions[3];

    for (let i=0; i < answers4.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers4[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {

            if (e.target.value === answers4[0]) {

                for (let i=0; i < answers4.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                question5();
            } else {

                for (let i=0; i < answers4.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                countDown = countDown-10;
                question5();
            } 

        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));
}

function question5() {
    question.textContent = questions[4];

    for (let i=0; i < answers5.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers5[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {

            if (e.target.value === answers5[0]) {

                for (let i=0; i < answers5.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                question6();
            } else {

                for (let i=0; i < answers5.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                }
                countDown = countDown-10;
                question6();
            } 

        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));
}

function question6() {
    question.textContent = questions[5];

    for (let i=0; i < answers6.length; i++) {
        answers.appendChild(document.createElement("li")).setAttribute("id","o"+i);
        const option = document.getElementById("o"+i);
        // option.textContent = answers1[i];
        option.appendChild(document.createElement("input")).setAttribute("id", "ob"+i);
        const optionButton = document.getElementById("ob"+i);
        optionButton.setAttribute("type", "button");
        optionButton.setAttribute("value", answers6[i]);
    };

    function answerCheck(x) {

        x.addEventListener("click", function(e) {

            if (e.target.value === answers6[0]) {

                for (let i=0; i < answers6.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                    question.remove();
                }
                testEnd();
            } else {

                for (let i=0; i < answers6.length; i++) {
                    const element = document.getElementById("o"+i);
                    element.remove();
                    question.remove();
                }
                countDown = countDown-10;
                testEnd();
            } 

        });
    }

    answerCheck(document.getElementById("ob0"));
    answerCheck(document.getElementById("ob1"));
    answerCheck(document.getElementById("ob2"));
    answerCheck(document.getElementById("ob3"));
}
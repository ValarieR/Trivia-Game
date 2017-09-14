//Trivia HW Psuedocode

$(document).ready(function() {

	$("#questionAnswers").hide();

    var myQuestions = [{
            question: "Who was the first woman to serve on the U.S. Supreme Court?",
            answers: {
                1: "Abigail Adams",
                2: "Ruth Bader Ginsburg",
                3: "Sandra Day O'Connor",
                4: "Sonia Sotomayor"
            },
            correctAnswer: "Sandra Day O'Connor"
        },
        {
            question: "Which civil rights loving woman co-founded a group dedicated to helping homeless young drag queens and trans women of color?",
            answers: {
                1: "Mae Jemison",
                2: "Sylvia Rivera",
                3: "Bell Hooks",
                4: "Bessie Coleman"
            },
            correctAnswer: "Sylvia Rivera"
        }

    ];



    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    var timeRemaining = 15;
    var currentLevel = 0;
console.log(myQuestions[currentLevel].correctAnswer);


    //  At initial load of page

    //debugger;

    //Welcome screen appears

    function welcomeImage() {
        var img = $("<img>");
        img.attr("src", "assets/images/nasty-welcome.png");
        $('#image-container').append(img);
    };
    welcomeImage();

    console.log("test");


    //Clickable button to begin playing appears
    //On click of start

    $("#button").on("click", function() {

        //Welcome info and button disappear/change
        $("#questionAnswers").show();
        $("#image-container").empty();
        $("#button").hide();
        $("#button").addClass("next");
        $("#correct").text(correctCount);
        $("#wrong").text(wrongCount);
        //currentLevel = 0;
        createQuestion(currentLevel);

    });
    //Question appears
    //Timer set and appears
    //4 answers appear


    function timerReset() {
        timeRemaining = 0;
        clearInterval(questionIntervalId);
        console.log("we runnin the time reset")
    };

    function timerMain() {
        timeRemaining--;
        $("#counter").text("Time Remaining: " + timeRemaining);
        if (timeRemaining = 0) {
            timerReset();
            wrongAnswer();
        }
    };


    // function restart() {
    //     correctCount = 0;
    //     wrongCount = 0;
    //     unanswered = 0;
    //     currentLevel = 0;
    //     createQuestion(currentLevel);
    // }

    //add div elements to hold these values on the html page
    function createQuestion(x) {
        if (x < myQuestions.length) {
            $("#quizQuestions").text(myQuestions[x].question);
            $(".answers-1").text(myQuestions[x].answers["1"]);
            $(".answers-2").text(myQuestions[x].answers["2"]);
            $(".answers-3").text(myQuestions[x].answers["3"]);
            $(".answers-4").text(myQuestions[x].answers["4"]);
            $(".timer").text("Time Remaining: " + timeRemaining);

            questionIntervalId = setInterval(function() {
                timerMain();
            }, 1000);

        } else {
            gameEnd();
        }
           // console.log(myQuestions[x].answers["1"]);
    };



    function correctAnswer() {
    	var correctAnswer = myQuestions[currentLevel].correctAnswer;

        $("#quizQuestions").append("The correct answer was" + myQuestions[currentLevel].correctAnswer);
        answerTimeout = setTimeout(function() {
            createQuestion(currentLevel);
        }, 5000);
    }

    function wrongAnswer() {
        $("#quizQuestions").append("Seriously? How didn't you know the answer was" + myQuestions[currentLevel].correctAnswer);
        answerTimeout = setTimeout(function() {
            createQuestion(currentLevel);
        }, 5000);
    }

    function gameEnd() {
        $("#quizQuestions").text("Well done! Try again?");
        $("#button").show();
        $("#button").text("Yes, please!")
    }

    $(".answers").on("click", function() {
        var yourSelection = $(this).attr("value");

        // console.log('this is my current level ' + myQuestions[currentLevel]);
        // console.log('this is my correct answer ' + myQuestions[currentLevel].correctAnswer);
        
        if ((yourSelection === myQuestions[currentLevel].correctAnswer) && (currentLevel < myQuestions.length)) {

            correctAnswer();
            timerReset();
            console.log('if statement is true - interating currentLevel')
            currentLevel++;
            createQuestion();

        } 

        else {

            wrongAnswer();
            timerReset();
            console.log('if statement is false - interating currentLevel')
            currentLevel++;
            gameEnd();
        }
    })

});

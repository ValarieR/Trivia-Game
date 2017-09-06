//Trivia HW Psuedocode

//	At initial load of page

$(document).ready(function() {

    //Welcome screen appears

    function welcomeImage() {
        var img = $("<img>");
        img.attr("src", "assets/images/nasty-welcome.png");
        $('#image-container').append(img);
    };
    welcomeImage();


    //Clickable button to begin playing appears
    //On click of start

    $("#begin").on("click", function() {

        //Welcome info and button disappear
        $("#image-container").empty();
        $("#begin").remove();

        //Timer starts, set to 30 secs
      
        var timer = $(".timer").startTimer();
		$("#counter").append(timer);



        //Question appears

    //Bank of questions and answers

	var myQuestions = [{
      question: "Who was the first woman to serve on the U.S. Supreme Court?",
      answers: ["Abigail Adams",
        "Ruth Bader Ginsburg",
        "Sandra Day O'Connor",
        "Sonia Sotomayor"],
      correctAnswer: 2
    	}

    	];

        var currentQuestion = $("#quizQuestions").text(myQuestions);

        //4 answers appear

    });

    //Player clicks

    //IF player picks correct answer in time, win msg

    //If player picks wrong A, loss msg

    //If time runs out, time out msg

    //Button to continue appears

    //Player clicks replays through the loop of possible Q’s

    //On last Q

    //Start over button appears

    //Good job msg appears

    //Total count of correct & wrong appear

    //Start over cycles back to line 2 of this


});
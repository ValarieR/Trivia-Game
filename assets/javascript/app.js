//Trivia HW Psuedocode

$(document).ready(function() {

var myQuestions = [
		{
      question: "Who was the first woman to serve on the U.S. Supreme Court?",
      answers: {
      	1:"Abigail Adams",
        2:"Ruth Bader Ginsburg",
        3:"Sandra Day O'Connor",
        4:"Sonia Sotomayor"
    	},
      correctAnswer: ["3", "Sandra Day O'Connor"]
    	}, 
    	{
      question: "Which civil rights loving woman co-founded a group dedicated to helping homeless young drag queens and trans women of color?",
      answers: {
      	1:"Mae Jemison",
        2:"Sylvia Rivera",
        3:"Bell Hooks",
        4:"Bessie Coleman"
    	},
      correctAnswer: ["2", "Sylvia Rivera"]
    	}

    	];

	var correctCount = 0;
	var wrongCount = 0;
	var unanswered = 0;

	var timeRemaining = 30;
	var currentLevel = 0;

	// var quizQuestions = $("#quizQuestions");
	// var questionAnswers = $("#questionAnswers");



//	At initial load of page

debugger;

    //Welcome screen appears

    function welcomeImage() {
        var img = $("<img>");
        img.attr("src", "assets/images/nasty-welcome.png");
        $('#image-container').append(img);
    };
    welcomeImage();

    console.log(test);


    //Clickable button to begin playing appears
    //On click of start

    $("#button").on("click", function() {

        //Welcome info and button disappear/change
        $("#image-container").empty();
        $("#button").text('Next');

        //Timer starts, set to 30 secs
      
        //var timer = $(".timer").startTimer();
		//$("#counter").append(timer);

		$("#correct").append(correctCount);
		$("#wrong").append(wrongCount);

});
        //Question appears

        //var img1 = $("<img>");
        //img1.attr("src", "assets/images/kwolek-gloves.jpg");
        //$('#image-container').append(img1);

        //4 answers appear


		//var qCount = 0;

		
		function createQuestion(x) {	
			if (x<myQuestions.length) {
				$("#quizQuestions").append(myQuestions[x].question);
				//quizQuestions.html("<h1>" + myQuestions[x].question + "</h1>");
				$("#questionAnswers").append(myQuestions[x].answers.1);
				$("#questionAnswers").append(myQuestions[x].answers.2);
				$("#questionAnswers").append(myQuestions[x].answers.3);
				$("#questionAnswers").append(myQuestions[x].answers.4);
					
			}
		};		

console.log(myQuestions[x].answers.1);

   
    	

        //4 answers appear

        //debugger;

        // for( var j = 0; j < myQuestions[x].answers.length; j++ ) {
        // 	// var answerOptions = $("<button>");
        // 	// answerOptions.attr('type', 'button');
        // 	// $("#questionAnswers").append(answerOptions);
        // 	// answerOptions.attr("class", "list-group-item");
        // 	// answerOptions.attr('value', myQuestions[x].amswers[j]);
        // 	// answerOptions.after(myQuestions[x].amswers[j]);
        // 	// qCount++;


        // 	var input = $('<input>');
        // 	$("#questionAnswers").append(input);
        // 	input.attr('type', 'radio');
        // 	input.attr('value', myQuestions[x].answers[j]);
        // 	input.after(myQuestions[x].answers[j]);
        // 	//$("<input>").attr("class", "radio")
        // }



		


   
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



//Trivia HW Psuedocode

$(document).ready(function() {

var myQuestions = [{
      question: "Who was the first woman to serve on the U.S. Supreme Court?",
      answers: ["Abigail Adams",
        "Ruth Bader Ginsburg",
        "Sandra Day O'Connor",
        "Sonia Sotomayor"],
      correctAnswer: 2
    	}, {
      question: "Which civil rights loving woman co-founded a group dedicated to helping homeless young drag queens and trans women of color?",
      answers: ["Mae Jemison",
        "Sylvia Rivera",
        "Bell Hooks",
        "Bessie Coleman"],
      correctAnswer: 1
    	}

    	];

	var correctCount = 0;
		var wrongCount = 0;

//	At initial load of page



    //Welcome screen appears

    function welcomeImage() {
        var img = $("<img>");
        img.attr("src", "assets/images/nasty-welcome.png");
        $('#image-container').append(img);
    };
    welcomeImage();


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


        //Question appears

        //var img1 = $("<img>");
        //img1.attr("src", "assets/images/kwolek-gloves.jpg");
        //$('#image-container').append(img1);

        //4 answers appear


		var qCount = 0;

		function createQuestion() {			

    	$("#quizQuestions").append(myQuestions[qCount].question);
    	

        //4 answers appear

        debugger;

        for( var j = 0; j < myQuestions[qCount].answers.length; j++ ) {
        	var answerOptions = $("<button>");
        	answerOptions.attr('type', 'button');
        	$("#questionAnswers").append(answerOptions);
        	answerOptions.attr("class", "list-group-item");
        	answerOptions.attr('value', myQuestions[qCount].amswers[j]);
        	answerOptions.after(myQuestions[qCount].amswers[j]);


        	// var input = $('<input>');
        	// $("#questionAnswers").append(input);
        	// input.attr('type', 'radio');
        	// input.attr('value', myQuestions[qCount].answers[j]);
        	// input.after(myQuestions[qCount].answers[j]);
        	// $("<input>").attr("class", "radio")
        }



		};

		/*function whichRadio() {
			

			}*/
		})



		/*var userPick = [];

		$("button").on("click", function() {
			if (userPick === myQuestions.correctAnswer) {
				correctCount++;


			} else {
				wrongCount++;

			}


		})*/
   
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


;
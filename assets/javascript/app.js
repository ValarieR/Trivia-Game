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

	$("#begin").on("click", function() {

		
	})

//On click of start

	//Welcome info and button disappear

	//Timer starts, set to 30 secs

	//Question appears

	//4 answers appear

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

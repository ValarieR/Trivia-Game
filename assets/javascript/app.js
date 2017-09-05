var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz(argument) {
	// body...
}

function showResults(argument) {
	// body...
}

//display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


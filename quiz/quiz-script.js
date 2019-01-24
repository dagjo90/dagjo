var currentQuestion = 0;
var score = 0;
var totQuestionsInit = questions.length;
var totQuestions = selectQuestions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var Button = document.getElementById('Button');
var resultCont = document.getElementById('result');
var resultat = document.getElementById('resultat');
var selectedQuestions = [];


function selectQuestions () {
	var i = 10;
	while (i > 0) {
		var x = Math.floor(Math.random()*totQuestionsInit);

		if(selectedQuestions.includes(questions[x])) {
			var x = Math.floor(Math.random()*totQuestionsInit);
		} else {
			selectedQuestions.push(questions[x]);
		i--;
	}}
loadQuestion(currentQuestion);
}



function loadQuestion (questionIndex) {

	var q = selectedQuestions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('N oubliez pas de faire votre choix !');
		return;
	}
	var answer = selectedOption.value;
	if(selectedQuestions[currentQuestion].answer == answer){
		score += 10;
	}

	selectedOption.checked = false;
	currentQuestion++;

	if(currentQuestion === 9){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion === 10){
		container.style.display = 'none';
		resultCont.style.display = 'block';
		resultat.textContent = "Votre score: " + score + "/100";
		return;
	}
	loadQuestion(currentQuestion);
}

selectQuestions();

$(document).ready( function(){
    submitButton();
    questionaireSequence.questionOne();


});

var nextQuestion;

function Question(question, prompt) {
    this.question = question;
    this.prompt = prompt;
}


Question.prototype.show = function() {
    this.prompt.text(this.question);
}

function questionFactory(question, prompt) {
    return new Question(question, prompt);
}

function submitButton() {
    $(".submit").click(function(event) {
        event.stopPropagation();
        
    })
}


function showQuestionOne() {
    var header = $(".question-header");
    header.text("Question 1");
    var questionOne = questionFactory("this is a test", $("#question"));
    questionOne.show();
}

var questionaireSequence = {
    questionOne: function() {
        showQuestionOne();
    }
}




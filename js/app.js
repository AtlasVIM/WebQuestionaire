

$(document).ready( function(){
    submitButton();
    questionaireSequence.questionOne();


});

var answerSheet = {}

var i = 0;

function Question(question, element) {
    this.question = question;
    this.element = element;
}


Question.prototype.show = function() {
    this.element.text(this.question);
}

function questionFactory(question, element) {
    return new Question(question, element);
}

function submitButton() {
    $(".submit").click(function(event) {
        event.stopPropagation();
        
        
        //add functionality. submit should save the answer. the goal is to download the answers as a file later. 
        //also when you click submit it should prompt the next question
    })
}


function showQuestionOne() {
    $("#answer-input").name = "questionOne";
    var header = $(".question-header");
    header.text("Question 1");
    var questionText = questionFactory("this is a test", $("#question"));
    questionText.show();

    $("#answer-input").change(updateInputValue);
}

function showQuestionTwo() {

    $("#answer-input").name = "questionTwo";
    var header = $(".question-header");
    header.text("Question 2");
    var questionText = questionFactory("this is another test", $("#question"));
    questionText.show();

    $("#answer-input").change(updateInputValue);
}



function updateInputValue(event) {
    answerSheet[event.target.name] = event.target.value;
    console.log(answerSheet);
}

var questionaireSequence = {
    questionOne: function() {
        showQuestionOne();
    },
    questionTwo: function() {
        showQuestionTwo();
    }
}







const externals = {}
const internals = {}


function Question(question, element) {
    this.question = question;
    this.element = element;
}


Question.prototype.show = function() {
    this.element.innerText = this.question;
}

externals.createQuestion = function(question, element) {
    return new Question(question, element);
    

}

export default externals
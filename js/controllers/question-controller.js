import questionView from '../view/question-view.js'
import questionModel from '../models/question.js'

const internals = {}
const externals = {}

internals.questionNumber = 0;
internals.questionArea = document.getElementById('question')
internals.questionList = [{question: 'hi'}, {question: 'bye'}, {question: 'cringe'}
]


internals.bindButton = function() {
    if(internals.questionNumber <= 0) {
            document.getElementById('back-button').disabled = true;
    }

    document.getElementById('back-button').addEventListener( 'click',() => {
        console.log(internals.questionNumber);

        if(internals.questionNumber > 0) {
            internals.questionNumber--;
        }
        try {
        
        internals.getNextQuestion();
        } catch (e) {
            alert('There is no previous Question')
        }
    });
      document.getElementById('submit-button').addEventListener('click', () => {
        console.log(internals.questionNumber);
        
        if(internals.questionNumber < internals.questionList.length) {
            internals.questionNumber++;
        }
        if(internals.questionNumber > 0 ) {
            document.getElementById('back-button').disabled = false;
        }

        
        try {
            internals.getNextQuestion();
        } catch (e) {
            console.log(e.stack);
            alert('There is no next Question')
        };

    })
}

internals.getNextQuestion = function() {
    
    const question = questionModel.createQuestion(internals.questionList[internals.questionNumber].question, internals.questionArea)
   questionView.render(question)
}


externals.start = function()   {
    console.log('hi');
    internals.bindButton();
    internals.getNextQuestion()

}

export default externals
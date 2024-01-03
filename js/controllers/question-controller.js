import questionView from '../view/question-view.js'
import questionModel from '../models/question.js'
import saveService from '../services/save-service.js'

const internals = {}
const externals = {}

internals.questionNumber = 0;
internals.questionArea = document.getElementById('question')
internals.questionList = [{question: 'question 1', answer:''}, {question: 'question 2',answer:''}, {question: 'question 3', answer:''}
]


internals.bindButton = function() {
    if(internals.questionNumber <= 0) {
            document.getElementById('back-button').disabled = true;
    }
// Back-button Binding
    document.getElementById('back-button').addEventListener( 'click',() => {
        console.log(internals.questionNumber);

    if(internals.questionNumber < 0) {
            document.getElementById('back-button').disabled = true;
    }

        if(internals.questionNumber > 0) {
            internals.questionNumber--;
        }
        try {
        
        internals.getNextQuestion(internals.questionNumber);
        } catch (e) {
            alert('There is no previous Question')
        }
    });

//Submit button binding
    document.getElementById('submit-button').addEventListener('click', () => {
        console.log(internals.questionNumber);
        


        
        try {
            internals.questionList[internals.questionNumber].answer = document.getElementById('answer-input').value;
            
            console.log(internals.questionList[internals.questionNumber].answer);
            
            saveService.save(internals.questionList[internals.questionNumber], internals.questionNumber);


            if(internals.questionNumber < internals.questionList.length) {
                console.log(internals.questionNumber + ' ' + internals.questionList.length);
                internals.questionNumber++;
            } else {
                console.log('no more questions');
            }
        
            if(internals.questionNumber > 0 ) {
                document.getElementById('back-button').disabled = false;
            }

            
            internals.getNextQuestion(internals.questionNumber);
            console.log(internals.questionNumber);
        
        } catch (e) {
            console.log(e.stack);
            alert('There is no next Question')
        };

    })
}

internals.getNextQuestion = function(i) {
    
   questionView.render(internals.questionList[i])
}


externals.start = function()   {
    console.log('hi');
    internals.bindButton();
    internals.getNextQuestion(0)

}

export default externals
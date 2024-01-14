import questionView from '../view/question-view.js'
import saveService from '../services/save-service.js'
import questionList from'../models/question-list.js'

const internals = {}
const externals = {}

internals.questionNumber = 0;
internals.questionArea = document.getElementById('question')


internals.bindButton = function() {
    if(internals.questionNumber <= 0) {
            document.getElementById('back-button').disabled = true;
            document.getElementById('download-button').disabled = true;
    }
// Back-button Binding
    document.getElementById('back-button').addEventListener( 'click',() => {
        console.log(internals.questionNumber);

    if(internals.questionNumber = 0) {
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
            questionList[internals.questionNumber].answer = document.getElementById('answer-input').value;
            
            console.log(questionList[internals.questionNumber].answer);
            
            saveService.save(questionList[internals.questionNumber], internals.questionNumber);


            if(internals.questionNumber < questionList.length) {
                console.log(internals.questionNumber + ' ' + questionList.length);
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
            alert('All Answers Submitted')
        };

    })

    //Download Button binding
    document.getElementById('download-button').addEventListener('click', ()=>{
        try{
        saveService.downloadAnswerSheet();
        } catch (e) {
        console.log(e.stack);
        }
    })
}

internals.getNextQuestion = function(i) {
    
   questionView.render(questionList[i])
   if (i >= questionList.length-1) {
    document.getElementById('download-button').disabled = false;
   } else {
    document.getElementById('download-button').disabled = true;
   }
   if ( i = 0) {
    document.getElementById('back-button').disabled = true;
   } else {
    document.getElementById('back-button').disabled = false;
   }
}


externals.start = function()   {
    internals.bindButton();
    internals.getNextQuestion(0)

}

export default externals


const externals = {}
const internals = {}
const savedData = [{question : 'hi' , answer: ''}]

externals.save = function(questionModel, index) {
    
    savedData[index] = {
        question : questionModel.question,
        answer : questionModel.answer
    }
    
    
    console.log(savedData[index]);
}

export default externals;
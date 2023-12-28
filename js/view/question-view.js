

const externals = {}

externals.render = function(questionModel) {
   const questionDiv = document.getElementById('question')
    const inputArea = document.getElementById('answer-input')
   questionDiv.innerText = questionModel.question;
   inputArea.value = ''
   inputArea.value = questionModel.answer;

}

export default externals
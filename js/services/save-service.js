

const externals = {}
const internals = {}
const savedData = [{question : '' , answer: ''}]

externals.save = function(questionModel, index) {
    
    savedData[index] = {
        question : questionModel.question,
        answer : questionModel.answer
    }
    
    
    console.log(savedData[index]);
}

internals.answersToJson = function(answerArr) {

    const content = encodeURIComponent(answerArr.map(obj => JSON.stringify(obj,null,2)).join('\n\n'));
    return `data:text/plain;charset=utf-8,${content}`

}

internals.createAnswerSheetURL = function(dataURL, fileName) {
    const htmlNode = document.createElement('a');

    htmlNode.href = dataURL;
    htmlNode.download = fileName;
    document.getElementById('question-container').appendChild(htmlNode);
    htmlNode.click();
    document.getElementById('question-container').removeChild(htmlNode);

    console.log(htmlNode.href + '\n' + htmlNode.download);

}

externals.downloadAnswerSheet = function() {
    const fileContent = internals.answersToJson(savedData);
    const fileName = 'character.txt';

    internals.createAnswerSheetURL(fileContent,fileName);

}

export default externals;


const externals = {}

externals.render = function(prompt) {
   const questionDiv = document.getElementById('question')

   questionDiv.innerText =prompt.question;
}

export default externals
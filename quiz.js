'use strict';

$(document).ready(() => {
    // name the container with class 'quiz-questions' as container
    const container = $('.quiz-questions');

    questions.forEach((questionData, index) => {
        const question = new Question(questionData, index);
        if (index===0 || index===1){
            question.addToDOM($('#quiz1'));
        }
        else{
            question.addToDOM($('#quiz2'));
        }
    });

    container.one().on('click', '.grade-button', function(event) {  //when all .grade-button in container is clicked
        const gradeButton = $(event.target);  //get the specific gradeButton that was clicked

        const selectedAnswer = gradeButton.closest('.question').find('input[type="radio"]:checked').val();
        //find the value of the checked radio button that is closest(in the parent) to gradeButton

        // Get the correct answer stored in the data-answer attribute of the grade button
        const correctAnswer = gradeButton.data('answer');

        // Clear previous result classes before grading
        let questionDiv=gradeButton.closest('.question');
        let resulttext=questionDiv.find('.resultText');
        questionDiv.removeClass('correct wrong');

        if (selectedAnswer === correctAnswer) {
            // if the answer is right
            questionDiv.addClass('correct');
            resulttext.text("Correct!");
        } else {
            // if the answer is incorrect
            questionDiv.addClass('wrong');
            resulttext.text("Wrong!");
        }
    });

    
});

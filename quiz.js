$(document).ready(function() {
    const container = $('.quiz-questions');

    questions.forEach(function(questionData, index) {
        const question = new Question(questionData, index);
        question.addToDOM(container);
    });

    // event handler for grading individual questions
    container.on('click', '.grade-button', function() {
        const questionDiv = $(this).closest('.question');
        const selectedAnswer = questionDiv.find('input[type="radio"]:checked').val();

        const correctAnswer = $(this).data('answer');

        questionDiv.removeClass('correct wrong');

        if (selectedAnswer == correctAnswer) {
            questionDiv.addClass('correct');  // adds 'correct' class if answer is correct
            $(this).text('Correct!');
        } else {
            questionDiv.addClass('wrong');  // adds 'wrong' class if answer is incorrect
            $(this).text('Wrong!');
        }
    });
});

//main javascript area
/*<form quizform="form">
        <p>    
            <label for="wbur_button">WBUR 90.9 FM</label>
            <input type="radio" name="station" value="wbur" id="wbur_button">
        </p>
        <p>
            <label for="wbur_button">WBUR 90.9 FM</label>
            <input type="radio" name="station" value="wbur" id="wbur_button">
        </p>
        <p>
            <label for="wbur_button">WBUR 90.9 FM</label>
            <input type="radio" name="station" value="wbur" id="wbur_button">
        </p>
        <p>
            <label for="wbur_button">WBUR 90.9 FM</label>
            <input type="radio" name="station" value="wbur" id="wbur_button">
        </p>
        <p><input type="button" value="Grade"></p>
        <p><button type='button'>grade</button></p>
    </form>*/

// quiz.js

// quiz.js

$(document).ready(function() {
    // Select the container where questions will be added
    const container = $('.quiz-questions');

    // Loop through each question in the questions array
    questions.forEach(function(questionData, index) {
        // Create a new Question object for each question
        const question = new Question(questionData, index);
        // Add the question to the container
        question.addToDOM(container);
    });

    // Event handler for grading individual questions
    container.on('click', '.grade-button', function() {
        // Find the question container and the selected answer
        const questionDiv = $(this).closest('.question');
        const selectedAnswer = questionDiv.find('input[type="radio"]:checked').val();

        // Retrieve the correct answer from data attribute
        const correctAnswer = $(this).data('answer');

        // Remove previous result styles
        questionDiv.removeClass('correct wrong');

        // Check if the selected answer is correct
        if (selectedAnswer === correctAnswer) {
            questionDiv.addClass('correct');  // Add 'correct' class if answer is correct
            $(this).text('Correct!');
        } else {
            questionDiv.addClass('wrong');  // Add 'wrong' class if answer is incorrect
            $(this).text('Wrong!');
        }
    });
});

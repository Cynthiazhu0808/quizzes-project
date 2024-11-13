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

// Wait until the DOM is ready before executing the code
$(document).ready(() => {
    // Assuming there is a container in the HTML with class 'quiz-questions'
    const container = $('.quiz-questions');

    // Loop through the questions array and create a Question instance for each one
    questions.forEach((questionData, index) => {
        // Create a new Question object for each question
        const question = new Question(questionData, index);

        // Add the question to the DOM in the specified container
        question.addToDOM(container);
    });

    // Event listener for individual question grading (using event delegation)
    container.on('click', '.grade-button', function(event) {
        // Get the button that was clicked
        const gradeButton = $(event.target);

        // Find the selected answer by looking for the checked radio button in the same question container
        const selectedAnswer = gradeButton.closest('.question').find('input[type="radio"]:checked').val();

        // Get the correct answer stored in the data-answer attribute of the grade button
        const correctAnswer = gradeButton.data('answer');

        // Clear previous result classes before grading
        gradeButton.closest('.question').removeClass('correct wrong');

        // Check if the selected answer is correct
        if (selectedAnswer === correctAnswer) {
            // Mark as correct if the answer is right
            gradeButton.closest('.question').addClass('correct');
            gradeButton.text('Correct!');
        } else {
            // Mark as wrong if the answer is incorrect
            gradeButton.closest('.question').addClass('wrong');
            gradeButton.text('Wrong!');
        }
    });

    // Event listener for grading all questions at once
    $('#gradeButton').click(() => {
        // Loop through each question div to grade it
        $('.question').each(function() {
            const questionContainer = $(this);
            const gradeButton = questionContainer.find('.grade-button');

            // Find the selected answer for each question
            const selectedAnswer = questionContainer.find('input[type="radio"]:checked').val();

            // Get the correct answer from the grade button's data attribute
            const correctAnswer = gradeButton.data('answer');

            // Clear any previous results
            questionContainer.removeClass('correct wrong');

            // Check if the selected answer is correct and apply the result
            if (selectedAnswer === correctAnswer) {
                questionContainer.addClass('correct');
                gradeButton.text('Correct!');
            } else {
                questionContainer.addClass('wrong');
                gradeButton.text('Wrong!');
            }
        });
    });
});


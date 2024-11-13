class Question {
    constructor(questionData, questionNumber) {
        this.questionData=questionData;
        this.questionNumber=questionNumber;
        let questionDiv = $('<div>').addClass('question'); //create a div with class question

        let questionText = $('<p>').text(questionData.Q);
        questionDiv.append(questionText);

        ['A', 'B', 'C', 'D'].forEach(option => {
            // create a label with the text of each option
            let label = $('<label>').text(questionData[option]);

            // create a radio button, with <input> tag, type as radio, and value set to be option
            let radioButton = $('<input>')
                .attr('type', 'radio')
                .attr('name', `Q${questionNumber}`) // unique name for each question
                .val(option);

            // Add radio button inside label, and then add label to the questionDiv
            label.append(radioButton);
            questionDiv.append(label);
        });

        // "Grade" button with data-answer attribute to store the correct answer
        let gradeButton = $('<button>')
            .addClass('grade-button')
            .text('Grade')
            .attr('data-answer', questionData.ANS);
        
        // Append the grade button to the question container
        questionDiv.append(gradeButton).append('<br>');
        this.questionDiv=questionDiv;
    };

    // Method to add the question to a specified container on the page
    addToDOM(location) {
        $(location).append(this.questionDiv);
    }
}

// Question.js

class Question {
    constructor(questionData, questionNum) {
        this.domElement = this.createQuestionDOM(questionData, questionNum);
    }

    createQuestionDOM(questionData, questionNum) {
        const questionDiv = $('<div>').addClass('question');

        // Paragraph for the question text
        const questionText = $('<p>').text(questionData.Q);
        questionDiv.append(questionText);

        // Create radio button options (A, B, C, D)
        ['A', 'B', 'C', 'D'].forEach(option => {
            const label = $('<label>').text(questionData[option]);

            const radioButton = $('<input>')
                .attr('type', 'radio')
                .attr('name', `Q${questionNum}`) 
                .val(option);

            // Add radio button inside label, and then label to the question container
            label.prepend(radioButton);
            questionDiv.append(label)
        });

        // grade button
        const gradeButton = $('<button>')
            .addClass('grade-button')
            .text('Grade')
            .attr('data-answer', questionData.ANS);
        
        questionDiv.append(gradeButton);
        return questionDiv;
    }

    addToDOM(destination) {
        $(destination).append(this.domElement);
    }
}

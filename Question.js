/*class Question {
    constructor(questionData, questionNumber) {
        // Create a DOM structure and store it in an instance variable
        this.domElement = this.createQuestionDOM(questionData, questionNumber);
    }
    
    let question=null;
    let choices=null;
    let correct=null;
    let select=null;
    constructor(question, choices, correct) {
        this.question = question;
        this.choices = choices;
        this.correct = correct;
        this.selected = null;
    }
}*/

class Question {
    constructor(questionData, questionNumber) {
        // Create a simple HTML structure for the question and store it in an instance variable
        this.domElement = this.createQuestionDOM(questionData, questionNumber);
    }

    // Method to create the HTML structure for a question
    createQuestionDOM(questionData, questionNumber) {
        // Main question container
        const questionDiv = $('<div>').addClass('question');

        // Paragraph for the question text
        const questionText = $('<p>').text(questionData.Q);
        questionDiv.append(questionText);

        // Create radio button options (A, B, C, D)
        ['A', 'B', 'C', 'D'].forEach(option => {
            // Label for each option
            const label = $('<label>').text(questionData[option]);

            // Radio button input
            const radioButton = $('<input>')
                .attr('type', 'radio')
                .attr('name', `Q${questionNumber}`) // unique name for each question
                .val(option);

            // Add radio button inside label, and then label to the question container
            label.prepend(radioButton);
            questionDiv.append(label).append('<br>'); // add a line break after each label
        });

        // "Grade" button with data-answer attribute to store the correct answer
        const gradeButton = $('<button>')
            .addClass('grade-button')
            .text('Grade')
            .attr('data-answer', questionData.ANS);
        
        // Append the grade button to the question container
        questionDiv.append(gradeButton);

        // Return the completed question DOM element
        return questionDiv;
    }

    // Method to add the question to a specified container on the page
    addToDOM(destination) {
        $(destination).append(this.domElement);
    }
}

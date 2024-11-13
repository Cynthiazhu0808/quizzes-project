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

// Question.js

class Question {
    constructor(questionData, questionNumber) {
        // Create a DOM structure and store it in an instance variable
        this.domElement = this.createQuestionDOM(questionData, questionNumber);
    }

    // Method to create the HTML structure for a question
    createQuestionDOM(questionData, questionNumber) {
        // Create a main container div for the question
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        // Add a question paragraph
        const questionParagraph = document.createElement('p');
        questionParagraph.textContent = questionData.Q;
        questionDiv.appendChild(questionParagraph);

        // Create radio button options (A, B, C, D)
        ['A', 'B', 'C', 'D'].forEach(option => {
            // Create a label for each option
            const label = document.createElement('label');
            label.textContent = questionData[option];

            // Create the radio button input
            const radioButton = document.createElement('input');
            radioButton.type = 'radio';
            radioButton.name = `Q${questionNumber}`; // Unique name for each question's options
            radioButton.value = option;

            // Append radio button to label, then label to questionDiv
            label.prepend(radioButton);
            questionDiv.appendChild(label);

            // Line break for layout
            questionDiv.appendChild(document.createElement('br'));
        });

        // Create a "Grade" button for grading this question
        const gradeButton = document.createElement('button');
        gradeButton.textContent = 'Grade';
        gradeButton.classList.add('grade-button');
        gradeButton.dataset.answer = questionData.ANS; // Store correct answer in data attribute
        questionDiv.appendChild(gradeButton);

        return questionDiv; // Return the constructed DOM structure
    }

    // Method to add the question to the DOM at a specified destination
    addToDOM(destination) {
        $(destination).append(this.domElement); // Append the stored DOM element to the destination
    }
}

// Main driver script to use the questions array and add questions to the page
$(document).ready(() => {
    // Assuming there is a container in the HTML with class 'quiz-questions'
    const container = $('.quiz-questions');

    // Loop through the questions array and create a Question instance for each one
    questions.forEach((questionData, index) => {
        // Create a new Question object
        const question = new Question(questionData, index);
        
        // Add the question to the DOM
        question.addToDOM(container);
    });
});




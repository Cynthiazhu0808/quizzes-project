'use strict';

class Question {
    element;

    /** 
    * Constructor
    *
    * @param {Object} questionData - a dictionary of the question content
    * @param {number} questionNumber - a number of the question index
    */
    constructor(questionData, questionNumber) {
        this.element=this.createDiv(questionData,questionNumber);
    };

    /** 
    * A helper function which creates the div
    *
    * @param {Object} questionData - a dictionary of the question content
    * @param {number} questionNumber - a number of the question index
    * @return {Object} a div to be appended to the web page
    */
    createDiv(questionData,questionNumber){
        let questionDiv = $('<div>').addClass('question'); //create a div with class question

        let questionText = $('<p>').text("Q"+questionNumber+": "+questionData.Q);
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
            label.prepend(radioButton);
            questionDiv.append(label).append('<br>');
        });

        // "Grade" button with data-answer attribute to store the correct answer
        let gradeButton = $('<button>')
            .addClass('grade-button')
            .text('Grade')
            .attr('data-answer', questionData.ANS);

        // Append the grade button to the question container
        questionDiv.append(gradeButton);
        let resultText=$('<p>').addClass('resultText');
        questionDiv.append(resultText);
        return questionDiv;
    };

    /** 
    * Method to add the question to a specified container on the page
    *
    * @param {Object} location - a jquery object of the location to append the question to 
    */
    addToDOM(location) {
        location.append(this.element);
    };
}

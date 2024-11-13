class Question {
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
}



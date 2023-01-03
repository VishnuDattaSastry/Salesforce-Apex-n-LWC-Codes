import {
    LightningElement
} from 'lwc';

export default class QuizApp extends LightningElement {

    selected={} // For storing selected answers 
    correctAnswer = 0 // to show the number of correct answers
    isSubmitted = false //  use to show the result
    myQuestions = [{
            id: "Question 1",
            question: "Which one of the following is not a Template Loop ?",
            answers: {
                a: "for:each",
                b: "iterator",
                c: "map loop"
            },
            correctAnswer: "c"
        },
        {
            id: "Question 2",
            question: "Which of the file is invalid in LWC component folder ?",
            answers: {
                a: ".svg",
                b: ".apex",
                c: ".js"
            },
            correctAnswer: "b"
        },
        {
            id: "Question 3",
            question: "Which one of the following is not a Directive ?",
            answers: {
                a: "for:each",
                b: "if:true",
                c: "@track"
            },
            correctAnswer: "c"
        }
    ]
    // Used for disabling submit button till all questions answered
    get ifAllNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length)
    } 
    // To apply dynamic results to our result 
    get isScoredFull() {    
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswer? 
        `slds_text-color_success`:`slds-text-color_error`}`
    }
    changehandler(event) {   // This gets called on every click on the options 
        const {name, value} = event.target
        this.selected={...this.selected, [name]: value} 
    }
        submitHandler(event) {      // This is form submit handler
            event.preventDefault()
            let correct = this.myQuestions.filter (item=>this.selected[item.id]=== item.correctAnswer)
            this.correctAnswer = correct.length
            this.isSubmitted = true
            console.log("Total correct answers are: ", this.correctAnswer)
    }

    resetHandler() {  // This is form reset handler
        this.selected = {}
        this.correctAnswer=0
        this.isSubmitted=false
    }
}
const questions = [
    {
        question:  "What is blockchain at its core?",
        answers: [
            { Text: "A centralized ledger", correct: false},
            { Text: "A decentralized and distributed digital ledger", correct: true},
            { Text: "A digital currency" , correct: false},
            { Text: "A type of database", correct: false},
        ]
    },
    {
        question:  "What does each transaction in a blockchain get grouped into?",
        answers: [
            { Text: "A file", correct: false},
            { Text: "A block", correct: true},
            { Text: "A chain", correct: false},
            { Text: "A list", correct: false},
        ]
    },
    {
        question:  "Why is blockchain considered secure and trustworthy?",
        answers: [
            { Text: "Because it is centralized", correct: false},
            { Text: "Because transactions can be easily altered", correct: false},
            { Text: "Because recorded transactions cannot be altered or tampered with", correct: true},
            { Text: "Because it uses physical ledgers", correct: false},
        ]
    },
    { 
        question:  "How does blockchain benefit various industries?",
        answers: [
            { Text: "By creating intermediaries", correct: false},
            { Text: "By reducing transparency", correct: false},
            { Text: "By centralizing transactions", correct: false},
            { Text: "By enabling peer-to-peer transactions and reducing the need for intermediaries", correct: true},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0; // Corrected typo here
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.Text; // Corrected property name here
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }    
        button.addEventListener("click", selectAnswer)
        });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild); 
    }
}

function selectAnswer(e){ 
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; // Increment score if answer is correct
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} ! `;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block" ;
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

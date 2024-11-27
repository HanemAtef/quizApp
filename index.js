const questions = [
    {
        question: "which is the largest animal in the world",
        answers: [
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue While", correct: true },
        ]
    }, {
        question: "which is the largest animal in the world",
        answers: [
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue While", correct: true },
        ]
    }, {
        question: "which is the largest animal in the world",
        answers: [
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue While", correct: true },
        ]
    }, {
        question: "which is the largest animal in the world",
        answers: [
            { text: "lion", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Blue While", correct: true },
        ]
    }
];
const questionElement = document.querySelector("#question");
const answerElement = document.querySelector("#answers");
const nextButton = document.querySelector("#next-btn");

let currentQuestIn = 0;
let score = 0;
function start() {
    currentQuestIn = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}


function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestIn];
    let questionNo = currentQuestIn + 1;
    questionElement.innerHTML = questionNo + ")" + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answerElement.firstChild) {
        answerElement.removeChild(answerElement.firstChild);
    }
}
answerElement.addEventListener("click", (e) => {
    nextButton.style.display = "block";
    let selected = e.target;


    if (selected.dataset.correct === "true") {
        selected.classList.add("true");
        score++;
        selected.style.backgroundColor = "green";

    } else {
        selected.classList.add("false");
        selected.style.backgroundColor = "red";

    }
    Array.from(answerElement.children).forEach(function (btn) {
        if (btn.dataset === "true") {
            btn.classList.add("true");
        }
        btn.disabled = true;
    });
})
start();
nextButton.addEventListener("click", () => {
    if (currentQuestIn < questions.length) {
        currentQuestIn++;
        if (currentQuestIn < questions.length) {
            showQuestion();
        } else {
            let sc = document.querySelector(".ques");
            sc.innerHTML = `your score is${score} of 4 `;
            start();

        }
    } else {
        start();
    }

});



showQuestion();

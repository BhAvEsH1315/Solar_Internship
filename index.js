var quizData = [
    {
        question: "CSS Stands for",
        a: "Cascad Style Sheet",
        b: "Cascading Sheets of Style",
        c: "Cascading Style Sheet",
        d: "None of Above",
        correct: 'c',
    },
    {
        question: "Which is not a Programming Language?",
        a: "JavaScript",
        b: "C++",
        c: "HTML",
        d: "JAVA",
        correct: "c",
    },
    {
        question: "What Framework is related with JS?",
        a: "React",
        b: ".NET",
        c: "Flask",
        d: "Django",
        correct: "a",
    },
    {
        question: "Which is not a Framework?",
        a: "JavaScript",
        b: "React",
        c: "Angular",
        d: "Django",
        correct: "a",
    },
];
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_val");
var option_b = document.getElementById("b_val");
var option_c = document.getElementById("c_val");
var option_d = document.getElementById("d_val");
var submitbtn = document.getElementById("submit");
var currentQues = 0;
var quizScore = 0;

loadQuiz();
function loadQuiz() {
    deselect();
    question.innerHTML = quizData[currentQues].question;
    option_a.innerText = quizData[currentQues].a;
    option_b.innerText = quizData[currentQues].b;
    option_c.innerText = quizData[currentQues].c;
    option_d.innerText = quizData[currentQues].d;
}
function deselect() {
    answer.forEach((element) => {
        element.checked = false;
    });
}
submitbtn.addEventListener("click", () => {
    var selectedOp;
    answer.forEach((element) => {
        if (element.checked) {
            selectedOp = element.id;
        }
    });
    if (selectedOp == quizData[currentQues].correct) {
        quizScore= quizScore+1;
    }
    currentQues=currentQues+1;

    if (currentQues == quizData.length) {
        console.log(quizScore);
        console.log(quizData.length);
        document.getElementById("final").innerHTML = `<h3 class="text-center">You have Scored ${quizScore} out of ${quizData.length}</h3>`;
    } else {
        loadQuiz();
    }
});

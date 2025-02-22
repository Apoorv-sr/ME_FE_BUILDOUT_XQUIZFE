// Sample data
const questions = [
  {
    text: "Which language is primarily used for web app development?",
    options: ["C#", "Python", "JavaScript", "Swift"],
    correct: 2,
  },
  {
    text: "Which of the following is a relational database management system?",
    options: ["Oracle", "Scala", "Perl", "Java"],
    correct: 0,
  },
  {
    text: "In which language is memory management provided by JVM?",
    options: ["Java", "C", "C++", "Python"],
    correct: 0,
  },
  {
    text: "What does HTML stand for?",
    options: [
      "Hyperlink and Text Markup Language",
      "High Technology Modern Language",
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
    ],
    correct: 2,
  },
  {
    text: "Which of the following is not a valid variable name in Python?",
    options: ["_myVar", "myVar2", "2myVar", "my_var"],
    correct: 2,
  },
  {
    text: "Which of the following is not an object-oriented programming language?",
    options: ["Java", "C#", "Scala", "C"],
    correct: 3,
  },
  {
    text: "Which tool is used to ensure code quality in JavaScript?",
    options: ["JSLint", "TypeScript", "Babel", "Webpack"],
    correct: 0,
  },
  {
    text: "In which data structure, elements are added at one end and removed from the other?",
    options: ["Array", "Stack", "Queue", "LinkedList"],
    correct: 2,
  },
  {
    text: "What is the primary use of the Git command 'clone'?",
    options: [
      "To stage changes",
      "To copy a repository",
      "To switch to a different branch",
      "To list all the files in a repository",
    ],
    correct: 1,
  },
  {
    text: "What does API stand for in the context of programming?",
    options: [
      "Apple Pie Interface",
      "Application Programming Interface",
      "Advanced Peripheral Integration",
      "Application Process Integration",
    ],
    correct: 1,
  },
];

//Select the DOM elements
const submitButton = document.getElementById("submit");
const nextButton = document.getElementById("next");
const questionElement = document.getElementById("question");
const answerList = document.getElementById("answer-list");

//variables to track quiz progress
let currentQuestionIndex = 0;
let score = 0;

//function to load the current question and answer
function loadQuestion() {
  questionElement.textContent = questions[currentQuestionIndex].text;
  answerList.innerHTML = "";
  questions[currentQuestionIndex].options.forEach((option, index) => {
    let el = document.createElement("li");
    el.innerHTML = `<input type="radio" name="answer" value="${index}" id="option${index}">
    <label for="option${index}">${option}</label>`;
    answerList.appendChild(el);
  });
  submitButton.style.display = "inline";
  nextButton.style.display = "none";
}

submitButton.addEventListener("click", () => {
  let el = document.querySelector(`input[name="answer"]:checked`);
  console.log("Selected element is: ", el);

  if (!el) {
    alert("Please select an answer!");
    return;
  }

  let correctOption = questions[currentQuestionIndex].correct;
  if (parseInt(el.value) == correctOption) {
    score = score + 1;
  }

  let options=document.querySelectorAll("#answer-list li");
  options[questions[currentQuestionIndex].correct].style.backgroundColor="rgb(144, 238, 144)";

  currentQuestionIndex++;
  submitButton.style.display = "none";
  nextButton.style.display = "inline";
});

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex<10)
    {
        submitButton.style.display = "inline";
        nextButton.style.display = "none";
        loadQuestion();
    }
    else{
        alert(`Quiz finished! Your score is: ${score}/${questions.length}`);
        currentQuestionIndex=0;
        score=0;
        loadQuestion();
    }
});

loadQuestion();

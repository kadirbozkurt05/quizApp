import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  SHOW_ANSWER_BUTTON_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let nextQuestionButton = null;
let currentQuestion = null;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextQuestionButton.disabled = true;
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  progressBar();

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('id', key);
    answerElement.addEventListener('click', function () {
      nextQuestionButton.disabled = false;
      if (answerElement.id === currentQuestion.correct) {
        const trueAnswer = document.getElementById(`${key}`);
        const allAnswers = document.querySelectorAll('.allAnswers');
        allAnswers.forEach((answer) => {
          answer.disabled = true;
        });
        trueAnswer.style.backgroundColor = 'green';
        quizData.userScore++;
      } else {
        const trueAnswer = document.getElementById(
          `${currentQuestion.correct}`
        );
        const falseAnswer = document.getElementById(`${key}`);
        trueAnswer.style.backgroundColor = 'green';
        falseAnswer.style.backgroundColor = 'red';
        const allAnswers = document.querySelectorAll('.allAnswers');
        allAnswers.forEach((answer) => {
          answer.disabled = true;
        });
      }
    });
    answersListElement.appendChild(answerElement);
  }
  nextQuestionButton.addEventListener('click', nextQuestion);

  document
    .getElementById(SHOW_ANSWER_BUTTON_ID)
    .addEventListener('click', showAnswer);
};
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  sessionStorage.setItem('data', JSON.stringify(quizData));

  if (quizData.questions.length > quizData.currentQuestionIndex) {
    initQuestionPage();
  } else {
    const bar = document.querySelector('.progress-bar');
    bar.style.width = '100%';

    const userInterface = document.getElementById(USER_INTERFACE_ID);
    const reloadBtn = document.createElement('button');
    const lastScore = document.createElement('div');

    lastScore.innerHTML = String.raw`
    <h1 id='score'>Question : ${quizData.currentQuestionIndex}<br>
     Score : ${quizData.userScore}</h1>`;

    reloadBtn.textContent = 'Try Again';
    reloadBtn.addEventListener('click', function () {
      sessionStorage.removeItem('data');
      location.reload();
    });
    userInterface.innerHTML = '';
    userInterface.appendChild(lastScore);
    userInterface.appendChild(reloadBtn);
  }
};

const showAnswer = () => {
  const allAnswers = Array.from(document.getElementsByClassName('allAnswers'));
  allAnswers.forEach((answer) => {
    if (answer.id === currentQuestion.correct) {
      document.getElementById(answer.id).style.backgroundColor = 'green';
    }
    answer.disabled = true;
  });
  nextQuestionButton.disabled = false;
};

const progressBar = () => {
  const bar = document.querySelector('.progress-bar');
  const widthOfBar = `${
    (quizData.currentQuestionIndex / quizData.questions.length) * 100
  }%`;
  if (quizData.questions.length > quizData.currentQuestionIndex) {
    bar.style.width = widthOfBar;
  }
};

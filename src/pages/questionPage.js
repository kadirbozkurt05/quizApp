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
let countdownElement = null;
let currentQuestion = null;
let time = 5;
const bar = document.querySelector('.progress-bar');
const duck = document.getElementById('walking-duck-img');

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);
  userInterface.appendChild(questionElement);
  nextQuestionButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  countdownElement = document.getElementById('countdown');
  countdownElement.innerText = 'Time : 5';
  nextQuestionButton.disabled = true;
  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  countdown(time);
  progressBar();

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answerElement.setAttribute('id', key);

    answerElement.addEventListener('click', function () {
      clearInterval(countdownInterval);

      nextQuestionButton.disabled = false;

      if (answerElement.id === currentQuestion.correct) {
        const trueAnswer = document.getElementById(`${key}`);
        const allAnswers = document.querySelectorAll('.allAnswers');
        allAnswers.forEach((answer) => {
          answer.disabled = true;
        });
        trueAnswer.style.background = 'green';
        quizData.userScore++;
      } else {
        const trueAnswer = document.getElementById(
          `${currentQuestion.correct}`
        );
        const falseAnswer = document.getElementById(`${key}`);
        trueAnswer.style.background = 'green';
        falseAnswer.style.background = 'red';
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
    duck.style.left = '100%';
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
      document.getElementById(answer.id).style.background = 'green';
    }
    answer.disabled = true;
  });
  nextQuestionButton.disabled = false;
};

const progressBar = () => {
  if (quizData.currentQuestionIndex != 0) {
    duck.style.display = 'flex';
    duck.style.opacity = '1';
  }

  const widthOfBar = `${
    (quizData.currentQuestionIndex / quizData.questions.length) * 100
  }%`;

  if (quizData.questions.length > quizData.currentQuestionIndex) {
    bar.style.width = widthOfBar;
    duck.style.left = widthOfBar;
  }
};

/**
 * COUNTDOWN TIMER
 */

let countdownInterval;
const countdown = function (seconds) {
  countdownInterval = setInterval(() => {
    if (seconds === 0) {
      clearInterval(countdownInterval);
      countdownElement.innerText = 'Time Out';
      showAnswer();
    } else {
      countdownElement.innerHTML = `Time : ${seconds}`;
      seconds--;
    }
  }, 1000);
};

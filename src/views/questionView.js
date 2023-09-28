import { ANSWERS_LIST_ID } from '../constants.js';
import {
  NEXT_QUESTION_BUTTON_ID,
  SHOW_ANSWER_BUTTON_ID,
} from '../constants.js';
import { quizData } from '../data.js';
/**
 * Create a full question element
 *
 * @returns {Element}
 */

export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
  <div id = "upScore"><span class = "scoreW">Score</span> <span class = "scoreNum"> ${
    quizData.userScore
  }</span></div>
    <h1 id='score'>Question : ${quizData.currentQuestionIndex + 1}/${
    quizData.questions.length
  }
     </h1>
    <h1  class="question">${question}</h1>

    <ul class="answers" id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
    <button id="${SHOW_ANSWER_BUTTON_ID}">
    Show Answer
  </button>
  `;
  return element;
};

import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <img src="public/js-icon.png" alt="Quiz Image" class="quiz-image">
    <p class='welcome-text'>Welcome To JS QuizUp</p>
    <button id="${START_QUIZ_BUTTON_ID}">START QUIZ</button>
  `;
  return element;
};

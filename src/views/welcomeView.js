import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
  <img src="https://1.bp.blogspot.com/-TGQt5uRcAkg/XuMIJoAhwnI/AAAAAAAAA38/FaJQpUUDsGEYR1zBK1wqLWUA9DTYp5CiQCPcBGAYYCw/s587/js.png" alt="Quiz Image" class="quiz-image">
    <p class='welcome-text'>Welcome To JS QuizUp</p>
    <button id="${START_QUIZ_BUTTON_ID}">START QUIZ</button>
  `;
  return element;
};

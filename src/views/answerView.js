/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText) => {
  const element = document.createElement('button');
  element.classList.add('allAnswers')

  element.innerHTML = String.raw`
  ${key}: ${answerText};
  `;
  return element;
};

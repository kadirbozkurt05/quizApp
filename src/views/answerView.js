/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (key, answerText, isCorrect) => {
  const element = document.createElement('li');
  
  element.innerHTML = String.raw`
  <input type="radio" name="answer" id="${key}" value="${key}">
    ${key}: ${answerText};
  `;
  return element;
};

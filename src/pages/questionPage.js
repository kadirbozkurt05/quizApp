import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  
  

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  
  if (selectedAnswer) {
    // Check if the selected answer is correct
    const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
    const correctAnswer = currentQuestion.correct;
    
    

    if (selectedAnswer.value === correctAnswer) {

      // Increment the user's score
      quizData.userScore += 1;
      // Update the score display
      updateScoreDisplay();

      alert('Correct Answer!');
    } else {
      alert(`Incorrect. The correct answer is: ${currentQuestion.answers[correctAnswer]}`);
    }

  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
} else {
  alert('Please select an answer.');
}
};

const updateScoreDisplay = () => {
  // Get the element where you want to display the user's score
  const scoreElement = document.getElementById('score'); 
  
  // Update the score display with the user's score
  scoreElement.textContent = `Score: ${quizData.userScore}`;
};



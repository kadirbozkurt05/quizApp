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
    answerElement.setAttribute('id',key)
    answerElement.addEventListener('click',function(){
      if(answerElement.id === currentQuestion.correct){
        const trueAnswer = document.getElementById(`${key}`)
        const allAnswers = document.querySelectorAll('.allAnswers')
        allAnswers.forEach(answer=>{
          answer.disabled = true;
        })
        trueAnswer.style.backgroundColor='green'
        quizData.yourScore++;
      }else{
        const trueAnswer = document.getElementById(`${currentQuestion.correct}`)
        const falseAnswer = document.getElementById(`${key}`)
        trueAnswer.style.backgroundColor = 'green'
        falseAnswer.style.backgroundColor='red'
        const allAnswers = document.querySelectorAll('.allAnswers')
        allAnswers.forEach(answer=>{
          answer.disabled = true;
        })
      }
    })
    answersListElement.appendChild(answerElement);
  }
  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};
const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  sessionStorage.setItem('data',JSON.stringify(quizData))
  
  if(quizData.questions.length > quizData.currentQuestionIndex){
    initQuestionPage();
  }else{
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    const reloadBtn = document.createElement('button');
    const lastScore = document.createElement('div')
    lastScore.innerHTML = `${quizData.yourScore} / ${quizData.currentQuestionIndex}`;
    reloadBtn.textContent = 'Try Again'
    reloadBtn.addEventListener('click', function(){
      sessionStorage.removeItem('data');
      location.reload();
      
    })
    userInterface.innerHTML = '';
    userInterface.appendChild(lastScore);
    userInterface.appendChild(reloadBtn);
  }
};

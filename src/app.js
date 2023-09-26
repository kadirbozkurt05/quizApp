import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  const sessionQuizData = JSON.parse(sessionStorage.getItem('data'))
  if(sessionQuizData){
    quizData.currentQuestionIndex = sessionQuizData.currentQuestionIndex;
    quizData.yourScore = sessionQuizData.yourScore;
    initQuestionPage();
  }else{
    quizData.currentQuestionIndex = 0;
    initWelcomePage();
  }
  
  
  
};

window.addEventListener('load', loadApp);

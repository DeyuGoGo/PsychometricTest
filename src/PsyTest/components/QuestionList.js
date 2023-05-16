import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import questionsData from '../data/questions.json';
import Question from './Question';
import calculateResult from '../services/calculateResult';
import './QuestionList.css';

function QuestionList({ onResult }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  function handleAnswerSelected(answerIndex) {
    setAnswers([...answers, answerIndex]);

    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const result = calculateResult(answers);
      onResult(result);
      navigate('/result');
    }
  }

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="question-animation"
    >
      <Question
        ref={React.createRef()} // 新增的代碼
        key={currentQuestion}
        question={questionsData[currentQuestion]}
        options={questionsData[currentQuestion].options}
        onAnswerSelected={handleAnswerSelected}
      />
    </CSSTransition>
  );
}

export default QuestionList;
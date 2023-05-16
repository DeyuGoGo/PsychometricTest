import React from 'react';
import './Question.css';

const Question = React.forwardRef(({ question, options, onAnswerSelected }, ref) => {
  return (
    <div ref={ref} className="question">
      <h2>{question.question}</h2>
      {question.img_url && (
        <div className="image-container">
          <img src={question.img_url} alt="question" />
        </div>
      )}
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => onAnswerSelected(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
});


export default Question;

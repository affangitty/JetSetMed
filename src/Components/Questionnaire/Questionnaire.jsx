import React from 'react';
import "./Questionnaire.css";

const Questionnaire = ({ step, questions, nextStep, prevStep }) => {
  return (
    <div className="questionnaire">
      <h2>{questions.title}</h2>
      <form>
        {questions.questions.map((q, index) => (
          <div key={index} className="question">
            <label>{q.question}</label>
            {q.type === 'boolean' && (
              <div>
                <input type="radio" name={`question-${index}`} value="yes" /> Yes
                <input type="radio" name={`question-${index}`} value="no" /> No
              </div>
            )}
            {q.type === 'text' && <input type="text" name={`question-${index}`} />}
            {q.type === 'multiple' && (
              <div>
                {q.options.map((option, i) => (
                  <div key={i}>
                    <input type="radio" name={`question-${index}`} value={option} /> {option}
                  </div>
                ))}
              </div>
            )}
            {q.type === 'slider' && (
              <input type="range" min={q.min} max={q.max} name={`question-${index}`} />
            )}
          </div>
        ))}
      </form>
      <div className="navigation">
        {step > 0 && <button onClick={prevStep}>Back</button>}
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
};

export default Questionnaire;

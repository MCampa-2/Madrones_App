// Trail3.js
import React, { useState } from "react";
import { trail3 } from "../quizes/trail3.jsx";
import { useNavigate } from "react-router-dom";


function Trail3() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const totalQuestions = trail3.length;

  const handleChange = (questionId, option) => {
    setSelectedOption((prev) => {
      return { ...prev, [questionId]: option };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allAnswers = Object.keys(selectedOption).length;
    let newScore = 0;
    trail3.forEach((q) => {
       if (selectedOption[q.id] === q.correct.toString()) {
           newScore++;
       }
    });
    
    const percentCorrect = ((newScore / totalQuestions) * 100).toString();
    localStorage.setItem("trail3", Math.round(percentCorrect));
    if(allAnswers === totalQuestions){
        alert("You've completed Trail 3! You are done for today.")
        localStorage.setItem("completedTrail3", true);
        navigate("/")
    }else{
        alert("Please answer all questions")
    }
  };

  return (
    <div>
      <h2 className="trail-title">Trail 3</h2>
      <form className="trail-form" onSubmit={handleSubmit}>
        {trail3.map((question, index) => {
          return (
            <div key={index}>
              <p>{question.question}</p>
              <div className="true-false">
              <label htmlFor="true">True </label>
              <input
                onChange={() => handleChange(question.id, "true")}
                type="radio"
                name={`option${question.id}`}
                value="true"
                checked={selectedOption[question.id] === "true"}
              />
              
              <label htmlFor="false">False </label>
              <input
                onChange={() => handleChange(question.id, "false")}
                type="radio"
                name={`option${question.id}`}
                value="false"
                checked={selectedOption[question.id] === "false"}
              />
              </div>
            </div>
          );
        })}
        <button className="trail-submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Trail3;
// ExpoTrail.js
import React, { useState } from "react";
import { expoTrail } from "../quizes/expoTrail.jsx";
import { useNavigate } from "react-router-dom";


function ExpoTrail() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const totalQuestions = expoTrail.length;

  const handleChange = (questionId, option) => {
    setSelectedOption((prev) => {
      return { ...prev, [questionId]: option };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allAnswers = Object.keys(selectedOption).length;
    let newScore = 0;
    expoTrail.forEach((q) => {
       if (selectedOption[q.id] === q.correct.toString()) {
           newScore++;
       }
    });
    
    const percentCorrect = ((newScore / totalQuestions) * 100).toString();
    localStorage.setItem("expoTrail", Math.round(percentCorrect));
    if(allAnswers === totalQuestions){
        alert("You've completed Trail 1! You are done for today.")
        localStorage.setItem("completedExpoTrail", true);
        navigate("/")
    }else{
        alert("Please answer all questions")
    }
  };

  return (
    <div>
      <h2 className="trail-title">Expo Trail</h2>
      <form className="trail-form" onSubmit={handleSubmit}>
        {expoTrail.map((question, index) => {
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

export default ExpoTrail;
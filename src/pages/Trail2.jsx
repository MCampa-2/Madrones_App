import { trail2 } from "../quizes/trail2.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Trail2() {
    const navigate = useNavigate();
    const [selectedOptions, setSelectedOptions] = useState({});
   
    const totalQuestions = trail2.length;

    const handleChange = (questionId, option) => {
        setSelectedOptions((prev) => {
            return { ...prev, [questionId]: option };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allAnswers = Object.keys(selectedOptions).length;
        let newScore = 0;
        trail2.forEach((q) => {
           if (selectedOptions[q.id] === q.correct.toString()) {
               newScore++;
           }
        });
        
        const percentCorrect = ((newScore / totalQuestions) * 100).toString();
        localStorage.setItem("trail2", Math.round(percentCorrect));
        if(allAnswers === totalQuestions){
            alert("You've completed Trail 2! You are done for today.")
            localStorage.setItem("completedTrail2", true);
            navigate("/")
        }else{
            alert("Please answer all questions")
        }
    };

    return (
        <div>
            <h2 className="trail-title">Trail 2</h2>
            <form className="trail-form" onSubmit={handleSubmit}>
                {trail2.map((question, index) => {
                    return (
                        <div key={index}>
                            <p>{question.question}</p>
                            <div className="true-false">
                            <label htmlFor="true">True </label>
                            <input
                                onChange={() => handleChange(question.id, "true")}
                                type="radio"
                                value="true"
                                checked={selectedOptions[question.id] === "true"}
                            />
                            
                            <label htmlFor="false">False </label>
                            <input
                                onChange={() => handleChange(question.id, "false")}
                                type="radio"
                                value="false"
                                checked={selectedOptions[question.id] === "false"}
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

export default Trail2;